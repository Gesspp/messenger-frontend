<template>
    <div class="chat">
        <h4>{{ title }}</h4>
    </div>
</template>
<script>
    export default{
        props : {
            id : Number,
            title : String
        }
    }
</script>
<style scoped>
    .chat{
        font-size: 20px;
        font-weight: 400;
        width: 500px;
        height: 100px;
        border: 0.5px solid rgb(119, 119, 119);
        box-sizing: border;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background-color: rgb(243, 243, 243);
        font-family: 'Rubik', sans-serif;
    }
</style>