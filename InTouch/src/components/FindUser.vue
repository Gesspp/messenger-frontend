<template>
    <div class="add-user">
        <p>Добавить пользователя</p>
        <input type="text" class="input-user">
        <button class="add-user-button">Найти</button>
    </div>
</template>
<script>

</script>
<style>
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
        height: 20px
    }   
    .input-user{
        width: 180px;
        height: 20px;
    }
</style>