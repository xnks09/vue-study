<!--
    asyncData는 컴포넌트에서 데이터 설정을 할 때 비동기적으로 생성되는 데이터일 때
    asyncData를 사용.

    서버에서 데이터를 가져와 사용한다면 asyncData를 사용

    asyncData로 생성한 데이터는 data로 생성한 데이터와 머지되어 사용하는 입장에서는 asyncData와 data차이는 없음
    단지 초기화시키는 데이터가 동기적으로 실행되는지 비동기적으로 실행되는지에 대한 차이

    첫 번째 인자로 context를 받음. context는 url에 있는 params이나 query를 가져올 수 있음
    redirect나 error를 이용하여 원하는 페이지로 리다이렉트 시키거나 에러페이지를 띄워줄 수 있음
-->

<template>
    <h1></h1>
</template>

<script>
export default {
    asyncData(context) {
        //서버에서 데이터를 받아오는 부분

        return {message2: 'world'}
    },
    data() {
        return {message1 : 'hello'}
    }
}
</script>

