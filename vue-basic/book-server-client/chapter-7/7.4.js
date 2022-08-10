/**
 * ======================
 *    모델 가져와서 사용
 * ======================
 *
 * 테이블이 존재하지 않을 경우 해당 테이블을 생성함
 * */ 

let {users, boards} = require('./model-example-associate')

console.log(users.boards);

/**
 * sequelize는 모델 정의할 때 timestamp를 false로 설정하면 createdAt과 updatedAt을 생성하지 않음
 * 
 * 7.3 및 7.4를 통해 살펴본바와 같이 테이블이 없을 경우 생성하고, 존재하면 기존 테이븡을 그대로 사용.
 * 
 * DB를 처음부터 시작시 sequelize가 정한 규칙으로 만들면 관계없으나, 이미 존재하는 DB를 사용할 경우
 * 
 * 아래와 같이 추가 필요
 * --------------------------------------------------------------------------------------------
 *  users.associate = function (models) {
 *      users.hasMany(models.boards, {foreignKey: 'uId'}); //boards 테이블의 어떤키가 foreignKey인지 알려주는 것
 *  };
 * 
 *  boards.associate = function (models) {
 *      boards.belongsTo(models.users, {foreignKey: 'uId', targetKey: 'id'}); //targetKey의 경우 foreignKey가 users의 어떤 키인지 알려주는 것
 *  };
 * --------------------------------------------------------------------------------------------
 * 
 * 위의 foreignKey 또는 targetKey를 생략했던 이유는 sequelize 내부적으로 알아서 생성하여 호출해준것임
 * 
 * 모델(테이블)이 많아지면 관계가 복잡해질텐데, 이때는 아래와 같이 관계를 더 추가
 * ---------------------------------------------------------------------------------------------------------------------------
 *  users.associate = function (models) {
 *      users.hasMany(models.boards, {foreignKey: 'userId'}); 
 *      users.hasMany(models.otherModel); 
 *      users.belongsTo(models.otherMode2); 
 *  };
 * ---------------------------------------------------------------------------------------------------------------------------
 * */

