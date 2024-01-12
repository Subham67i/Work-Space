import React from "react";

class Console extends React.Component{

    state = {inputValue : ''}
   
   inputChange(e){
       console.log(e.target.value);
   }
    
    render() {
      return (
        <div>
                 <form>
                   <label>Entre text</label>
                   <input type="text" onChange={this.inputChange}></input>
                    
                </form>
                <br/>
                <div>
                    <form>
                        <lable>Enter text</lable>
                         <input type="text" value={this.state.inputValue}
                                 onChange={(e) => this.setState({
                                    inputValue : e.target.value
                                 })}/>
                    </form>
                </div>
                <br/>
                <div>
                   Entred value :- {this.state.inputValue}
                </div>
                
        </div>
       
      )
    }
}

export default Console;