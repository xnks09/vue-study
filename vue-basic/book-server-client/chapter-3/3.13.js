/**
 * node.js 에서는 파일을 다루기 위해 fs 모듈을 제공함.
 * fs 모듈을 이용하면 파일을 읽고 쓸 수 있음
 * 
 * fs는 file system의 약자
 * */ 
const fs = require('fs')

fs.readFile('./vue-basic/book-server-client/chapter-3/test.html', function(err, data){
    if(!err){
        console.log('test.html 파일 읽기 성공')
        console.log(data)
        console.log(data.toString())
        return
    }
    console.log(err)
})

fs.readFile('./vue-basic/book-server-client/chapter-3/test.txt', function(err, data){
    if(!err){
        console.log('test.txt 파일 읽기 성공')
        console.log(data)
        console.log(data.toString())
        return
    }

    console.log(err)
})