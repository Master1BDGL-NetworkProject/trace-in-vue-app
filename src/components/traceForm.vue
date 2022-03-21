<template>
  <div class="traceForm">
      <form>
            <field :myfield="formdata.ip"></field>
            <div class="grid">
              <field :myfield="formdata.houblons"></field>
              <div class="select">
                <label for="protocol" v-text="formdata.protocol.label"></label>
                <select name="protocol" id="protocol">
                  <option :key="index" v-for="(protocol,index) in formdata.protocol.data" :value="protocol" v-text="protocol"></option>
                </select>
              </div>
            </div>
            <field :myfield="formdata.time"></field>
            <div class="control">
              <btn :type="item.type" :data="item.label" :class="item.label" :key="index" v-for="(item,index) in btn"></btn>
            </div>
      </form>
  </div>
</template>

<script>
import field from '../components/field.vue'
import btn from '../components/btn.vue'
export default {
name:'traceForm',
components:{
    field,
    btn,
},  
data(){
    return{
        btn:[
            {   label:'Reinitialiser',
                type:'reset'
            },
            {   label:'Effectuer',
                type:'submit'
            },
        ],
        formdata:{
            ip:{
                label:'Adresse IP/ Host',
                placeholder:'Ex: google.com, 127.009.192.224',
            },
            houblons:{
                label:'N° houblons',
                placeholder:'Ex:30',
            },
            protocol:{
                label:'Protocol',
                data:{
                icmp:'Icmp',
                udp:'Udp'
                }
            },
            time:{
                label:'Temps mort',
                placeholder:'Temps mort en seconde(s)',
            },
        }
    }
}
}
</script>

<style lang='scss' scoped>
.traceForm{
    form{
        .field{
        margin: .5rem 0;
        }
        .grid{
            display: grid;
            grid-template-columns: 70% 28%;
            grid-column-gap:2%;
            .select{
                display: grid;
                // grid-template-rows: auto 1fr;
                width: 100%;
                height: 100%;
                label{
                align-self: end;
                justify-self: start;
                margin-bottom: .2rem;
                color: #54b5ff;
                font-weight: 600;
                font-size: .9rem;
                }
                #protocol{
                outline: none;
                border: 1px solid #46a9eb;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                padding-left: 5px;
                padding-right: 5px;
                font-size: .9rem;
                color: rgb(110, 110, 110);
                @media (max-width:800px) {
                    height: 40px;
                }
                }
            }
        }
        .control{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 20px;
            margin-top: 1.5rem;
        }
    }
}
</style>