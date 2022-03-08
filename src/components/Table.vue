<template>
  <div class="table">
      <table style="width:100%">
          <tr>
              <td :key="index" v-for="(title,index) in head" v-text="title">
              </td>
          </tr>
          <tr :key="index" v-for="(row,index) in tableData.data" ref="item">
              <td :key="index" v-for="(data,index) in row" v-text="data">
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name:'Table',
    props:{
        tableData:Object,
        head:Object
    },
    data(){
        return{
            dataLength:this.tableData.data.length
            ,
            traceRoute:{
                head:{
                    seq:'Seq',
                    bits:'Bits',
                    ttl:'TTL',
                    time:'Temps(ms)'
                }
            }
        }
    },
    mounted(){this.peer()},
    methods:{
        peer(){
            for (let i =0; i < this.dataLength; i++) {
                const _mod =i % 2 
                if(_mod!=0){
                    this.$refs.item[i].style.backgroundColor='whitesmoke'
                }
                // console.log(this.$refs.item[i])
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.table{
    table{
        border: 1px solid rgb(218, 218, 218);
        border-collapse: collapse;
        border-radius: 5px !important;
        tr:first-child{
            border-radius: 5px;
            td{
                border-right: 1px solid rgb(218, 218, 218);
                border-bottom: 1px solid rgb(218, 218, 218);
                color: #54b5ffd0;
                font-weight: 400;
                padding: 3px;
            }
        }
        tr{
            td{
                border-right: 1px solid rgb(218, 218, 218);
                padding: 3px;
            }
        }
    }
}
</style>