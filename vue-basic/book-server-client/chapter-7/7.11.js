/**
 * ======================================
 *   find - 가장 먼저 등장하는 데이터 조회
 * ======================================
 *
 * find가 findOne으로 변경됨
 * */ 

let {users, boards} = require('./model-example-associate')

users.findOne({raw: true}).then((result) => {
    console.log(result)
})