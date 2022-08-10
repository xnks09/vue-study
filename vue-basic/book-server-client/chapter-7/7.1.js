/**
 * ====================================
 *    sequelize 데이터베이스 연결 - 1
 * ====================================
 *
 * ORM - Object Relational Mapping의 약자. DB와 어플리케이션의 관계를 나타내는 오브젝트
 * 
 * express로 만들어진 서버와 데이터베이스의 관계를 오브젝트로 만들어 쿼리문을 직접 만들지 않고
 * 메소드를 사용하여 데이터베이스를 조작함.
 * 여기서 sequelize라는 모듈을 사용함
 * 
 * --------------
 * sequelize 설치
 * --------------
 * npm install -s mysql2
 * npm install -s sequelize
 * 
 * sequelize의 가장 큰 장점은 mysql과 다르게 Promise 형태를 사용
 * 그래서 Promise 객체로 만드는 번거로운 과정 없이 Promise 형태로 다룰 수 있음.
 * 물론 async/await도 바로 사용 가능
 * */ 

const Sequelize = require('sequelize')

const db = 'studydb'
const user = 'xnks'
const password = 'thffntus1!'
const options = {
    host: '127.0.0.1',
    dialect: 'mysql'
}

let sequelize = new Sequelize(db, user, password, options)