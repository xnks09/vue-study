const http = require('http');

http.createServer((req, res) => {
    //console.log(req); //상당한 양의 데이터를 갖고 있음
    let url = req.url;
    let method = req.method;
    let headers = req.headers;

    console.log(url, method, headers);
    
    res.writeHead(200);
    res.end('hello world');
}).listen(3000, function(){
    console.log('server on : 3000 port')
});