<template>
  <div class="menu">
      <icon-image class="about" :dataIcon="about"></icon-image>
      <icon-image class="moon" :dataIcon="moon"></icon-image>
      <div class="protocol">
        <icon-image class="protocol-icon" :key="index" v-for="(protocol,index) in mydataIcon" :dataIcon="protocol"></icon-image>
      </div>
  </div>
</template>

<script>
import iconImage from './icon.vue'
export default {
    name:'Menu',
    components:{
        iconImage
    },
    props:{
        mydataIcon:Object
    },
    data(){
        return{
            moon:{
                img:'moon.svg'
            },
            sun:{
                img:'sun.svg'
            },
            about:{
                img:'about.svg'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        background-color:whitesmoke;
        height: 100%;
        width: 100px;
        position: absolute;
        left: 0;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-left: 1rem;
        .about{
            position: absolute;
            bottom: 10px;
        }
        .moon{
            position: absolute;
            bottom:110px;
        }
        .protocol{
            .protocol-icon{
                &:hover{
                    background-color: #e0f2ff;
                }
                &:first-child{
                    background-color: #e0f2ff;
                    margin-bottom: 15px;
                    &:hover{
                        background-color: #cfe8fa;
                    }
                }
            }
        }
    }
</style>