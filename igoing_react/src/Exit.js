import React, { Component } from "react";

class Exit extends Component {
    render() {
      return(
        <div>
          <h1>{this.props.bye}</h1>
          {this.props.sub}
        </div>
      );
    }
  }

  export default Exit;