import React from 'react'
import styled from 'styled-components'

const Menu = styled.ul`
    position : absolute;
    display : ${ props => props.display ? 'flex' : 'hidden'};
    left : ${props => props.xpos}px;
    top : ${props => props.ypos}px;
    list-style : none ; 
    flex-direction : column;
    justify-content : space-around;
    height :200px;
    width : 100px;
    border : 1px #d9534f solid;
    gap : 2px;
    background-color : #292b2c;
    cursor : pointer;

`
function CharMenu(props) {
    const {display, xpos, ypos, handleClick} = props;



    return (
        <Menu display={display} xpos={xpos} ypos={ypos}>
            <li onClick={handleClick}>
               char1 
            </li>

            <li onClick={handleClick}>
                char2
            </li >

            <li onClick={handleClick}>
                char3
            </li>                    
        </Menu>
    )
}

export default CharMenu
