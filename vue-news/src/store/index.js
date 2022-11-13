import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

export const store = createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: []
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state){
            return state.item;
        }
    }
    ,
    //mutations: mutations, 
    //위의 왼쪽과 오른쪽이 동일하므로 아래와 같이 써도 무방함
    mutations,
    actions,
});