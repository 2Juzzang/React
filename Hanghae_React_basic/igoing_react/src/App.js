import React, { Component } from "react";
import Toc from "./Toc";
import Content from "./Content";
import Exit from "./Exit";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content:{Title:"기본 제목", sub:"기본 내용", bye:"얘도 되나요", sleep:"ZZZ좀만 자다올게요ZZZ"}
    }
  }
  
  render() {
    return(
      <div className="App">
      <Toc sleep={this.state.content.sleep}/>
      <Content Title={this.state.content.Title} Sub={this.state.content.sub}/>
      <Content Title="이걸 바꾸면" Sub="이것도"/>
      <Content Title="아 이게 this.props." Sub="이름"/>
      <Content Title="jinja 같네" Sub="틀에 재료 붓는 느낌"/>
      <Exit bye={this.state.content.bye} sub="되네요" />
      </div>
    );
  }
}

export default App;
