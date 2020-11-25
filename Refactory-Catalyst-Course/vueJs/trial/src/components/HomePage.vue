<template>
    <div id="home-page">
        <h1> Welcome to the Trial Project </h1>
        <div class="custom"></div>
    </div>
</template>

<script>
// A new way to writing vue instance
export default {
    name: "HomePage",

    data(){
        return{}
    },

    methods:{
        greet: function(){
            alert("Hello catalyst 006")
        }
    },
    componets:{}
}
</script>

<style scoped>
    .custom{
        width: 100%;
        height: 400px;
        background: rgb(14, 119, 110);
    }
</style>