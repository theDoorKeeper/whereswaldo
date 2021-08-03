import firebase from "firebase"; 
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey : process.env.REACT_APP_WHERESWALDO_API_KEY ,
    authDomain : process.env.REACT_APP_WHERESWALDO_AUTH_DOMAIN ,
    projectId:process.env.REACT_APP_WHERESWALDO_PROJECT_ID ,
    storageBucket:process.env.REACT_APP_WHERESWALDO_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_WHERESWALDO_MESSAGE_SENDER_ID ,
    appId:process.env.REACT_APP_WHERESWALDO_APP_ID 
  
})

export const db = firebase.firestore();
export default app;