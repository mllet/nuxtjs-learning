<template>
    <div>
        <h2>user嵌套路由<nuxt-link to="/user">路由user</nuxt-link><nuxt-link to="/user/4">路由id</nuxt-link><nuxt-link to="/user/person">路由id2</nuxt-link></h2>
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