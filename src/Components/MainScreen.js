import React from 'react'
import styled from 'styled-components';
import backGround from '../assets/backGround1.jpg'
const Screen = styled.div`
background-image : url(${backGround});
height : 8422px;
cursor : crosshair;
`
function MainScreen() {
    return (
        <Screen >           
        </Screen>
    )
}

export default MainScreen


