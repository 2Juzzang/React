import React from "react";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score"
import {Route} from "react-router-dom";

const App = () => {
  const [name, setName] = React.useState("이지훈");
  return (
  <div>
    <Route path="/" exact>
      <Start name={name}/>
    </Route>

    <Route path="/quiz" exact>
      <Quiz/>
    </Route>

    <Route path="/score" exact>
      <Score name={name}/>
    </Route>
  </div>
  );
} 

export default App;