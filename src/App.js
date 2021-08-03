import styled, { createGlobalStyle } from "styled-components";
import MainScreen from "./Components/MainScreen";
import Navbar from "./Components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding : 0;
    background-color : black ;
  } `

  const AppWrapper = styled.div`
  display : flex;
  flex-direction :column;
  justify-content : center;
  
  `

function App() {
  return (
    
    <AppWrapper>
      <GlobalStyle/>
      <Navbar/>
      <MainScreen/>
    </AppWrapper>
    
  );
}

export default App;
