<!--
    fetch는 asyncData처럼 데이터를 가져오는 것은 같지만 데이터를 초기화하는 대상이 다름
    asyncData와 data는 컴포넌트에서 사용하는 데이터를 초기화하지만,
    fetch는 vuex인 데이터 스토어에 데이터를 넣기 위해 사용함. 물론 비동기적으로 작동할 수 있음
-->

<template>
    <h1>message: {{$store.state.data}}</h1>
</template>

<script>
export default {

    //store는 웹 애플리케이션 전역에서 사용하는 데이터 저장소로 이해하면 됨
    fetch({store, params}){
        
        //데이터 가져오는 부분
        store.commit('dataUpdate', data) //store.commit은 데이터 저장소에 있는 특정 함수를 실행하여 필요한 데이터로 초기화/수정하는 역할
    }
}
</script>

