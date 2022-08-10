/**
 * =================================================
 *    콜백 구조를 이용한 비동기 처리 함수 형태로 분리
 * =================================================
 * 
 * 5.2의 코드는 코드가 길어지면 코드가 복잡해지며,
 * 각 fs.readFile을 함수로 분리하여 사용하면 아래와 같이 사용 가능
 * 
 * 코드 5-2처럼 작성하다 보면 코드가 점점 안쪽으로 들어가서 화살표 형태가 됨
 * 이러한 형태를 콜백 헬이라고 표현하고, 이를 해결하고자 Promise 패턴을 사용
 * 
 * 
 * */ 
const fs = require('fs')

const thirdFs = () => {
    
    fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
        console.log(3)
        console.log(data.toString())
        console.log('test')
    })
}

const secondFs = () => {
    
    fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
        console.log(2)
        console.log(data.toString())
        thirdFs()
    })
}

const firstFs = () => {
    
    fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
        console.log(1)
        console.log(data.toString())
        secondFs()
    })
}

firstFs()

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
