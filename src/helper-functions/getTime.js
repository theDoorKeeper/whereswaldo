import firebase from "firebase"; 
        
        export const getTime = ()=>{
            const timeStamp = firebase.firestore.Timestamp.now().toDate();
             const getHour = timeStamp.getHours()*3600;
             const getMinute = timeStamp.getMinutes()*60;
             const getSecond = timeStamp.getSeconds();
             const totalSeconds  = getHour+getMinute+getSecond
             return totalSeconds
        }