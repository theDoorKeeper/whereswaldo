import React from 'react'
import styled from 'styled-components'


function CharMenu(props) {
    const {display, xpos, ypos} = props;
const Menu = styled.ul`
    position : absolute;
    display : ${display ? 'flex' : 'hidden'};
    left : ${xpos}px;
    top : ${ypos}px;
    list-style : none ; 
    flex-direction : column;
    height : 20vh;
    width : 3vw;
    border : 1px black solid;
    background-color : red;

`


    return (
        <Menu>
            <li>
               char1 
            </li>

            <li>
                char2
            </li>

            <li>
                char3
            </li>                    
        </Menu>
    )
}

export default CharMenu
