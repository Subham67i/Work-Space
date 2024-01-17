import React,{useEffect, useState} from "react";

function useEffect(){

    const [count , setCount] = useState(0)

     console.log({count},"useEffect");
    return(
        <div>
            <h1>useEffect in react js {count}</h1>
            <button onClick={()=>setCount(count+1)}>count Updat</button>
        </div>
    )
}

export default useEffect;