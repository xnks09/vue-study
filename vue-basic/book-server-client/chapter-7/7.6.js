/**
 * =============================================
 *    findOrCreate를 이용한 데이터 검사 후 추가
 * =============================================
 *
 * where를 이용하여 해당 컬럼을 찾고, 존재하지 않으면
 * defaults로 전달한 값을 생성하고 존재한다면 아무것도 생성하지 않음
 * 
 * */ 

let {users, boards} = require('./model-example-associate')

let name = '박정태'
let age = 26

users.findOrCreate({
    where: {name: name},
    defaults: {
        name: name,
        age: age
    }
}).then((user, created) => {
    console.log(user)
    console.log(created)
})