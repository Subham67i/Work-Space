import React from "react";

 class Render extends React.Component {
      constructor(props) {
        super(props);
        this.state={
            email:'',
            name : ''
        }
      }
      
    render() {
        console.log(this.state.email.name);
      return (
        <div>
          <h1>render Components</h1>
          <button onClick={()=>this.setState({email: 'high@gml.com'})}>email updat</button>
          <div>
            updated value :- {this.state.email}
            <br />
            <button onClick={()=>this.setState({name : 'subham'})}>update name</button>
            <br />
            update name :- {this.state.name}
          </div>
        </div>
        
      )
    }
    
 }

 export default Render;