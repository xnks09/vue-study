/**
 * 라우터에서 미들웨어를 등록
 * app.get('/', 미들웨어, 미들웨어 ...) 형태로 계속 등록 가능. 단, next를 통해서 다음 미들웨어를
 * 잘 호출해야함
 * 
 * 예를 들어 관리자 페이지로 접속하는 라우터와 일반 사이트로 접속하는 라우터가 있으면 아래처럼 등록
 * app.use('/admin', adminCheck, adminRouter)
 * app.use('/', normalUserRouter)
 * */ 
const express = require('express')
let app = express();

const http = require('http')


var firstMiddleware = (req, res, next) => {
    console.log('첫 번째 미들웨어')
    next()
}

//app.use(firstMiddleware)

//위 app.use가 아니라 아래와 같이 라우터에서 등록
app.get('/', firstMiddleware,(req, res, next) => {
    res.send('hello world 1')
})

app.get('/user', (req, res, next) => {
    res.send('hello world 2')
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})