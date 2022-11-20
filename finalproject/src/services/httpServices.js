import axios from "axios";
import config from "./config.json"

const httpServices = (url, method, data=null, )=>{
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url: config.onlineApi+url,
        method,
        data,
        headers:{
            authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null ,
            "Content-Type" : "application/json"
        }
    })
}
export default httpServices;