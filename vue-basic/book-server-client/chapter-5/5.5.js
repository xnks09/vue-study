/**
 * ======================
 *    Promise 에러 처리
 * ======================
 *
 * ----------
 *  resolve
 * ----------
 * promise 객체에 등록한 비동기 함수가 정상적으로 실행 완료됐다면 resolve를 호출하고,
 * 에러가 발생하면 reject를 호출
 * then을 이용하여 resolve로 반환한 값을 콜백함수의 첫 번째 인자로 받음
 * 
 * ----------
 *  reject
 * ----------
 * 에러를 처리하는 방법
 * 1. catch를 이용
 * resolve를 호출하면 then을 실행하지만 reject를 호출하면 가장 가깝게 체이닝된 catch를 실행
 * 
 * */ 
const fs = require('fs')

const _p = () => {
    return new Promise( (resolve, reject) => {

        fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
            if(err) reject(err)
            reject(data.toString())
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
    console.log('err 발생')
    console.log(err)
})

/**
 * [실행결과]
 * 
err 발생
asynchronous 테스트1
asynchronous 테스트2
asynchronous 테스트3
asynchronous 테스트4

 * */
