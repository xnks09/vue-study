export default {
    SET_NEWS(state, data){
        state.news = data; //actions에서 context.commit을 통해 들어온 데이터를 다시 state에 던져줌
    },
    SET_JOBS(state, data){
        state.jobs = data; //actions에서 context.commit을 통해 들어온 데이터를 다시 state에 던져줌
    },
    SET_ASK(state, data){
        state.ask = data; //actions에서 context.commit을 통해 들어온 데이터를 다시 state에 던져줌
    },
    SET_USER(state, data){
        state.user = data; //actions에서 context.commit을 통해 들어온 데이터를 다시 state에 던져줌
    },
    SET_ITEM(state, data){
        state.item = data; //actions에서 context.commit을 통해 들어온 데이터를 다시 state에 던져줌
    }
}