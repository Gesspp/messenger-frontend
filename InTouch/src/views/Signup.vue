<template>
    <main>
        <form action="">
            <h3 class="sign-type">Sign up</h3>
            <input type="text" class="nickname" placeholder="nickname" v-model="nickname">
            <input type="text" class="email" placeholder="email" v-model="email">
            <input type="password" class="password" placeholder="password" v-model="password">
            <button @click="signup" class="signup-button">Sign up</button>
            <p class="signin-redirect"><RouterLink :to="{name : 'Signin'}">Already have an account?</RouterLink></p>
        </form>
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
            signup(e) {
                e.preventDefault();
                if(this.nickname.length > 0 && this.email.length > 0 && this.password.length > 0){
                    const user = {
                        nickname: this.nickname,
                        email: this.email,
                        password: this.password
                    }
                    this.$store.dispatch("signup", user).then(res => {
                        if (res){
                            this.$router.push({
                                name: "Signin"
                            })
                        }
                    })
                } else{
                    alert("Не все поля заполнены!");
                }
            }
        }
    }
</script>
<style scoped>
    main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form{
        width: 500px;
        height: 500px;
        gap: 20px;
        background: #A2D5F2;
        border-radius: 10px;
        box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 100px;
    }

    .nickname, .email, .password{ 
        width: 380px;
        height: 50px;
        border-radius: 8px;
        font-size: 25px;
        outline: none;
        border: 2px solid #07689F;
        padding-left: 20px;
        transition: 1s;
    }
    .nickname:focus, .email:focus, .password:focus{
        box-shadow: 0 0 10px #07689F;
        transition: 1s;
    }
    .signup-button{
        border-radius: 8px;
        width: 250px;
        height: 45px;
        outline: none;
        font-size: 25px;
        background-color: #FF7E67;
        border: none;
        border-bottom: 5px solid #a55041;
        transition: 0.1s;
        cursor: pointer;
    }
    .signup-button:active{
        border-bottom: none;
        box-shadow: 0 0 10px black inset;
        transition: 0.1s;
    }
    .sign-type{
        font-family: 'Arimo', sans-serif;
        font-size: 35px;
        margin: 0;
    }
    .signin-redirect{
        font-size: 17px;
        margin: 0;
    }
</style>