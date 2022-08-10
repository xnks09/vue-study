/**
 * ==================================
 *    콜백 구조를 이용한 비동기 처리
 * ==================================
 * 비동기 형태로 작성된 코드는 순서를 보장받지 못함. 이 부분은 프로그램에서 문제로 이어질 수 있음
 * 콜백함수를 이용하여 비동기 패턴을 해결할 수 있음
 * 
 * 첫 번째 fs.readFile을 실행하면, 메인 쓰레드는 해당 코드를 다른 쓰레드에 넘김
 * 해당 코드를 전달받은 쓰레드를 워커 쓰레드라고 표현
 * 워크 쓰레드는 첫 번째 fs.readFile을 실행. 실행이 끝나면 결과를 반환하여 콜백함수를 메인 쓰레드에게 전달
 * 
 * 메인 쓰레드는 콜백함수를 실행하는데 다시 fs.readFile을 만나고 해당 코드를 워커 쓰레드에게 전달
 * 이 흐름을 반복
 * 
 * */ 
const fs = require('fs')

fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
    console.log(1)
    console.log(data.toString())

    fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
        console.log(2)
        console.log(data.toString())

        fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
            console.log(3)
            console.log(data.toString())
            console.log('test')
        })
    })
})

/**
 * [실행결과]
 * 
    1
    asynchronous 테스트1
    asynchronous 테스트2
    asynchronous 테스트3
    asynchronous 테스트4
    2
    asynchronous 테스트1
    asynchronous 테스트2
    asynchronous 테스트3
    asynchronous 테스트4
    3
    asynchronous 테스트1
    asynchronous 테스트2
    asynchronous 테스트3
    asynchronous 테스트4
    test
 * */
