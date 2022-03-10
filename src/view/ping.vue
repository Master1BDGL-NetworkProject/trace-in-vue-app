<template>
  <div class="ping">
    <Menu :bool="bool" :mydataIcon="icon" class="menu"></Menu>
    <div class="content">
      <div class="item">
        <div class="title">
          <h1>Ping</h1>
          <div class="info">
            <img src="../assets/idea.svg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium. Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="form">
            <form action="" method="post">
            <field :myfield="ip"></field>
            <field :myfield="sortie"></field>
            <div class="grid">
              <field :myfield="numberPaquet"></field>
              <field :myfield="ttl"></field>
              <field :myfield="LenghtPaquet"></field>
            </div>
            <field :myfield="time"></field>
            <div class="control">
              <div class="resert"><span>Reinitialiser</span></div>
              <input type="submit" value="Effectuer le ping">
            </div>
            </form>
          </div>
        </div>
      </div>
      <div class="graph">
        <div class="table">
          <p>Ping:<span v-text="pingIp.ip"></span></p>
          <Table class="table-component" :head="pingIp.head" :tableData="pingIp.response"></Table>
        </div>
        <div class="courbe">
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import field from '../components/field.vue'
import Menu from '../components/Menu.vue'
import Table from '../components/Table.vue'
export default {
    name:'ping',
    components:{
      field,
      Menu,
      Table
    },
    data(){
      return{
        pingIp:{
          ip:'172.032.067.225',
          head:{
              seq:'Seq',
              bits:'Bits',
              ttl:'TTL',
              time:'Temps(ms)'
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
        ip:{
          label:'Adresse IP / Host',
          placeholder:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        sortie:{
          label:'Sortie',
          placeholder:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        numberPaquet:{
          label:'Nombre de paquets',
          placeholder:'Lorem ipsum dolor sit',
        },
        ttl:{
          label:'TTL',
          placeholder:'Lorem ipsum',
        },
        LenghtPaquet:{
          label:'Taille du paquet',
          placeholder:'Lorem ipsum dolor sit',
        },
        time:{
          label:'Temps mort',
          placeholder:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      }
    }
}
</script>

<style lang="scss" scoped>
  .ping{
    position: relative;
    height: 100vh;
    .menu{
      position: absolute;
      left: 0;
      background-color: white;
      border-right: 10px solid whitesmoke;
      margin-left: 0;
    }
    .content{
      padding-left: 115px;
      display: grid;
      grid-template-columns: 55% 45%;
      .item{
        padding: 0.5rem;
        padding-top: 2.5rem;
        .title{
          width: 100%;
          h1{
            text-align:left;
          }
          .info{
            margin-top: .7rem;
            margin-bottom: .9rem;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-column-gap: 15px;
            background-color: #fff5c5;
            padding: .7rem;
            img{
              width: 60px;
              height: auto;
              object-fit: cover;
            }
            p{
              align-self: center;
              text-align: left;
            }
          }
        }
        .form{
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
              .resert{
                cursor: pointer;
                width: 100%;
                height: 44px;
                display: grid;
                place-items: center;
                background-color: whitesmoke;
                border-radius: 7px;
                transition: background-color 700ms ease;
                span{
                  font-size: 1rem;
                  color: rgb(110, 110, 110);
                }
                &:hover{
                  background-color: rgb(218, 218, 218);
                  span{
                    color: rgb(110, 110, 110);
                  }
                }
              }
              input{
                cursor: pointer;
                font-size: 1rem;
                color:white;
                background-color: #54b5ff;
                outline: none;
                border: none;
                border-radius: 7px;
                transition: background-color 700ms ease;
                &:hover{
                  background-color: #0091ff;
                }
              }
            }
          }
        }
      }
      .graph{
        padding: .5rem;
        padding-top: 2rem;
        display: grid;
        grid-template-rows: 80% 20%;
        .table{
          overflow: auto;
          &::-webkit-scrollbar{
            display: none;
          }
          scrollbar-width:none;
          p{
            background-color: #54b5ff;
            padding: 8px;
            text-align: left;
            border-radius: 5px;
            color: white;
            font-weight: 600;
          }
        }
        .table-component{
          margin-top: 1rem;
        }
      }
    }
  }
</style>