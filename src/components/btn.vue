<template>
    <div class="btn">
        <input v-if="!state" :type="type" :value="data">
        <img v-if="state" src="../assets/loading.gif" alt="">
    </div>
</template>

<script>
export default {
    name:'btn',
    props:{
        data:String,
        type:{
            type:String,
            required:true
        },
        state:Boolean,
    }
}
</script>

<style lang='scss' scoped>
.btn{
    width: 100%;
    height: 44px;
    transition: background-color 700ms ease;
    input{
        border: none;
        outline: none;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
    img{
        margin-top: 0.5rem;
        object-fit: cover;
        width: 60px;
        height: auto;
    }
}
.Reinitialiser{
    cursor: pointer;
    background-color: whitesmoke;
    border-radius: 7px;
    input{
        font-size: 1.2rem;
    }
    &:hover{
        background-color: rgb(218, 218, 218);
        color: rgb(110, 110, 110);
    }
}
.Effectuer{
    cursor: pointer;
    background-color: #54b5ff;
    border-radius: 7px;
    input{
        font-size: 1.2rem;
        color: white;
    }
    &:hover{
        background-color: #0091ff;
    }
}
</style>