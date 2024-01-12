import React from "react";

class User extends React.Component{
    render() {
      return (
       
        <div>
          
          <h1>User Components</h1>
          <button onClick={this.props.data}>Call user components</button>
          
        </div>
      )
    }
}

export default User;