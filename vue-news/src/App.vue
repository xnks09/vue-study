<template>
  <div id="app">
    <!-- vue에서 강력하게 추천하는 방식 -->
    <ToolBar></ToolBar>

    <!-- 이것은 두 번째로 추천하는 방식?? -->
    <!-- <tool-bar></tool-bar> -->
    <Transition name="page">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar';
export default {
  name: 'App',
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* Router transition */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter, 
.page-leave-to {
  opacity: 0;
}
</style>
