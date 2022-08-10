<!--
    layout은 속성 형태로 정의될 수 있고, 메소드 형태로 정의할 수도 있음
    따로 설정하지 않으면 default로 설정
-->

<template>
    <h1></h1>
</template>

<script>
export default {

    //속성 형태로 사용하는 방법
    layout: 'boardDefault' //디렉터리 안에 있는 vue 파일

    //메소드 형태로 사용하는 방법
    // layout (context){
    //     return 'boardDefault'
    // }
}
</script>

