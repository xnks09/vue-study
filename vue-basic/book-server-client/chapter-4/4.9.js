/**
 * ==========================
 *  미들웨어를 활용한 에러 처리
 * ==========================
 * 미들웨어로 에러 처리도 가능하며, 약간 특수한 형태로 이루어져 있음
 * 에러를 처리하는 미들웨어는 첫 번째 에러체를 받음. 그리고 두 번째 객체부터
 * 네 번째 객체까지 요청, 응답, next 객체 순서대로 받음
 * ------------------------------------------------------------------------
 * app.use((err, req, res, next) => {
 *     console.log(err)
 * })
 * ------------------------------------------------------------------------
 * */ 
const express = require('express')
let app = express();

const http = require('http')

app.get('/:id', (req, res, next) => {

    let id = req.params.id

    if(id == 1){
        next('error발생')
    }else{
        res.send('hello world')
    }
})

// 각종 라우터 등록


//위에서 각종 라우터를 처리하고 일치하는 라우터가 없다면 아래의 404처리에서 담당
//미들웨어에서 중요한 것은 등록한 순서대로 실행된다는 것
app.use((req, res, next) => { //404 처리 미들웨어
    console.log('404')
    res.status(404).send('<h1>Not Found Page</h1>')
})

//err 인자는 next()로 전달된 첫 번째 인자를 받음
//에러 미들웨어를 이용하면 라우터에서 발생한 에러를 하나의 미들웨어에서 응답할 수 있음
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err)
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})