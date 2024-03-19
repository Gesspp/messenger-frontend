<template>
    <div class="chat-screen">
        <ChatHistory></ChatHistory>
        <MessageInput></MessageInput>
    </div>
</template>
<script>
    import MessageInput from "./MessageInput.vue";
    import ChatHistory from "./ChatHistory.vue";
    export default{
        components: {
            MessageInput,
            ChatHistory
        }
    }
</script>
<style scoped>
    .chat-screen{
        height: calc(100vh - 100px);
        display: flex;
        align-items: start;
        flex-direction: column;
        /* width: calc(100vw - 500px); */
    }
</style>
