/**
 * 등록된 라우터의 콜백함수 두 번째 인자로 응답 객체를 받음
 * express에서는 쿨라이언트에게 다양한 형태로 응답 가능
 * 
 * download() : 파일 다운로드
 * json() : json 형태로 응답
 * redirect() : 해당 경로로 강제 이동
 * render() : express에서 제공하는 pug와 ejs라고 하는 템플릿 엔진을 HTML로 렌더링할 때 사용
 * send() : 전송된 데이터에 따라 알맞은 형식으로 변경되어서 전송
 *          send('hello world') => text형태로 전송
 *          send('<h1>hello world</h1>') => HTML 형식으로 전송
 * status() : 상태코드를 변경할 때 사용
 *            res.status(201).json({message: 'success'})
 * */ 
const express = require('express')
let app = express();

const http = require('http')

app.get('/send', (req, res, next) => {
    res.send('hello world!!')
});

app.get('/download', (req, res, next) => {
    res.download('./test.txt')
});

app.get('/redirect', (req, res, next) => {
    res.redirect('/send')
});

app.get('/JSON', (req, res, next) => {
    res.json({message: 'success', code: 0})
});


http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})