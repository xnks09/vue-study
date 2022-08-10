/**
 * ===========================================
 *   findById - 아이디 값을 이용한 데이터 조회
 * ===========================================
 *
 * findById가 findByPk으로 변경됨
 * */ 

let {users, boards} = require('./model-example-associate')

users.findByPk(4).then((result) => {
    console.log(result)
})

//간략하게 가져오는 방법
users.findByPk(4, {raw: true}).then((result) => {
    console.log(result)
})