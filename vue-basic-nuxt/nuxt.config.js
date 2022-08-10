module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-basic-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    컴포넌트 캐시의 허용 유무. 캐시 공간이 너무 크면 메모리 공간을 많이 사용하므로 적당히 사용하는 것이 좋음 
  */
  cache: {
    max: 1000,
    maxAge: 1000 * 60 * 60 //기본값 15분, ms(1/1000초) 단위를 사용하므로 [1000(1초) X 60 = 1분]
  },
  /*
  ** Customize the progress bar color
     페이지 이동시 상단에 뜨는 progress bar 설정
  */
  loading: { 
    color: '#3B8070',
    height: '5px',
    failedColor: 'red',
    duration: 1000 * 10 //기본값 5초
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

