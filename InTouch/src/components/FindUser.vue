<template>
    <div class="add-user">
        <button class="cross"><unicon name="times" fill="black" @click="Close"/></button>
        <p>Добавить пользователя</p>
        <input type="text" class="input-user">
        <button class="add-user-button" @click="FindUser">Найти</button>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                nickname: ""
            }
        },
        methods: {
            FindUser(e){
                e.preventDefault();
                this.$store.dispatch("findUser", this.nickname)
                console.log("!!!!")
            }
        }
    }
</script>
<style scoped>
    .add-user {
        border-radius: 15px;
        display: flex;
        width: 350px;
        height: 200px;
        font-size: 18px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        background-color: #3c93c5;
    }
    .add-user-button{
        width: 100px;
        height: 30px;
        background-color: #FF7E67;
        box-shadow: 0 0 5px rgb(73, 73, 73);
        border-width: 0;
        cursor: pointer;
    }   
    .input-user{
        width: 180px;
        height: 20px;
        border-radius: 8px;
        font-size: 25px;
        outline: none;
        border: 2px solid #07689F;
        padding-left: 20px;
        transition: 1s;
    }
    .input-user:focus{
        box-shadow: 0 0 10px #07689F;
        transition: 1s;
    }
    .add-user>p{
        font-size: 20px;
        font-family: 'Rubik', sans-serif;
    }
    .chatWrapper{
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.363);
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
    }
    .cross{
        cursor: pointer;
        border-width: 0;
        border-color: #A2D5F2;
        background-color: #A2D5F2;
    }
</style>