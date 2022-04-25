<template>
  <div class="traceForm">
      <form method="post" @submit.prevent="handleSubmit">
            <field :myfield="fieldData.ip"></field>
            <div class="grid">
              <field :myfield="fieldData.houblons"></field>
              <div class="select">
                <label for="protocol" v-text="fieldData.protocol.label"></label>
                <select name="protocol" id="protocol">
                  <option :key="index" v-for="(protocol,index) in fieldData.protocol.data" :value="protocol" v-text="protocol"></option>
                </select>
              </div>
            </div>
            <field :myfield="fieldData.time"></field>
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
        fieldData:{
            ip:{
                name:'ip',
                label:'Adresse IP/ Host',
                placeholder:'Ex: google.com, 127.009.192.224',
                errorText:'Entrer une adresse/IP valide',
                isValid:true,
                validator:function(e){
                    const regexAdresseIp=/([0-9]{1,3}\.){3}[0-9]{1,3}/i
                    const regexHostName=/[\w.]+\.[a-zA-Z]{2,}/i
                    if(regexAdresseIp.exec(e.trim())!=null  || regexHostName.exec(e.trim())!=null){
                        return true
                    }
                    return false
                }
            },
            houblons:{
                name:'houblons',
                label:'N° houblons',
                placeholder:'Ex:30',
                errorText:'Entrer le nombre de houblons',
                isValid:true,
                validator:function(e){
                    if(e!=undefined && e!=''){
                        return !isNaN(new Number(e));
                    }
                    return false
                }
            },
            protocol:{
                name:"protocol",
                label:'Protocol',
                data:{
                icmp:'Icmp',
                udp:'Udp'
                },
            },
            time:{
                name:"time",
                label:'Temps mort',
                placeholder:'Temps mort en seconde(s)',
                errorText:'Entrer un temps mort valide',
                isValid:true,
                validator:function(e){
                    if(e!=undefined && e!=''){
                        return !isNaN(new Number(e));
                    }
                    return false
                }
            },
        }
    }
},
methods:{
    handleSubmit(e){
        let {ip,houblons,protocol,time}=e.target
        let fields=[
            ip,houblons,time
        ]
        console.log(protocol)
        fields.forEach((field)=>{
            const _isValid =this.fieldData[field.name].validator(field.value);
            this.fieldData[field.name].isValid=_isValid;
            if(field.name=='houblons'&& !_isValid){
                protocol.style.marginBottom='1.19rem'
            }
        })
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