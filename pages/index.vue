<template>
    <section class="container">
        <div>
            <logo/>
            <h1 class="title">
                nuxtjs-learning
            </h1>
            <h2 class="subtitle">
                My beautiful Nuxt.js project
            </h2>
            <div class="links">
                <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        class="button--green">Documentation</a>
                <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        class="button--grey">GitHub</a>
            </div>
            <el-row>
                <el-col :span="12" :offset="6">
                    <nuxt-link to="/user">user</nuxt-link>
                    <nuxt/>
                </el-col>
            </el-row>
            <el-row>
                <el-button @click="increment">默认按钮+1 <span>当前数值：{{counter}}</span></el-button>
                <el-button @click="incrementAsync">异步+1 <span>当前数值：{{count}}</span></el-button>
            </el-row>
            <br/>
            <el-row>
                <input v-model="message">{{message}}
            </el-row>
            <br/>
        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import ElButton from "element-ui/packages/button/src/button";
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        components: {
            ElButton,
            Logo
        },
        methods: {
            ...mapMutations([
                'increment', 'updateMessage'
            ]),
            ...mapActions([
                'incrementAsync',
            ])
        },
        computed: {
            ...mapState([
                'counter', 'count', 'message'
            ]),
            message: {
                get() {
                    return this.$store.state.message
                },
                set(value) {
                    this.$store.commit('message', value)
                }
            }
        }
    }
</script>

<style>

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }
    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }
    .links {
        padding-top: 15px;
    }
</style>
