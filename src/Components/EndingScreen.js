
import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from 'react';


const growDown = keyframes`
0% {

  transform: scaleY(0)

}

80% {

  transform: scaleY(1.1)

}

100% {

  transform: scaleY(1)

}

`;

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
    animation-name: ${growDown};
    animation-duration: 1s;
`;

const Score = styled.li`
    height : 1rem ;
    margin : 0.5rem;
    font-size : 2rem;
    color : whitesmoke;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: whitesmoke;
  border: none;
  border-radius: 15px;
  ::placeholder {
    color: black;
  }
  :focus{
    outline: none;
    border: none;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  border : none;
  :hover{
      background : #1e1e1e;
  }
  :disabled{
    color: grey;
    opacity: 0.7;
    cursor: default;

    :hover{
     background : black;
    }
  }
`;
    


function EndingScreen(props) {
    const {isGameOver, startingTime, finishingTime}=props;
    const [finalTime, setfinalTime] = useState(null);
    const [scoreList, setScoreList] = useState([]);
    const [timeLeaderBoard, setTimeLeaderBoard] = useState([]);


 


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