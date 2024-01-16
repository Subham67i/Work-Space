import React from "react";

class CompDidUpdate extends React.Component{
    constructor(props) {
        super(props);
        console.warn('Constructor');
        this.state={
           count : 0
        }
    }
    componentDidUpdate(preProps,preState){
        console.warn('componentDidUpdate',preState.count,this.state.count);
        // data is same this condition work
        if(preState.count===this.state.count){
            alert('data is same');
        }
        // with condition data update
        if(this.state.count < 20){
            this.setState({count:this.state.count+1})
        }
    
    }

    render() {
       
      return (
        <div>
          <h2>Comp Did Update{this.state.count}</h2>
          <button onClick={()=>this.setState({count:1})}>update </button>
        </div>
      )
    }
    
}

export default CompDidUpdate;