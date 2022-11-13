<template>
  <div>
    <!-- <div v-for="item in ask">{{ item.title }}</div> -->
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
    <p v-for="item in fetchedAsk">
      <!-- <a :href="item.url">{{item.title}}</a> -->
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';

export default {

  computed: {
    
    ...mapGetters([
      'fetchedAsk' //NewsView에서 getters에 대한 함수명을 그대로 쓸 경우, 배열로 표기해야함
      ])

    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    // })

    //2번째 방법
    //store에서 getters를 통해 가져올 수 있음
    // ...mapState({
    //   ask: state => state.ask
    // })
    
    //1번째 방법
  //   ask() {
  //     return this.$store.state.ask;
  //   }
  },

  // data(){
  //   return {
  //     ask: []
  //   }
  // },

  //API의 경우는 보통 created, beforeMount에서 사용
  created() {
    this.$store.dispatch('FETCH_ASK')
    // var vm = this;
    // fetchAskList()
    //   .then(function(response){
    //     console.log(response);
    //     vm.ask = response.data;
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   });
  }
}
</script>

<style>

</style>