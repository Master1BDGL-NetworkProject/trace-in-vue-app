<template>
  <div class="protocol">
      <div class="image">
          <img :src="require('../assets/'+mydata.img)">
      </div>
      <div class="text">
          <h1 v-text="mydata.title"></h1>
          <p v-text="mydata.paragraph"></p>
      </div>
  </div>
</template>

<script>
export default {
    name:'protocol',
    props:{
        mydata:{Object},
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
    .protocol{
        cursor: pointer;
        background-color:white;
        width: 320px;
        height: 290px;
        border-radius: 40px;
        padding: 1rem;
        display: grid;
        place-items: center;
        @media (max-width:800px) {
            width: 100%;
            max-width: 300px;
            height: 180px;
            padding: 1.3rem;
        }
        .image{
            margin-bottom:0;
            img{
                @media (max-width:800px) {
                    width: 30%;
                    height: auto;
                }
                width: 130px;
                height: auto;
            }
        }
        .text{
            @media (max-width:800px) {
                h1{
                    font-size: 1.7rem;
                }
                p{
                    font-size: .6rem !important;
                }
            }
            p{
                padding-top: .4rem;
                font-size: .7rem;
            }
        }
    }
</style>