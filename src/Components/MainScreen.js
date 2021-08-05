import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import CharMenu from './CharMenu';



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
    const {dbChars} = props;
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
        setMenuDisplay(true);
    }


    return (
        <Screen onClick={handleClick}> 
        <CharMenu dbChars={dbChars} xpos={cursorCoordinate.x} ypos={cursorCoordinate.y}  setMenuDisplay={setMenuDisplay} displayMenu={menuDisplay}/>          
        </Screen>
    )
}

export default MainScreen


