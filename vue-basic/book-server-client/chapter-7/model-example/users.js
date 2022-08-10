/**
 * =========================================
 *    users 모델 파일
 * =========================================
 *
 * 
 * */ 
module.exports = function(sequelize, DataTypes){

    let users = sequelize.define('users', {
        //해당 테이블의 컬럼 정보
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(11),
            defaultValue: 25
        }
    }, {
        //모델(테이블의 옵션)
        tableName: 'users',
        freezeTableName: false, //define에 전달된 첫 번째 인자를 자동으로 tableName으로 바꾸는 유무, false: 첫번째 인자로 tableName을 변경
        timestamps: false //Sequelize가 자동으로 createdAt, updatedAt을 생성할지에 대한 유무, 모델을 이용하여 데이터를 생성하거나 수정하면 createdAt과 updatedAt의 값을 자동으로 추가/수정
    }); 
    
    return users;
}