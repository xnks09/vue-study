import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem} from '../api/index.js';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response => {
            context.commit('SET_NEWS', response.data); //state에 담아주기 위해 순서상 먼저 mutations에 담아줌
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_JOBS({commit}){ //context안의 commit을 디스트럭처링으로 바로 삽입(destructuring)
        fetchJobsList()
        .then(({data}) => { //response안의 data를 디스트럭처링으로 바로 삽입(destructuring)
            commit('SET_JOBS', data); 
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_ASK({commit}){ //context안의 commit을 디스트럭처링으로 바로 삽입(destructuring)
        fetchAskList()
        .then(({data}) => { //response안의 data를 디스트럭처링으로 바로 삽입(destructuring)
            commit('SET_ASK', data); 
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_USER({commit}, name){ 
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data); 
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_ITEM({commit}, id){ 
        fetchCommentItem(id)
        .then(({data}) => {
            commit('SET_ITEM', data); 
        })
        .catch(error =>{
            console.log(error);
        });
    },
}