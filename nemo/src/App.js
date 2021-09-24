import React from "react";
import Nemo from "./Nemo";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 3, 
    };
  }

  componentDidMount() {
  }

  addNemo = () => {
    this.setState({count: this.state.count + 1});
  }

  removeNemo = () => {
    if(this.state.count > 0){
    this.setState({count: this.state.count -1});
  } else {
    alert ('네모가 없습니다 선생님');
  }
} 
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Nemo />
        
      </div>
    )
  }

}



export default App;



