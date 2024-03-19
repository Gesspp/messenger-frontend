<template>
    <header>
        <img src="../" alt="">
        <h2>InTouch</h2>
        <p  v-if="user">{{ user.nickname }}</p>
        <p class="header-signin-redirect" v-else><RouterLink :to="{name : 'Signin'}">Sign in</RouterLink></p>
    </header>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed : {
        user(){
            return this.$store.state.user;
        }
    },
    beforeCreate() {
        this.$store.dispatch("me");
    }
}
</script>
<style scoped>
    header{
        width: 100vw;
        height: 100px;
        background: #07689F;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    header>h2{
        font-family: 'Arimo', sans-serif;
        font-size: 50px;
        margin-left: 80px;
    }
    .header-signin-redirect{
        font-size: 20px;
        margin-right: 30px;
    }
</style>