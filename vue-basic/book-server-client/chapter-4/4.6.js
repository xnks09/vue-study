/**
 * app.use로 등록한 미들웨어는 모든 요청에 대해 동작
 * */ 
const express = require('express')
let app = express();

const http = require('http')

//만약 next()가 없다면 서버 측에서만 첫 번째 미들웨어가 출력되고 클라이언트는 아무런 응답을 받지 못함
//만약 해당 미들웨어가 실행 중 문제가 발생하여 다음 미들웨어를 실행하지 못한다면 해당 부분에서
// 두 번째 인자인 응답 객체를 이용하여 클라이언트에 응답을 해주어야함

//미들웨어에서는 반드시 next()를 호출하여 다음 미들웨어를 호출해야함
//만약 문제가 생겼다면 클아이언트에게 문제가 생겼다고 알려야함
app.use((req, res, next) => { //미들웨어 등록
    console.log('첫 번째 미들웨어')
    next()
})

app.get('/', (req, res, next) => { //미들웨어 등록
    res.send('hello world')
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})