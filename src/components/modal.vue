<template>
  <div class="modal">
      <div ref="overlay" v-on:click="outsideClick($event)" class="overlay">
        <div class="content">
            <div v-on:click="close()" class="close"><span>X</span></div>
            <div class="about">
                <div class="logo">
                    <img src="../assets/traceroute.svg" alt="">
                    <div>
                        <p>TraceIn</p>
                        <p>version:<span class="blue"> 1.0</span></p>
                    </div>
                </div>
                <div class="about-content">
                    <p class="apropos">A propos</p>
                    <p>
                        Cette application est un utilitaire réseau qui permet de faire le  <span class="blue">traceroute</span> et le <span class="blue">ping</span>.
                    </p>
                    <p>
                        Cette application est un projet qui est fait exclusiment dans le cadre  du cours de réseaux et protocoles
                    </p>
                    <p>
                        Professeur du cours:
                        <span class="blue">M. Diallo Mohamed</span>
                    </p>
                    <p style="margin-bottom:2px;">
                        <span class="blue">
                            Contributeurs:
                        </span>
                        <ul>
                            <li>Teby Laurie</li>
                            <li>N'Guessan Jonas</li>
                            <li>Kondombo Ismael</li>
                            <li>Konan Obed</li>
                        </ul>
                    </p>
                    <p>
                        Code source Mobile App:
                        <a href="https://github.com/SiProgramming/trace_in_mobile_app">https://github.com/SiProgramming/trace_in_mobile_app</a>
                    </p>
                    <p>
                        Code source Desktop App:
                        <a href="https://github.com/SiProgramming/trace-in-desktop-app">https://github.com/SiProgramming/trace-in-desktop-app</a>
                    </p>
                    <p>
                        Code source TraceIn API App:
                        <a href="https://github.com/SiProgramming/tracerouteAPI">https://github.com/SiProgramming/tracerouteAPI</a>
                    </p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name:'Modal',
methods:{
    outsideClick(e){
        const overlay=this.$refs.overlay
        if(e.target==overlay){
            this.bus.emit('outside')
        }
    },
    close(){
        this.bus.emit('close')
    }
}
}
</script>

<style lang='scss' scoped>
    .modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        .overlay{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha:0.7);   
        display: grid;
        place-items: center;
        overflow: hidden; 
        }
        .content{
            color:black;
            position: relative;
            width: 60%;
            height: 93%;
            border-radius: 10px;
            padding: 20px;
            padding-top: 60px;
            padding-right: 40px;
            background-color: white;
            .close{
                cursor: pointer;
                position: absolute;
                height: 30px;
                width: 30px;
                border-radius: 8px;
                display: grid;
                place-items: center;
                top: 20px;
                right: 20px;
                background-color: whitesmoke;
                transition:background-color 1s ease ;
                // transition:color 50ms ease ;
                &:hover{
                    background-color: rgb(209, 209, 209);
                    color: whitesmoke;
                }
            }
            .apropos{
                font-weight: 700;
                font-size: 1.12rem;
                color: #1a9afc;
            }
            .about{
                display: grid;
                grid-template-columns: 1fr 1fr;
                font-weight: 300;
                .blue{
                    color: #54b5ff;
                    font-weight: 500;
                }
                .logo{
                    align-self: center;
                    img{
                        cursor: pointer;
                        width: 120px;
                        height: auto;
                        object-fit: cover;
                        border-radius: 10px;
                        border: 1px  solid #54b5ff;
                        padding: 5px;
                    }
                    div{
                        width: 100px;
                        margin: 5px auto;
                        p{
                            text-align: left;
                        }
                    }
                }
                .about-content{
                    p{
                        text-align: left;
                        margin-bottom: 0.8rem;
                    }
                    ul{
                        margin-left:2rem ;
                        list-style-type: '-';
                        margin-bottom: 00.8rem;
                        li{
                            text-align: left;
                        }
                    }
                    a{
                        color: #54b5ff;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>