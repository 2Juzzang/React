import styled, {keyframes} from "styled-components";

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}


const boxAnimation = keyframes`
  0%{
    border-radius: 0px;
    background: blue;
    top:20px;
  }

  65%{
    top:100px;
  }
  100%{
    background: green;
    border-radius: 50px;
    top:800px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius : 100px;
  position: absolute;
  top:20px;
  left: 20px;
  animation: ${boxAnimation} 1s 1s infinite linear alternate;
`;

export default App;
