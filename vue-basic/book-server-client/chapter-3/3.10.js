const http = require('http');

/**
 * GET을 제외한 method는 body 데이터를 받을 수 있음
 * */ 

http.createServer((req, res) => {
    
    let {url, headers, method} = req

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