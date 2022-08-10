/**
 * ================================
 *    update를 이용한 데이터 수정
 * ================================
 *
 * update 메소드는 두 번째 인자로 where을 넣지 않으면 에러가 발생함
 * */ 

let {users, boards} = require('./model-example-associate')


users.update({
    name: 'pjt'
}, {
    where: {id: 2}
}).then( () => {
    console.log('end')
})