<template>
  <div class="field">
      <label for="field" v-text="myfield.label"></label>
      <input :class="!myfield.isValid ? 'error-border' : ''" :name="myfield.name" v-model="fieldData" id="field" type="text" :placeholder="myfield.placeholder">
      <span v-if="!myfield.isValid" class="error-text">{{myfield.errorText}}</span>
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
    .error-text{
        color: red;
        font-size:.7rem;
        text-align: left;
        padding: 2px 0;
    }
    .error-border{
        border: 1px solid #f52b2b !important;
    }
    .field{
        display: grid;
        padding-left:10px ;
        width: 100%;
        label{
            justify-self: start;
            margin-bottom: .2rem;
            color: #54b5ff;
            font-weight: 600;
            font-size: .9rem;
        }
        input{
            outline: none;
            border: 1px solid #46a9eb;
            // max-width: 400px;
            width: 100%;
            height: 50px;
            border-radius: 5px;
            padding-left: 12px;
            padding-right: 12px;
            font-size: .9rem;
            color: rgb(110, 110, 110);
            &::placeholder{
                color: rgba(110, 110, 110, 0.699);
            }
            @media (max-width:800px) {
                height: 40px;
            }
        }
    }
</style>