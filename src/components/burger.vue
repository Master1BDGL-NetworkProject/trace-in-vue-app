<template>
  <div v-on:click="handleMenu()" class="burger">
    <img src="../assets/icon-menu.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'burger',
    methods:{
        handleMenu(){
        this.bus.emit('MENU')
      }
    }
}
</script>

<style lang="scss">
.burger{
    display: none !important;
    z-index: 2;
    @media (max-width:800px) {
    display:grid !important;
    }
    cursor: pointer;
    position: absolute;
    top: 7px;
    left: 10px;
    height: 23px;
    width: 23px;
    border-radius:2px;
    // background-color: white;
    display: grid;
    place-items: center;
    &:hover{
    background-color: rgb(240, 239, 239);
    color: white;
    }
}
</style>