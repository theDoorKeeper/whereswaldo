import React from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
const Screen = styled.div`
background-image : url(${backGround});
height : 8422px;
cursor : crosshair;
`
const getCoordinates = (e)=>{

const target = e.target;


const rect = target.getBoundingClientRect();


const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
console.log(x,y)
}
function MainScreen() {
    return (
        <Screen onClick={getCoordinates}>           
        </Screen>
    )
}

export default MainScreen


