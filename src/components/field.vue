<template>
  <div class="field">
      <label for="field" v-text="myfield.label"></label>
      <input name="field" v-model="fieldData" id="field" type="text" :placeholder="myfield.placeholder">
  </div>
</template>

<script>
export default {
    name:'field',
    props:{
        myfield:Object,
    },
    data(){
        return{
            fieldData:''
        }
    }
}
</script>

<style lang='scss' scoped>
    .field{
        display: grid;
        padding-left:10px ;
        width: 100%;
        label{
            justify-self: start;
            margin-bottom: .2rem;
            color: #b5d6f1;
            font-size: .9rem;
        }
        input{
            outline: none;
            border: 1px solid #46a9eb;
            // max-width: 400px;
            width: 100%;
            height: 50px;
            border-radius: 5px;
            padding-left: 5px;
            padding-right: 5px;
            font-size: .9rem;
            color: rgb(110, 110, 110);
        }
    }
</style>