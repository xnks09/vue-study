/**
 * ======================
 *    모델 가져와서 사용
 * ======================
 *
 * 테이블이 존재하지 않을 경우 해당 테이블을 생성함
 * */ 

let {users, boards} = require('./model-example')

users.findAll({raw: true}).then((result) => {
    console.log(result)
    return boards.findAll({raw: true})
}).then((result) => {
    console.log(result)
})