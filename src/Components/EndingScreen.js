import styled from "styled-components";
import React from 'react';


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
  
  `



function EndingScreen(props) {
    const {isGameOver}=props;
    return (
        <Overlay isGameOver={isGameOver}>
            
        </Overlay>
    )
}

export default EndingScreen
