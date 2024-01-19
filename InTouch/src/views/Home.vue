<template>
    <ChatList :chats="chats"></ChatList>
    <AddChatButton></AddChatButton>
</template>
<script>
import ChatList from '../components/ChatList.vue';
import AddChatButton from "../components/AddChatButton.vue"
    export default{
        components : {
            ChatList,
            AddChatButton
        },
        data() {
            return {}
        },
        computed: {
            chats() {
                return this.$store.state.chats;
            }
        },
        mounted() {
            if (!this.chats) {
                this.$store.dispatch("getChats");
            }
        }
    }
</script>
<style>

</style>