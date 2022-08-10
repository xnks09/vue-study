/**
 * ================================
 *    findAll - 모든 데이터 조회
 * ================================
 *
 * 모든 데이터를 다 가져옴
 * */ 

let {users, boards} = require('./model-example-associate')

users.findAll({}).then((result) => {
    console.log(result)
})

//raw: true를 사용할 경우 간결하게 결과 확인
users.findAll({raw: true}).then((result) => {
    console.log(result)
})