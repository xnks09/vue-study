/**
 * 첫 번째 인자로 읽을 파일을 전달하고, 결과를 콜백함수로 전달
 * 콜백함수는 첫 번째 인자로 에러, 두 번째 인자로 결과를 리턴
 * 
 * 파일을 정상적으로 읽었다면 에러는 값이 없음
 * 
 * readFile로 읽으면 Buffer형으로 데이터를 읽고, toString()을 이용하여 일반적인 문자열로 변경 가능
 * readFile도 비동기 형태로 동작하며, 비동기 처리 기법은 추후 확인
 * */ 
const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {

    fs.readFile('./vue-basic/book-server-client/chapter-3/test.html', (err, data) => {

        if(!err){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
            return
        }
        
        res.writeHead(500)
        res.end('server error')
    })
}).listen(3000, () => {
    console.log('server on : 3000 port')
});