<template>
    <div class="info">
        <h1 v-text="infoData.title"></h1>
        <div class="item">
        <img src="../assets/idea.svg">
        <p v-text="infoData.text"></p>
        </div>
    </div>
</template>

<script>
export default {
name:'info',
props:{
    infoData:Object
}
}
</script>

<style lang='scss' scoped>
.info{
    h1{
        text-align:left;
        @media (max-width:800px) {
            font-size: 1.5rem;
        }
    }
    .item{
        margin-top:2px;
        margin-bottom: .9rem;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 15px;
        background-color: #fff5c5;
        padding: .7rem;
        img{
            width: 50px;
            height: auto;
            object-fit: cover;
            @media (max-width:800px) {
                width: 45px;
            }
        }
        p{
            align-self: center;
            text-align: left;
            font-size: 0.8rem;
            line-height: 1.2rem;
        }
        @media (max-width:800px) {
            p{
                font-size: 0.8rem;
            }
        }
    }
}
</style>