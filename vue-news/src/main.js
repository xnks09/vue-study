import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index.js';
import { store } from './store/index.js'

const app = createApp(App);
app.use(router, store); // 사용 설정 하기
app.mount('#app');


//아래와 같이 사용 가능
//createApp(App).use(router).mount('#app')

app.config.globalProperties.$store = store; 
