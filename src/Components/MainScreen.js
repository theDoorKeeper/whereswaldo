import React, { useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import CharMenu from './CharMenu';

function MainScreen() {
    const [charCoordinate, setCharCoordinate] = useState({});
    const [cursorCoordinate, setcursorCoordinate] = useState({})


    const Screen = styled.div`
    background-image : url(${backGround});
    height : 8422px;
    width : 100vw;
    cursor : crosshair;
     position : relative; 
    `

    const getCoordinates = (e)=>{

    const target = e.target;

    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
        
    setCharCoordinate({x,y});
        
    }



    const handleClick = (e) =>{
        getCoordinates(e);
    }
    return (
        <Screen onClick={handleClick}> 
        <CharMenu/>          
        </Screen>
    )
}

export default MainScreen


