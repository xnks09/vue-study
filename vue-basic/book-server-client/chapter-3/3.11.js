const http = require('http');

/**
 * POST 데이터를 받을 수 있도록 처리
 * 
 * 아래의 코드는 완벽한 코드가 아님
 * 데이터 파싱이 되는 부분과 응답하는 부분이 따로 엉뚱하게 실행함
 * 
 * body 데이터를 다 만들고 method와 URL 검사하고 클라이언트를 응답해야하는데,
 * 파싱이 끝나기전에 비동기적으로 응답해버림
 * 
 * 이 문제를 해결하기 위해서는 요청을 처리하는 부분을 on('data') 안에 넣어줌
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
        console.log(body);
    }).on('error', (error) => {
        console.log(err);
    })

    if(method == 'POST'){

        res.writeHead(200);

        if(url === '/users'){
            res.end('/users 정보추가');
        }else if(url === '/boards'){
            res.end('/boards 게시글추가');
        }else if(url === 'cloth'){
            res.end('/cloth 옷 추가')
        }
    }

    res.writeHead(404);
    res.end('Not Found Page!');

}).listen(3000, () => {
    console.log('server on : 3000 port')
});