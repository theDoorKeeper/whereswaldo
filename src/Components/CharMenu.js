import React from 'react'
import styled from 'styled-components'


function CharMenu(props) {
    const {display, xpos, ypos} = props;
const Menu = styled.ul`
    position : absolute;
    display : ${display};
    left : ${ypos};
    top : ${xpos};
    list-style : none ; 
    display: flex;
    flex-direction : column;
    height : 1vh;
    width : 0.5vw;
    border : 1px black solid;

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
