import React, { useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import CharMenu from './CharMenu';

function MainScreen() {
    const [mousePosition, setmMousePosition] = useState({});




    const Screen = styled.div`
    background-image : url(${backGround});
    height : 8422px;
    width : 100vw;
    cursor : crosshair;
    `

    const getCoordinates = (e)=>{

    const target = e.target;


    const rect = target.getBoundingClientRect();


    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
        
        setmMousePosition({x,y});
        
    }

    return (
        <Screen onClick={getCoordinates}> 
        <CharMenu/>          
        </Screen>
    )
}

export default MainScreen


