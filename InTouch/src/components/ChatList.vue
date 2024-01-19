<template>
    <AddChat></AddChat>
    <Chat v-for="chat in chats" :id="chat.id" :title="chat.title"></Chat>
</template>
<script>
import Chat from './Chat.vue';
import AddChat from './AddChat.Vue';
export default{
    components : {
        Chat, AddChat
    },
    props : {
        chats : Array
    }
}
</script>
<style>

</style>