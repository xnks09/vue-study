import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        // path : url 주소
        path: '/news',
        // component: url에 주소로 갔을 때 표시될 컴포넌트
        component: NewsView
    },
    {
        path: '/ask',
        component: AskView
    },
    {
        path: '/jobs',
        component: JobsView
    }
];


//아래와 같이 사용도 가능
//const router = createRouter({
//    routes,
//});
//
//export default router;


export const router = createRouter({
    history: createWebHistory(),
    routes,
});