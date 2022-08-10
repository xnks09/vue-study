const http = require('http');

/**
 * 동기 처리를 위해 요청을 처리하는 부분을 on('data')안에 삽입
 * 
 * URL과 method 검사하는 부분을 on('end') 안에 넣어 데이터 파싱이 완료되면,
 * 응답하도록 구현함
 * */ 

http.createServer((req, res) => {
    
    let {url, headers, method} = req
    let body = {};

    req.on('data', (data) => {
        data.toString().split('&').map(item => {
            let s = item.split('=')
            let key = s[0]
            let value = s[1]
            body[key] = value
        })
    }).on('end', () => {
        for (let i = 0; i < 10; i++) {
            console.log(i)
        }
        
        if(method == 'POST'){

            res.writeHead(200);
    
            if(url === '/users'){
                console.log('tt')
                res.end('/users 정보추가');
            }
        }


        res.writeHead(404);
        res.end('Not Found Page!');
    
    }).on('error', (error) => {
        res.writeHead(500);
        res.end('Server Error');
    });


}).listen(3000, () => {
    console.log('server on : 3000 port')
});