<template>
    <div>
        <h2>user嵌套路由<nuxt-link to="/user/index">路由user</nuxt-link><nuxt-link to="/id">路由id</nuxt-link></h2>
        <nuxt-child/>
    </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style lang="less">
    h2{
        text-align: center;
    }
</style>