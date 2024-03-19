<template>
    <div class="chat-list">
        <Chat v-for="chat in chats" :id="chat.id" :title="chat.title"></Chat>
    </div>
</template>
<script>
import Chat from './Chat.vue';
export default{
    components : {
        Chat
    },
    props : {
        chats : Array
    }
}
</script>
<style>
    
</style>