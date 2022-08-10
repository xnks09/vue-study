/**
 * =========================================
 *    boards 모델 파일 - associate
 * =========================================
 *
 * 
 * */ 

module.exports = function(sequelize, DataTypes){

    let boards = sequelize.define('boards', {
        //해당 테이블의 컬럼 정보
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
    }); 
    
    boards.associate = function (models) {
        boards.belongsTo(models.users);
    };

    return boards;
}