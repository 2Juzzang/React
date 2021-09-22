import React from "react";
import Start from "./Start";


const App = () => {
  const [name, setName] = React.useState("이지훈");
  return (
  <div>
    <Start name={name}/>
  </div>
  );
} 

export default App;