<template>
  <div class="table">
      <p>{{head.title.p}}<span>{{head.title.ip}}</span></p>
      <table style="width:100%">
          <tr>
              <td :key="index" v-for="(item,index) in head.data" v-text="item">
              </td>
          </tr>
          <tbody>
            <tr :style="(index%2==0) ?'background-color:whitesmoke;' : '' " :key="index" v-for="(row,index) in tableData.data" ref="item">
                <td :key="index" v-for="(data,index) in row" v-text="data">
                </td>
            </tr>
        </tbody>
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
        }
    },
    mounted(){
        // this.peer()
    },
    watch:{
        dataLength(){
            console.log('k')
            // this.peer()
        }
    },
    methods:{
        peer(){
            console.log('k')
            for (let i =0; i < this.dataLength; i++) {
                const _mod =i % 2 
                if(_mod==0){
                    this.$nextTick(()=>{
                        this.$refs.item[i].style.backgroundColor='whitesmoke'
                    })
                }
            }
            // this.$nextTick(()=>{
            //     let array=this.$refs.item
            //     for (let i = 0; i < array.length; i++) {
            //         const element = array[i];
            //         const mod=i%2
            //         if(mod==0){
            //             element.style.backgroundColor='whitesmoke'
            //         }
            //     }
            // })
        }
    }
}
</script>

<style lang='scss' scoped>
.table{
    width: 80%;
    justify-self: center;
    display: grid;
    grid-template-rows: auto 1fr;
    p{
    background-color: #54b5ff;
    padding: 8px;
    text-align: left;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    margin-bottom: .5rem;
    }
    table{
        border: 1px solid rgb(218, 218, 218);
        border-collapse: collapse;
        border-radius: 5px !important;
        height: 100%;
        tr:first-child{
            border-radius: 5px;
            font-weight:normal;
            td{
                border-right: 1px solid rgb(218, 218, 218);
                border-bottom: 1px solid rgb(218, 218, 218);
                color: #54b5ffd0;
                font-weight: 400 !important;
                padding: 3px;
            }
        }
        tbody{
            tr:first-child{
                td{
                    font-weight: 300 !important;
                    color:initial;
                    border-bottom:none;
                }
            }
        }
        tr{
            td{
                font-weight: 300 !important;
                border-right: 1px solid rgb(218, 218, 218);
                padding: 3px;
            }
        }
    }
}
</style>