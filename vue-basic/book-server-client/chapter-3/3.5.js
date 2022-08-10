const http = require('http');


http.createServer((req, res) => {
    
    res.writeHead(200);
    //또는 아래와 같이
    //res.statusCode=200;
    res.end('hello world');

}).listen(3000, () => {
    console.log('server on : 3000 port')
});