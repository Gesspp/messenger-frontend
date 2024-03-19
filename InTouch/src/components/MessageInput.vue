<template>
    <div class="message-input">
        <input type="text">
    </div>
</template>
<script>
    export default{
        data() {
            return{
                focus: false
            }
        }
    }
</script>
<style scoped>
    .message-input{
        display: flex;
        justify-content: center;
        bottom: 10px;
        width: 600px;
        height: 50px;
        border-radius: 5px;
        border: 2px solid #07689F;
        align-items: flex-end;
    }
    .message-input>input{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        outline: none;
        border: none;
    }
    .message-input>input:focus{
        box-shadow: 0 0 5px #07689F;
    }
    .chat-screen{
        width: 100vw;
    }

</style>