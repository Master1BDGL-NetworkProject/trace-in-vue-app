<template>
    <input class="btn" :type="type" :value="data">
</template>

<script>
export default {
    name:'btn',
    props:{
        data:String,
        type:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang='scss' scoped>
.btn{
    cursor: pointer;
    width: 100%;
    height: 44px;
    background-color: whitesmoke;
    border-radius: 7px;
    transition: background-color 700ms ease;
    border: none;
    outline: none;
    text-align: center;
}
.Reinitialiser{
    &:hover{
        background-color: rgb(218, 218, 218);
        color: rgb(110, 110, 110);
    }
}
    .Effectuer{
    cursor: pointer;
    background-color: #54b5ff;
    border-radius: 7px;
    color: white;
    &:hover{
        background-color: #0091ff;
    }
}
</style>