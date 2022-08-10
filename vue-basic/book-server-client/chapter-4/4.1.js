/**
 * express를 사용하기 위해서는 npm을 이용하여 express 설치 필요
 * npm install -s express
 * 
 * cluster 모듈을 이용하면 클러스터링도 설정할 수 있지만, pm2를 이용하면
 * cluster 모듈없이 클러스터링을 할 수 있으므로 클러스터링을 굳이 코드로 구현할 필요는 없음
 * 
 * 챕터 3의 if문을 이용하는 것보다 훨씬 직관적으로 관리 가능
 * */ 
const express = require('express')
let app = express();

const http = require('http')

app.get('/', (req, res, next) => {
    res.send('hello world!!');
});

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})