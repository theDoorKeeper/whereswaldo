import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DifficultyScreen from "./Components/DifficultyScreen";
import MainScreen from "./Components/MainScreen";
import Navbar from "./Components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding : 0;
    background-color : black ;
    @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');
    font-family: 'Nova Mono', monospace;
  } `

  const AppWrapper = styled.div`
  display : flex;
  flex-direction :column;
  justify-content : center;
  
  `

function App() {
  const [dbChars, setDbChars] = useState({}) ;
  const [foundChars, setFoundChars] = useState([]) ;

  return (
    <AppWrapper>
      <GlobalStyle/>
      <DifficultyScreen setDbChars={setDbChars} foundChars={foundChars} setFoundChars={setFoundChars} />
      <Navbar foundChars={foundChars}/>  
      <MainScreen dbChars={dbChars}  />
    </AppWrapper>
    
  );
}

export default App;
