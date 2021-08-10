import { timeStamp } from "../firebase"

        
        export const getTime = ()=>{
             const getHours = timeStamp.getHours*3600;
             const getMinutes = timeStamp.getMinutes*60;
             const getSeconds = timeStamp.getSeconds;
             
             return getHours+getMinutes+getSeconds 
        }