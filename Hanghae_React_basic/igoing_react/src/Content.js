import React, { Component } from "react";

class Content extends Component {
  
    render() {
      return(
        <div>
        <h3>{this.props.Title}</h3>
        <h2>{this.props.Sub}</h2>
        </div>
      );
    }
  }

  export default Content;