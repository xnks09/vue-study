/**
 * ================================
 *    destroy를 이용한 데이터 삭제
 * ================================
 *
 * destroy 메소드는 where가 없으면 에러 발생
 * */ 

let {users, boards} = require('./model-example-associate')


users.destroy({
    where: {id: 2}
}).then( () => {
    console.log('end')
})