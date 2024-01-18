import React,{useEffect, useState} from "react";
// import User from "./User"

function MyFunction(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState(5);
 
// useEffect(()=>{
//   console.log('use Effect');
// },[data])

// useEffect(()=>{
//    alert('count'+ count)
//   },[count])

 return(
    <div>
        <h1>useEffect </h1>
        <User count={count} data={data}/>
        <br />
        <button onClick={()=>setCount(count+1)}>Updat Count</button>
        <button onClick={()=>setCount(count-1)}>decrise </button>
        <button onClick={()=>setData(data+1)}>Updat Data</button>
    </div>
 )

}

export default MyFunction;
