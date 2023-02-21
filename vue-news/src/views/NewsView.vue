<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news">{{ user }}</div> -->

    <!-- <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{item.time_ago}} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->

    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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