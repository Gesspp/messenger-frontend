<template>
    <div class="chatWrapper" v-if="active">
        <div class="new-chat">
            <button class="cross"><unicon name="times" fill="black" @click="Close"/></button>
            <p>Создание нового чата</p>
            <input type="поле ввода" class="chat-input-field" v-model="title">
            <button class="submit-chat-create" @click="AddChat">Создать чат</button>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                title: "",
            }
        },
        methods: {
            AddChat(e){
                e.preventDefault();
                this.$store.dispatch("addChat", this.title)
            },
            Close(){
                this.$emit("close")
            }
        },
        props: {
            active: Boolean
        }
    }
</script>
<style scoped>
    .new-chat {
        border-radius: 15px;
        border-color: black;
        border-width: 5px;
        display: flex;
        width: 300px;
        height: 200px;
        font-size: 25px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        background-color: #A2D5F2;
    }
    .submit-chat-create{
        width: 100px;
        height: 30px;
        background-color: #FF7E67;
        box-shadow: 0 0 5px rgb(73, 73, 73);
        border-width: 0;
        cursor: pointer;
    }   
    .chat-input-field{
        width: 180px;
        height: 20px;
        border-radius: 8px;
        font-size: 25px;
        outline: none;
        border: 2px solid #07689F;
        padding-left: 20px;
        transition: 1s;
    }
    .chat-input-field:focus{
        box-shadow: 0 0 10px #07689F;
        transition: 1s;
    }
    .cross{
        cursor: pointer;
        border-width: 0;
        border-color: #A2D5F2;
        background-color: #A2D5F2;
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
</style>