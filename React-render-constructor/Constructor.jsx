import React from "react";

class Constructor extends React.Component{
    constructor(props) {
        super(props);
        console.warn('constructor');
    }
    

    render(){
        console.warn('render');
      return (
        <div>
          
        </div>
      )
    }
}

export default Constructor;