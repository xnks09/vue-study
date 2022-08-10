/**
 * ======================
 *    Promise 기본구조
 * ======================
 * 
 * promise에서 가장 많이 보는 키워드가 then.
 * then을 통해 체이닝하여 비동기로 동작하는 함수들을 연결하여 마치 동기 형태로 표현
 * 
 * */ 
const fs = require('fs')

const _p = () => {
    return new Promise( (resolve, reject) => {

        fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
            if(err) reject(err)
            resolve(data.toString())
        })
    })
}

_p().then( (result) => {
    console.log(1)
    console.log(result)
    return _p()
}).then((result) => {
    console.log(2)
    console.log(result)
    return _p()
}).then((result) => {
    console.log(3)
    console.log(result)
}).catch(err => {
    console.log(err)
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
