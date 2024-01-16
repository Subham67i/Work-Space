import React from "react";

class CompDidMount extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name : 'subham'
        }
    }
    componentDidMount(){
        console.log('ComponentsDidMount');
    }
    render() {
        console.log('Render');
      return (
        <div>
            <h1>Component Did Mount</h1>
            <pre>{this.state.name}</pre>
            <button onClick={()=>this.setState({name :'kumar'})}>Updated Name</button>
        </div>
      )
    }
    
}

export default CompDidMount;