
import styled from "styled-components";
import React, { useEffect, useState } from 'react';


const Overlay = styled.div.attrs(props => ({
    style: {
        display : props.isGameOver ? 'flex' : 'none',
         },
     }))`
    position: fixed; 
    justify-content :center;
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8); 
    z-index: 2; 
    cursor: pointer; 
    color  : white ;
    display : flex ;
    flex-direction : column;
    align-items : center;
  `;


const ScoreListContainer = styled.ul`
    height : fit-content;
    width : 60%;
    list-style : none; 
    display : flex ;
    flex-direction: column ; 
    align-items : center ;
    border-radius : 30px; 
    background-color : #191818;
    justify-content : space-between;
    padding : 1rem;
`;

    


function EndingScreen(props) {
    const {isGameOver, startingTime, finishingTime}=props;
    const [finalTime, setfinalTime] = useState(null);

    useEffect(() => {
        if(startingTime && finishingTime){
        const  seconds = finishingTime-startingTime ;
        const  date = new Date(seconds * 1000); 
        const timeStr = date.toTimeString().split(' ')[0];

            setfinalTime(timeStr)
        }
    }, [startingTime,finishingTime])
    return (
        <Overlay isGameOver={isGameOver}>
        </Overlay>
    )
}

export default EndingScreen