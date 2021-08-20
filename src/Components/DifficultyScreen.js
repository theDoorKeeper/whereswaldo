import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import Caroussel from './Caroussel';

const Overlay = styled.div.attrs(props => ({
    style: {
        display : props.visible ? 'auto' : 'none',
         },
     }))`
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8); 
    z-index: 2; 
    cursor: pointer; 
  
  `

function DifficultyScreen(props) {
    const {setDbChars, setisDoneLoading} = props;
    const [difficulty, setDifficulty] = useState(null) ;
    const [visible, setvisible] = useState(true);


    const getData =  async ()  => {   
        const ref = db.collection("Chars").doc(`${difficulty}`);
        const data = await ref.get();
        const finalData =  data.data();
        setDbChars(finalData);
        setisDoneLoading(true);
    }

    const handleClick =  (e)=>{
        setDifficulty(e.target.textContent);
        setvisible(false);
    }
    useEffect(() => {
        if(difficulty){
            getData()
        }
    }, [difficulty])
    
    return (
        <Overlay visible={visible} >
            <Caroussel handleCLick={handleClick}/>
        </Overlay>
    )
}

export default DifficultyScreen
