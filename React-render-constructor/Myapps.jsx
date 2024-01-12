import React from "react";

class Myapps extends React.Component{
    render() {
      return (
        <div>
          <h1>Myapp Components</h1>
          <button onClick={this.props.data}>Call myapps components</button>
        </div>
      )
    }
}

export default Myapps;