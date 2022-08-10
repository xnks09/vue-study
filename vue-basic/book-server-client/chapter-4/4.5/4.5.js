/**
 * 
 * */ 
const express = require('express')
let app = express();

const http = require('http')

const users = require('./users.js')
const boards = require('./boards.js')

app.use('/users', users)  //endpoint가 /users이면 users 모듈 호출
app.use('/boards', boards) //endpoint가 /boards면 boards 모듈 호출

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})