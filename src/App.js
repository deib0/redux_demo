import React from "react"
import { useRef,useState } from "react"

function App(){
    const [n,setN]=useState(0)
    const selectRef = useRef(null)
    const increase=()=>{
        setN(selectRef.current.value-0+n)
    }
    return (
        <>
        <div>{n}</div>
        <select ref={selectRef}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <button onClick={()=>increase()}>increase</button>&nbsp;
        <button>decrease</button>&nbsp;
        <button>increase if odd</button>&nbsp;
        <button>increase async</button>&nbsp;
        </>
    )
}

export default App
