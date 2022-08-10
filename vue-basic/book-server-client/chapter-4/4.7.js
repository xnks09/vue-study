/**
 * 
 * */ 
const express = require('express')
let app = express();

const http = require('http')


var firstMiddleware = (req, res, next) => {
    console.log('첫 번째 미들웨어')
    next()
}

app.use(firstMiddleware)

app.get('/', (req, res, next) => {
    res.send('hello world')
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})