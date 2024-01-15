import React from "react";

class Comp extends React.Component{
    constructor(props) {
        super(props);
        console.warn('constructor');
        this.state={
            name : 'subham'
        }
    }
    componentDidMount(){
       console.warn('compDidMount');
    }
    render() {
        console.warn('render');
      return (
        <div>
           <h1>Component Did Upadte</h1>
           <button onClick={()=>{this.setState({name:'kumar'})}}>update name</button>
        </div>
      )
    }
    
}

export default Comp;