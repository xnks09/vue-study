const fs = require('fs')
const express = require('express')
const multer = require('multer')

let upload = multer({ dest: './uploads/'})
let app = express()

app.get('/multi', (req, res) => {
    fs.readFile('./vue-basic/book-server-client/chapter-8/file_upload/multi.html', 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
})

app.post('/multiupload', upload.array('file'), (req, res) => {
    console.log(req.body)   
    console.log(req.file)
    res.status(204).end()
})

//파일 업로드를 3개로 제한할 경우 사용
app.post('/multiupload1', upload.array('file', 3), (req, res) => {
    console.log(req.body)   
    console.log(req.file)
    res.status(204).end()
})

//array 대신 fields를 사용할 경우 => 여러 개의 name을 사용할 수 있음
var op = upload.fields([{name: 'file1'}, {name: 'file2'}])
app.post('/multiupload2', op, (req, res) => {
    console.log(req.body)   
    console.log(req.file)
    res.status(204).end()
})

// fields에서도 업로드 파일 개수 설정 가능
var op1 = upload.fields([
    {name: 'file1', maxCount: 1}, 
    {name: 'file2', maxCount: 4}
]) 
app.post('/multiupload3', op1, (req, res) => {
    console.log(req.body)   
    console.log(req.file)
    res.status(204).end()
})


/**
 * 파일 업로드 속성
 * */ 
let upload1 = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            //파일 업로드 경로 설정
            cb(null, 'uploads/'); //콜백
        },
        filename: (req, file, cb) => {
            //파일 이름 설정
            cb(null, file.originalname) //콜백
        }
    })
})

//파일업로드를 자체 서버가 아닌 다른 서버(ex. S3)로 전송이 필요할 경우 파일을 자체 서버로 업로드 후 다른 서버로 넘겨주고 나서
//해당 파일을 삭제하는 절차가 필요함. 그러나 디스크가 아닌 임시로 메모리에 저장하면 위 과정이 필요없음
let upload2 = multer({
    storage: multer.memoryStorage({ //메모리 저장
        destination: (req, file, cb) => {
            //파일 업로드 경로 설정
            cb(null, 'uploads/'); //콜백
        },
        filename: (req, file, cb) => {
            //파일 이름 설정
            cb(null, file.originalname) //콜백
        }
    })
})



app.listen(3000, () => {
    console.log('server on 3000 port')
})