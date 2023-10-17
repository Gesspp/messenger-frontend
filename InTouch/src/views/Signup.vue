<template>
    <main>
        <input type="text" class="nickname" placeholder="nickname" v-model="nickname">
        <input type="text" class="email" placeholder="email" v-model="email">
        <input type="password" class="password" placeholder="password" v-model="password">
        <button @click="signup">Sign up</button>
    </main>
</template>
<script>
    export default{
        data(){
            return {
                nickname: "",
                email: "",
                password: ""
            }
        },
        methods: {
            signup() {
                const user = {
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch("signup", user)
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
        align-content: center;
    }

    main{
        width: 250px;
        height: 350px;
        gap: 20px;
        background: #1889ab;
        border-radius: 10px;
        box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .nickname, .email, .password{ 
        width: 200px;
        height: 30px;
        border-radius: 8px;
        font-size: 15px;

    }
</style>