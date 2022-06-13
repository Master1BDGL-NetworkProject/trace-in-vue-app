class ApiHelpers{
    static  BASE_ULR='https://461f0f375f2f37.lhrtunnel.link/'
    static async getPingInfo(params) {
        let info=await fetch(`${this.BASE_ULR}ping?${params}`)
        let data =(await info.json()).data
        console.log(data)
        return data
    }
    static async getTraceRouteInfo(params) {
        let info=await fetch(`${this.BASE_ULR}traceroute?${params}`)
        let data =(await info.json()).data
        return data
    }
    
}
class ApiParameter{
    static pingParameter(host,packetsNu,packetSize,ttl,timeOut){
        return `host=${host}&packetsNu=${packetsNu}&packetSize=${packetSize}&ttl=${ttl}&timeOut=${timeOut}`
    }
    static traceRouteParameter(host,hopsMaxNumber,timeOut,protocol){
        return `host=${host}&hopsMaxNumber=${hopsMaxNumber}&timeOut=${timeOut}&protocol=${protocol}`
    }
}

export {ApiHelpers,ApiParameter}