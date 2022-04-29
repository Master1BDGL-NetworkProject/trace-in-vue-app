import axios from "axios";
class ApiHelpers{
    static  BASE_ULR='http://34.229.230.190:8080/'
    static async getPingInfo(params) {
        let info=await axios.get(`${this.BASE_ULR}ping?${params}`)
        return info.data.data
    }
    static async getTraceRouteInfo(params) {
        let info=await axios.get(`${this.BASE_ULR}traceroute?${params}`)
        return info.data.data
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