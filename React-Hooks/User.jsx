import React,{useState} from "react";

function MyComponent() {
    const [data, setData] = useState('subham');
   
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={()=>setData('kumar')}>Updat Name</button>
      </div>
    );
  }

  export default MyComponent;