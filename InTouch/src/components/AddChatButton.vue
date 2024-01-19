<template>
    <div class="locate">
        <NewChat v-if="chatVisible"></NewChat>
        <FindUser v-if="FindUserVisible"></FindUser>
        <div class="buttons-group">
            <div :class="{'chat-buttons':true, 'opened-menu':openedMenu}">
                <div class="add-group" @click="chatVisible=!chatVisible"><unicon name="comment-plus" fill="black"/></div>
                <div class="add-user" @click="FindUserVisible=!FindUserVisible"><unicon name="user-plus"  fill="black"/></div>
                <div class="add-note"><unicon name="notes"  fill="black"/></div>
            </div>
            <div class="open-menu" @click="openedMenu=!openedMenu">+</div>
        </div>
    </div>
</template>
<script>
import NewChat from './NewChat.vue';
import FindUser from './FindUser.vue';

    export default {
        components: {
            NewChat, FindUser
        },
        data() {
            return {
                openedMenu: false,
                chatVisible: false,
                FindUserVisible: false
            }
        }
    }
</script>
<style scoped>
    .open-menu{
        width: 75px;
        height: 75px;
        border-radius: 50px;
        background-color: #3c93c5;
        font-size: 33px;
        box-shadow: 0 0 7px rgb(73, 73, 73);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        font-weight: 1000;
        cursor: pointer;
        user-select: none;
    }
    
    .open-menu:hover{
        position: relative;
        box-shadow: 0 0 12px rgb(48, 48, 48);
        width: 85px;
        height: 85px;
        transition: 0.5s;
    }
    
    .add-group, .add-user, .add-note {
        width: 50px;
        height: 50px;
        border-radius: 40px;
        background-color: #3c93c5;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 7px rgb(73, 73, 73);
        transition: 0.5s;
    }

    .add-group:hover, .add-user:hover, .add-note:hover {
        position: static;
        box-shadow: 0 0 12px rgb(41, 41, 41);
        width: 56px;
        height: 56px;
        transition: 0.5s;
    }

    .opened-menu{
        display: flex !important;
    }

    .buttons-group {
        position: fixed;
        right: 25px;
        bottom: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px; 
        cursor: pointer;
        user-select: none;
    }
    .chat-buttons {
        display: none;
        flex-direction: column;
        gap: 10px;
    }
    .locate{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
