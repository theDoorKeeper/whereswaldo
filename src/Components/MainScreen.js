import React, { useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import CharMenu from './CharMenu';


  const Screen = styled.div`
    background-image : url(${backGround});
    height : 8422px;
    width : 100vw;
    cursor : crosshair;
    position : relative; 
    `


function MainScreen() {
    const [charCoordinate, setCharCoordinate] = useState({});
    const [cursorCoordinate, setcursorCoordinate] = useState({});
    const [menuDisplay, setMenuDisplay] = useState(false);

    const getCoordinates = (e)=>{

    const target = e.target;

    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
        
    setCharCoordinate({x,y});
        
    }

    const getCursor = (e)=>{

        const x = e.pageX;
        const y = e.pageY ;

        setcursorCoordinate({x,y})
    }

    const handleClick = (e) =>{
        getCoordinates(e);
        getCursor(e);
    }

    const handleMenuCLick = (e)=>{
        e.stopPropagation();
        console.log(e.target.textContent)

    }

    return (
        <Screen onClick={handleClick}> 
        <CharMenu xpos={cursorCoordinate.x} ypos={cursorCoordinate.y}  handleClick={handleMenuCLick}/>          
        </Screen>
    )
}

export default MainScreen


