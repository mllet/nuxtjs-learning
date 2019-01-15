<template>
    <div>
        <h3>
            user嵌套路由--id
        </h3>
    </div>
</template>

<script>
    export default {

        validate({params}) {
            console.log(params)
            // 必须是number类型
            return /^\d+$/.test(params.id)
        }
    }
</script>

<style lang='less'>
    h3 {
        text-align: center;
    }
</style>