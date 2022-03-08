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
        width: 300px;
        height: 270px;
        border-radius: 40px;
        padding: 1rem;
        display: grid;
        place-items: center;
        .image{
            img{
                width: 130px;
                height: auto;
            }
        }
        .text{
            p{
                padding-top: .4rem;
            }
        }
    }
</style>