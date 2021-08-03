import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
import { db } from '../firebase';
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
        setMenuDisplay(true);
        
    }

    const handleMenuCLick = (e)=>{
        e.stopPropagation();
        setMenuDisplay(prevState => prevState ? false : true  )
        console.log(e.target.textContent)

    }
    
    useEffect(() => {
        
    })


    const getData =  async ()  => {
        const ref = db.collection("Chars").doc("Easy");
        const data = await ref.get();
        const finalData = await data.data();
        return finalData
    }
    return (
        <Screen onClick={handleClick}> 
        <CharMenu xpos={cursorCoordinate.x} ypos={cursorCoordinate.y}  handleClick={handleMenuCLick} displayMenu={menuDisplay}/>          
        </Screen>
    )
}

export default MainScreen


