<!--
    middleware.js를 활용
-->

<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {

    middleware: 'auth' //middleware/auth.js
}
</script>

