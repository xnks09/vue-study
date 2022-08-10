/**
 * ===================
 *   findAndCountAll
 * ===================
 *
 * 데이터를 조회하고 데이터와 전체 데이터의 개수를 가져옴
 * */ 

let {users, boards} = require('./model-example-associate')

users.findAndCountAll({raw: true}).then((result) => {
    console.log(result)

    console.log(result.count)
    console.log(result.rows)
})