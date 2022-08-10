/**
 * 사용자가 요청한 파일을 응답
 * */ 
const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {

    let {url} = req

    fs.readFile('.'+url, (err, data) => {

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