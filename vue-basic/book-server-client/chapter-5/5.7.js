/**
 * ======================
 *    Promise.all()
 * ======================
 *
 * Promise.all()은 promise 객체로 된 것이 순서에 상관없이 실행된다면
 * 동시에 실행시켜줄 때 사용함
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

Promise.all([_p('1'), _p('2'), _p('3')]).then((result) => {
    console.log(result)
})

/**
 * then으로 처리된 결과를 리스트 형태로 받음
 * 물론 리스트의 길이는 Promise.all()로 넘긴 Promise로 이루어진 배열의 길이와 동일함
 * */ 