/**
 * =========================================
 *    users 모델 파일 - associate
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
    });

    users.associate = function (models) {
        users.hasMany(models.boards);
    };
    
    return users;
};