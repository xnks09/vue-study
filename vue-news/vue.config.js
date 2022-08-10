const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
	//운영이 아닐 경우만 사용
	//lintOnSave : process.env.NODE_ENV !== 'production' 

	//전체끄기
	lintOnSave : false
}