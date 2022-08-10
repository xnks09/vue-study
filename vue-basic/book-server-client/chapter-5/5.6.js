/**
 * ========================================
 *     promise 각 체인마다 reject 검사
 * ========================================
 *
 * 
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
}).catch((err) => {
    console.log('err 발생')
    console.log(err)
    return _p()
}).then((result) => {
    console.log(2)
    console.log(result)
    return _p()
}).catch((err) => {
    console.log('err 발생')
    console.log(err)
    return _p()
}).then((result) => {
    console.log(3)
    console.log(result)
}).catch(err => {
    console.log('err 발생')
    console.log(err)
})

/**
 * 코드 자체의 가시성은 좋아졌으나 then과 catch가 반복적으로 나오기에 보기에 불편함
 * 이럴 경우 then의 두 번째 인자를 이용
 * 
 * then은 이전에 체이닝된 promise 객체에서 resolve가 호출되면, 첫 번째 인자가 호출되고,
 * reject가 호출되면 두 번째 인자가 호출됨
 * 결국 아래와 같이 사용할 수 있음
 * 
 * */ 

 _p().then( (result) => {
    console.log(1)
    console.log(result)
    return _p()
}, (err) =>{
    console.log('err 발생')
    console.log(err)
    return _p()
}).then( (result) => {
    console.log(2)
    console.log(result)
    return _p()
}, (err) =>{
    console.log('err 발생')
    console.log(err)
    return _p()
}).then( (result) => {
    console.log(3)
    console.log(result)
    return _p()
}, (err) =>{
    console.log('err 발생')
    console.log(err)
    return _p()
})

/**
 * 두 번째 콜백함수로 reject 호출 시 실행하는 콜백함수를 정의하면 됨
 * 이렇게 하면 promise 객체가 resovle를 호출할 때와, reject를 호출할 때 처리가 가능
 * 
 * 여기에서 catch로 처리하는 것과 then의 두 번째 인자로 처리하는 것의 차이를 알아야함
 * 두 번째 인자로 처리할 경우 바로 이전 체인의 promise객체가 reject를 호출할 때만 실행됨
 * 하지만 catch는 promise 객체가 실행되다가 reject가 호출되면 다음 체인 중 catch를 이동하여 실행
 * 그리고 해당 지점부터 코드 실행을 지속함.
 * 
 * 각 promise의 reject를 확인한다면 then의 두 번째 인자를 활용하고, promise 객체를 단위로 reject를 검사해야한
 * 다면 catch를 사용하는 것이 효과적
 * 
 * */ 