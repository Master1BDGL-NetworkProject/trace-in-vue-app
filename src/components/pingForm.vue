<template>
  <div class="pingForm">
      <form method="post" @submit.prevent="handleSubmit">
          <field :myfield="fieldData.ip"></field>
            <div class="grid">
              <field :myfield="fieldData.numberPaquet"></field>
              <field :myfield="fieldData.ttl"></field>
              <field :myfield="fieldData.LenghtPaquet"></field>
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
name:'pingForm',
components:{
    field,
    btn
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
                label:'Adresse IP/Host',
                name:'ip',
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
            numberPaquet:{
                label:'N° de paquets',
                name:'numberPaquet',
                placeholder:'Ex:15,25',
                errorText:'Entrer le nombre de paquet valide',
                isValid:true,
                validator:function(e){
                    if(e!=undefined && e!=''){
                        return !isNaN(new Number(e));
                    }
                    return false
                }
            },
            ttl:{
                label:'TTL',
                name:'ttl',
                placeholder:'Ex:21',
                errorText:'Entrer un ttl valide',
                isValid:true,
                validator:function(e){
                    if(e!=undefined && e!=''){
                        return !isNaN(new Number(e));
                    }
                    return false
                }
            },
            LenghtPaquet:{
                label:'Taille paquet',
                name:'LenghtPaquet',
                placeholder:'Ex:28',
                errorText:'Entrer la taille du paquet valide',
                isValid:true,
                validator:function(e){
                    if(e!=undefined && e!=''){
                        return !isNaN(new Number(e));
                    }
                    return false
                }
            },
            time:{
                label:'Temps mort',
                name:'time',
                placeholder:'temps mort en ms',
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
        let {ip,time,LenghtPaquet,ttl,numberPaquet}=e.target
        let fields=[
            ip,time,LenghtPaquet,ttl,numberPaquet
        ]
        fields.forEach((field)=>{
            const _isValid =this.fieldData[field.name].validator(field.value);
            console.log(this.fieldData[field.name],_isValid)
            this.fieldData[field.name].isValid=_isValid;
        })
    }
}
}
</script>

<style lang='scss' scoped>
    .pingForm{
        form{
            .field{
              margin: .5rem 0;
            }
            .grid{
              display: grid;
              grid-template-columns: 37% 23% 37%;
              grid-column-gap:1%;
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