<template>
    <main>
        <ChatList :chats="chats"></ChatList>
        <ChatScreen></ChatScreen>
    </main>
    <AddChatButton></AddChatButton>
</template>
<script>
import ChatList from '../components/ChatList.vue';
import AddChatButton from "../components/AddChatButton.vue";
import ChatScreen from "../components/ChatScreen.vue";
    export default{
        components : {
            ChatList,
            AddChatButton,
            ChatScreen
        },
        data() {
            return {}
        },
        computed: {
            chats() {
                return this.$store.state.chats;
            },
            connected() {
                return state.connected;
            }
        },
        mounted() {
            if (!this.chats) {
                this.$store.dispatch("getChats");
            }
        },
    }
</script>
<style>
main{
    display: flex;
}
</style>