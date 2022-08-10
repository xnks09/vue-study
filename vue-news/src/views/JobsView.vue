<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{job.title}}</a>
      <small>{{job.time_ago}}, {{job.domain}}</small>
    </p>
  </div>
</template>

<script>

import {fetchJobsList} from '../api/index.js'

export default {

  // data(){
  //   return {
  //     jobs: []
  //   }
  // },
  //API의 경우는 보통 created, beforeMount에서 사용
  created() {

    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));


  }
}
</script>

<style>

</style>