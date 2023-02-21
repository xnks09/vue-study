<template>
  <div>
    <!-- <div v-for="item in ask">{{ item.title }}</div> -->
    <!-- <div v-for="item in fetchedAsk">{{ item.title }}</div> -->
    
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">
            {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>


    <!-- <p v-for="item in fetchedAsk"> -->
      <!-- <a :href="item.url">{{item.title}}</a> -->
      <!-- <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </p> -->


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

<style scoped> 
.news-list{
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282
}

</style>