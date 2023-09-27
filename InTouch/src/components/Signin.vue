<template>
    <main>
        <input type="text" class="nickname" placeholder="nickname">
        <input type="text" class="password" placeholder="password">
        <button>Sign up</button>
    </main>
</template>
<script>

</script>
<style>
    body{
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main{
        width: 250px;
        height: 350px;
        gap: 20px;
        background: #1889ab;
        border-radius: 10px;
        box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        padding: 0;
    }

    .nickname, .password{ 
        width: 200px;
        height: 30px;
        border-radius: 8px;
        font-size: 15px;

    }
</style>