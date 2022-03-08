<template>
<div class="icon">
    <img :src="require('../assets/'+dataIcon.img)">
</div>
</template>

<script>
export default {
    name:'iconImage',
    props:{
        dataIcon:Object,
    }
}
</script>

<style lang="scss" scoped>
    .icon{
        cursor: pointer;
        width: 85px;
        height: 85px;
        border-radius: 20px;
        background-color: rgb(255, 255, 255);
        display: grid;
        place-items: center;
        img{
            width: 46px;
            height:auto;
            object-fit: cover;
        }
    }
</style>