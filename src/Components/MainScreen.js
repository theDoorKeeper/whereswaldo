import React, { useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import CharMenu from './CharMenu';
import Popup from './Popup';



  const Screen = styled.div`
    background-image : url(${backGround});
    margin-left : auto;
    margin-right : auto;
    min-height : 8422px;
    max-height : 8422px;
    max-width : 1908px;
    min-width : 1908px;
    cursor : crosshair;
    position : relative; 
    `


function MainScreen(props) {
    const {dbChars, foundChars, setFoundChars} = props;
    const [charCoordinate, setCharCoordinate] = useState({});
    const [menuDisplay, setMenuDisplay] = useState(false);


    const getCoordinates = (e)=>{

    const target = e.target;

    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
        
    setCharCoordinate({x,y});
        
    }



    const handleClick = (e) =>{
        getCoordinates(e);
        setMenuDisplay(true);
    }


    return (
        <Screen onClick={handleClick}> 
        <Popup/>
        <CharMenu
         dbChars={dbChars}
         xpos={charCoordinate.x}
         ypos={charCoordinate.y}
         setMenuDisplay={setMenuDisplay} 
         displayMenu={menuDisplay}
         foundChars={foundChars}
         setFoundChars={setFoundChars}/>          
        </Screen>
    )
}

export default MainScreen


