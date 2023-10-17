<template>
    <main>
        <input type="text" class="login" placeholder="login" v-model="login">
        <input type="password" class="password" placeholder="password" v-model="password">
        <button @click="signin">Sign in</button>
    </main>
</template>
<script>
    export default{
        data(){
            return {
                login: "",
                password: ""
            }
        },
        methods: {
            signin() {
                const user = {
                    login: this.login,
                    password: this.password
                }
                this.$store.dispatch("signin", user)
            }
        }
    }
</script>
<style>
    body{
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main{
        width: 250px;
        height: 350px;
        gap: 20px;
        background: #1889ab;
        border-radius: 10px;
        box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        padding: 0;
    }

    .login, .password{ 
        width: 200px;
        height: 30px;
        border-radius: 8px;
        font-size: 15px;

    }
</style>