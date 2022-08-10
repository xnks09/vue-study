const http = require('http');

//body 데이터의 경우 요청 객체에서 바로 가져올 수 없고, 데이터가 포함되면 이벤트를
//발생해서 데이터를 받아와야 함
//클라이언트가 데이터를 보내면 서버는 데이터 이벤트를 감지하여 데이터를 받아야 함
http.createServer((req, res) => {
    
    let {url, headers, method} = req
    let body = {};
    console.log(url, method)

    //req.on('data')의 콜백은 body 데이터를 인자로 받는데 해당 데이터는
    //버퍼 형태이므로 toString()으로 변환
    req.on('data', (data) => {
        console.log(data)
        console.log(data.toString())
        data.toString().split('&').map(item=>{
            let s = item.split('=')
            let key = s[0]
            let value = s[1]
            body[key] = value
        })
    }).on('end', () => {
        console.log(body)
    }).on('error', (err) =>{
        console.log(err)
    });
   
    res.writeHead(200);
    res.end('hello world');
}).listen(3000, function(){
    console.log('server on : 3000 port')
});