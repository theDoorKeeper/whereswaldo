import React from 'react'
import styled from 'styled-components'


function Navbar() {
    const Nav = styled.ul`
    width : 100vw;
    height : 2vw;
    background-color : black;
    color: red;
    display : flex;
    justify-content : space-evenly ; 
    list-style : none;
    align-items : center;
    font-size : 2rem;
    margin-top : 0;
    margin-bottom : 0;
    
    `
    return (
            <Nav>
                <li>
                    LOGO
                </li>

                <li>
                    Timer
                </li>

                <li>
                    Reamaining Chars
                </li>
            </Nav>
    )
}

export default Navbar
