/**
 * =========================
 *   데이터 조회시 옵션 설정
 * =========================
 *
 * ORDER BY, LIMIT, OFFSET, 컬럼 선택, WHERE를 할 수 있음
 * */ 
const { Op } = require("sequelize");

let {users, boards} = require('./model-example-associate')

/**
 * 컬럼 선택 : 특정 컬럼만 가져오고 싶을 때 attributes를 사용
 * */ 

users.findAll({
    attributes: ['id', 'name'],
    raw: true
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})


/**
 * LIMIT, OFFSET : 쿼리문을 만들 때와 똑같은 기능. 개수와 몇 번째 데이터부터 사용할지 정해주는 키워드
 *                 offset이 3이기 때문에 4번 째 데이터부터 1개만 출력
 * */ 
 users.findAll({
    attributes: ['id', 'name'],
    raw: true,
    limit: 1,
    offset: 3
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})

/**
 * ORDER BY : 정렬에 사용. 리스트 형태로 데이터를 받기 때문에 여러 개의 컬럼으로 정렬할 수 있음
 * */ 
 users.findAll({
    attributes: ['id', 'name'],
    raw: true,
    order:[
        ['id', 'DESC']
    ]
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})

/**
 * WHERE
 * */ 

 users.findAll({
    attributes: ['id', 'name'],
    raw: true,
    order:[
        ['id', 'DESC']
    ],
    where: {
        id: 5
    }
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})

/**
 * 기타 옵션들 where에서 사용
 * 
 * $and:[{a: 10}, {a: 11}] => (a=10 AND a=11)
 * $or:[{a: 10}, {a: 11}] => (a=10 OR a=11)
 * $gt:10, => >10
 * $gte: 10, => >=10
 * $lt: 10 => <10
 * $lte: 10 => <=10
 * $ne: 20 => !=20
 * $eq: 10 => =10
 * $not: true => IS NOT TRUE
 * $between: [10, 20] => BETWEEN 6 AND 10
 * $notBetween: [11, 15] => NOT BETWEEN 11 AND 15
 * $in: [1,2] => IN [1, 2]
 * $notIn: [1,2] => NOT IN [1, 2]
 * $like: '%hat' => LIKE '%hat'
 * $notLike: '%hat' => NOT LIKE '%hat'
 * */ 


 users.findAll({
    attributes: ['id', 'name'],
    raw: true,
    order:[
        ['id', 'DESC']
    ],
    where: {
        id: {
            [Op.between]: [5, 10] //$는 안먹음 
        }
    }
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})

/**
 * join: include를 사용
 * */ 

 users.findAll({
    include:[
        {
            model: boards
        }
    ]
}).then((result) => {
    console.log("======================================================")
    console.log(result)
    console.log("======================================================")
})
