/**
 * ===============================
 *    create를 이용하여 데이터 생성
 * ===============================
 *
 * 
 * */ 

let {users, boards} = require('./model-example-associate')

users.create({
    name: '박정태',
    age: '26'
}).then((result) => {
    console.log(result)
})