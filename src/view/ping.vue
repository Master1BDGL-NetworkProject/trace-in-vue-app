<template>
  <div class="ping">
    <burger></burger>
    <Menu :bool="bool" :mydataIcon="icon" class="menu"></Menu>
    <div class="content">
      <div class="item">
        <div class="title">
          <info :infoData="pingIp.info"></info>
          <div class="form">
            <ping-form></ping-form>
          </div>
        </div>
      </div>
      <div class="graph">
        <Table class="table" :head="pingIp.head" :tableData="pingIp.response"></Table>
        <div class="courbe">
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import btn from '../components/btn.vue'
import Menu from '../components/Menu.vue'
import Table from '../components/Table.vue'
import pingForm from '../components/pingForm.vue'
import info from '../components/info.vue'
import burger from '../components/burger.vue'
export default {
    name:'ping',
    components:{
      Menu,
      Table,
      pingForm,
      info,
      // btn,
      burger
    },
    data(){
      return{
        pingIp:{
          info:{
            title:'Ping',
            text:"Le ping permet de determiner l'etat du reseau et de divers hôtes etranger ou simplement permet de verfier l'existence d'une machine sur un reseau"
          },
          head:{
            title:{
              ip:'172.032.067.225',
              p:'Ping:',
            },
            data:{
              seq:'Seq',
              bits:'Bits',
              ttl:'TTL',
              time:'Time(ms)'
            }
          },
          response:{
            data:[
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'4',
                bits:'10',
                ttl:'8',
                time:'10', 
              },
              {
                seq:'4',
                bits:'10',
                ttl:'8',
                time:'10', 
              },
              {
                seq:'4',
                bits:'10',
                ttl:'8',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
              {
                seq:'3',
                bits:'8',
                ttl:'7',
                time:'10', 
              },
            ]
          }
        },
        bool:'ping',
        icon:{
          ping:{
            img:'ping.svg',
            state:'pingState',
          },
          traceroute:{
            img:'traceroute.svg',
            state:'traceState',
          }
        },
      }
    }
}
</script>

<style lang="scss" scoped>
  .ping{
    position: relative;
    height: 100vh;
    min-width:800px;
    @media (max-width:800px) {
      min-width:320px;
    }
    .menu{
      position: absolute;
      left: 0;
      background-color: white;
      border-right: 10px solid whitesmoke;
      margin-left: 0;
      @media (max-width:800px) {
        border-right:initial;
      }
    }
    .content{
      padding-left: 85px;
      display: grid;
      grid-template-columns: 55% 45%;
      @media (max-width:800px) {
        grid-template-columns:1fr;
        grid-template-rows:1fr 1fr;
        padding-left:0px;
      }
      .item{
        padding: 0.5rem;
        padding-top: 2.5rem;
        .title{
          width: 100%;
        }
      }
      .graph{
        padding: .5rem;
        padding-top: 2rem;
        display: grid;
        grid-template-rows: 80% 20%;
        .table{
          overflow:auto;
          &::-webkit-scrollbar{
          display: none;
          }
          scrollbar-width:none;
        }
      }
    }
  }
</style>