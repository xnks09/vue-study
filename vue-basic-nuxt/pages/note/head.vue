<!--
    각 페이지에서 head 태그를 수정할 수 있음
-->

<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {

    data(){
        return{
            title: 'hello world'
        }
    },

    head(){
        return{
            title: this.title,
            meta: [
                {hid: '1', name: '멍게', content: '멍개는 제 별명입니다.'}
            ]
        }
    }
}
</script>

