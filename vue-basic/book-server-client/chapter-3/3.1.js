const http = require('http');

http.createServer(function (req, res){
    res.writeHead(200); //헤더를 만드는 부분
    res.end('hello world'); // 요청을 종료한다는 의미
}).listen(3000, function(){
    console.log('server on : 3000 port')
});