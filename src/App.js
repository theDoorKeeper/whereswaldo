import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DifficultyScreen from "./Components/DifficultyScreen";
import EndingScreen from "./Components/EndingScreen";
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
  const [isDoneLoading, setisDoneLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

useEffect(() => {
  if(isDoneLoading){
  setIsGameOver(foundChars.length === Object.entries(dbChars).length )
}
  console.log(isGameOver,Object.entries(dbChars).length,foundChars.length)
}, [setIsGameOver,foundChars,isGameOver,dbChars,isDoneLoading])




  return (
    <AppWrapper>
      <GlobalStyle/>
      <DifficultyScreen setDbChars={setDbChars} setisDoneLoading={setisDoneLoading}/>
      <Navbar foundChars={foundChars}/>  
      <MainScreen dbChars={dbChars}  foundChars={foundChars} setFoundChars={setFoundChars}/>
      <EndingScreen isGameOver={isGameOver}/>
    </AppWrapper>
    
  );
}

export default App;
