/**
 * ======================
 *    async/awat구조
 * ======================
 *
 * 
 * 
 * */ 
const fs = require('fs')

const _p = (val) => {
    return new Promise( (resolve, reject) => {

        fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
            if(err) reject(err)
            resolve(`${val} : ${data.toString()}`)
        })
    })
}

async function p(){
    var data1 = await _p(1)
    var data2 = await _p(2)
    var data3 = await _p(3)
    console.log(data1, data2, data3)
}

p()


/**
 * [실행결과]
 * 
1 : asynchronous 테스트1
asynchronous 테스트2
asynchronous 테스트3
asynchronous 테스트4 
2 : asynchronous 테스트1
asynchronous 테스트2
asynchronous 테스트3
asynchronous 테스트4 
3 : asynchronous 테스트1
asynchronous 테스트2
asynchronous 테스트3
asynchronous 테스트4
 * */
