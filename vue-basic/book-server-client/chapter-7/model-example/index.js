/**
 * ===========================================
 *   users, boards 모델을 하나로 묶어주는 파일
 * ===========================================
 *
 * 
 * */ 

const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const databaseName = 'studydb'
const user = 'xnks'
const password = 'thffntus1!'
const options = {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
}

let sequelize = new Sequelize(databaseName, user, password, options)
let db = {};

fs.readdirSync(__dirname)
    .filter(function(file){
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file){

        var model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
          )

        //아래의 경우에 6버전에는 안된다고하여 위와 같이 구현함
        //let model = sequelize['import'](path.join(__dirname, file));

        db[model.name] = model; //mode.name은 model을 읽으면서 define으로 생성할 때 전달한 첫 번째 인자
    });

db.sql = sequelize;
db.S= Sequelize;

sequelize.sync(); //객체로 생성된 모델과 데이터베이스의 싱크를 맞춤

module.exports = db;