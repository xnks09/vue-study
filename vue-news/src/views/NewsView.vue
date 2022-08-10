<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news">{{ user }}</div> -->
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>{{item.time_ago}} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import {fetchNewsList} from '../api/index.js';

export default {
  // data(){
  //   return{
  //     users: []
  //   }
  // },
  created(){
    
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;

    // fetchNewsList()
    //   .then(function(response){
    //     console.log(response);
    //     //this에 대한 바인딩 문제로 아래와 같이 this를 바로 사용X
    //     //그래서 화살표 함수를 사용하는 것을 추천
    //     //this.users = response.data
    //     vm.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
    },
  }
</script>

<style>

</style>