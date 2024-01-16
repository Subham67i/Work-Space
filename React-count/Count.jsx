import React  from "react";

class Count extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count : 0
        }
        
    }
    
    render() {
      return (
        <div>
           <h1>Counter Update {this.state.count}</h1>
           <button onClick={()=>this.setState({count :this.state.count+1})}>Counter Update</button>
        </div>
      )
    }
    
}
export default Count;