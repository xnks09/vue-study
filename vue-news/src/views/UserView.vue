<template>
<div>
    <!-- <p>name : {{ this.$store.state.user.id}}</p>
    <p>karma : {{ this.$store.state.user.karma}}</p>
    <p>created : {{ this.$store.state.user.created}}</p> -->

    <!-- 아래의 computed의 userInfo()를 활용하면 아래와 같이 가능 -->
    <p>name : {{ userInfo.id}}</p>
    <p>karma : {{ userInfo.karma}}</p>
    <p>created : {{ userInfo.created}}</p>
</div>
</template>

<script>

export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>