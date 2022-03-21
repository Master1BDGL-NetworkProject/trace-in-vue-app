<template>
<div v-on:click="handleClick()" class="icon">
    <img ref="image" :src="require('../assets/'+dataIcon.img)">
</div>
</template>

<script>
export default {
    name:'iconImage',
    props:{
        dataIcon:Object,
        bool:String,
        el:String,
    },
    data(){
        return{
            data:{
            sunImg:'sun.svg',
            moonImg:'moon.svg',
            },
        }
    },
    mounted(){
        this.handleState()
    },
    methods:{
        handleClick(){
            if(this.el=='ping'){
                this.$router.push('/ping')
                this.$el.classList.add('pingState')
            }
            if(this.el=='traceroute'){
                this.$router.push('/trace-route')
                this.$el.classList.add('traceState')
            }
            if(this.el=='moon'){
                this.$emit('dark')
            }
            if(this.el=='about'){
                this.bus.emit('about')
            }
        },
        handleState(){
            if(this.bool=='ping' && this.el=='ping'){
                this.$el.classList.add('pingState')
            }
            if(this.bool=='trace' && this.el=='traceroute'){
                this.$el.classList.add('traceState')
            }
            if(this.bool=='home' && this.el=='ping'){
                this.$el.style.display='none'
            }
            if(this.bool=='home' && this.el=='traceroute'){
                this.$el.style.display='none'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .icon{
        cursor: pointer;
        width: 45px;
        height: 45px;
        border-radius: 9px;
        background-color: rgb(255, 255, 255);
        display: grid;
        place-items: center;
        margin: 0 auto;
        transition: background-color 700ms ease;
        img{
            width: 20px;
            height:auto;
            object-fit: cover;
        }
        &:hover{
            background-color: rgb(240, 239, 239);
        }
    }
    .pingState{
        background-color: #e0f2ff;
        img{
            width: 36px;
            height:auto;
            object-fit: cover;
        }
        &:hover{
            background-color: #cfe8fa;
        } 
    }
    .traceState{
        background-color: #e0f2ff;
        img{
            width: 36px;
            height:auto;
            object-fit: cover;
        }
        &:hover{
            background-color: #cfe8fa;
        } 
    }
</style>