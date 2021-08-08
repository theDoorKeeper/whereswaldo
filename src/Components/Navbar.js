import React from 'react'
import styled from 'styled-components'

    const Nav = styled.ul`
    width : 100%;
    height : 3%;
    background-color : black;
    color: red;
    display : flex;
    justify-content : space-evenly ; 
    list-style : none;
    align-items : center;
    font-size : 2rem;
    margin-top : 0;
    margin-bottom : 0; 
    position:sticky; 
     top:0;
    z-index : 1;
    
    `
function Navbar(props) {
    const { foundChars } = props;

    const getRemainingChars = ()=>{
        return 3 - foundChars.length
    }

    return (
            <Nav>
                <li>
                    LOGO
                </li>

                <li>
                    Timer
                </li>

                <li>
                    Reamaining Chars {foundChars ? getRemainingChars() : 3}
                </li>
            </Nav>
    )
}

export default Navbar
