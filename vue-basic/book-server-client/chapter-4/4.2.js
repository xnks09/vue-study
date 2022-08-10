/**
 * 라우팅 콜백함수는 3개의 인자를 받음
 * 1. 요청 객체
 * 2. 응답 객체
 * 3. next 객체
 * 
 * - 요청객체
 * 1. params
 * 2. query
 * 3. body
 * 
 * post의 경우 undefined로 출력되며, body를 사용하기 위해서는 bdoy-parser를
 * 미드웨어로 등록해야함
 * */ 
const express = require('express')
let app = express();


const bodyParser = require('body-parser')
const http = require('http')

app.use(bodyParser.json())

app.get('/user/:id', (req, res, next) => {
    let params = req.params;
    let querys = req.query;
    console.log(params, querys)
    res.send('hello world!!');
});

app.post('/', (req, res, next) => {
    let body = req.body
    console.log(body)
    res.send('/ POST 요청');
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})