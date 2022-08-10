/**
 * =============================================
 *    bulkCreate를 이용한 여러 개의 데이터 생성
 * =============================================
 *
 * 한 번에 여러 개의 데이터를 삽입할 경우 사용 
 * */ 

let {users, boards} = require('./model-example-associate')

let datas = [
    {
        name: '정태',
        age: '26'
    },
    {
        name: '정보문화사',
        age: '26'
    }
]

users.bulkCreate(datas).then((result) => {
    console.log(result)
})