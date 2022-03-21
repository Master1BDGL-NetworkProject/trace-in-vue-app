<template>
  <div class="trace">
    <burger></burger>
    <Menu :bool="bool" :mydataIcon="icon" class="menu"></Menu>
    <div class="content">
      <div class="item">
        <div class="title">
          <info :infoData="traceIp.info"></info>
          <div class="form">
            <trace-form></trace-form>
          </div>
        </div>
      </div>
      <div class="graph">
        <!-- <Table class="table" :head="traceIp.head" :tableData="traceIp.response"></Table> -->
        <div class="courbe">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
// import Table from '../components/Table.vue'
import traceForm from '../components/traceForm.vue'
import info from '../components/info.vue'
import burger from '../components/burger.vue'
export default {
  name:'traceRoute',
  components:{
    traceForm,
    Menu,
    // Table,
    info,
    burger
  },
  data(){
    return{
      traceIp:{
        ip:'172.032.067.225',
        info:{
          title:'Traceroute',
          text:"Traceroute permet de connaitre de l'iteneraire empreinté par un paquet pour atteindre sa destination. Il troouvera les differentes machines intermediaire du cicuit"
        },
        head:{
          title:{
            ip:'172.032.067.225',
            p:'Traceroute:',
          },
          data:{
            seq:'Seq',
            host:'Host',
            time1:'Time1(ms)',
            time2:'Time2(ms)'
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
              seq:'4',
              bits:'10',
              ttl:'8',
              time:'10', 
            },
          ]
        },
      },
      bool:'trace',
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
  },
}
</script>

<style lang='scss' scoped>
.trace{
  position: relative;
  height: 100vh;
  min-width:800px;
  @media (max-width:800px) {
    min-width: 320px;
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
        grid-template-rows: 100% 0%;
        .table{
          overflow: auto;
          &::-webkit-scrollbar{
            display: none;
          }
          scrollbar-width:none;
        }
      }
  } 
}
</style>