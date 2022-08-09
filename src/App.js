import React, { useEffect } from "react"
import { useRef,useState } from "react"
import store from "./redux/store"

function App(){
    const selectRef = useRef(null)
    const [xxx,update]=useState(null)
    console.log({...store})
    console.log('store',store.getState())
    // 订阅store的改动
    // useEffect(()=>{
    //     store.subscribe(()=>{
    //         update({})
    //     })
    // },[])
    const increase=()=>{
        store.dispatch({type:'increase',number:selectRef.current.value})
    }
    const decrease=()=>{
        store.dispatch({type:'decrease',number:selectRef.current.value})
    }
    const increaseIfOdd=()=>{
        if(store.getState()%2 !==0){
            store.dispatch({type:'increase',number:selectRef.current.value})
        }
    }
    const increaseAsync=()=>{
        setTimeout(() => {
            store.dispatch({type:'increase',number:selectRef.current.value})
        }, 1000);
    }
    return (
        <>
        <div>{store.getState()}</div>
        <select ref={selectRef}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <button onClick={()=>increase()}>increase</button>&nbsp;
        <button onClick={()=>decrease()}>decrease</button>&nbsp;
        <button onClick={()=>increaseIfOdd()}>increase if odd</button>&nbsp;
        <button onClick={()=>increaseAsync()}>increase async</button>&nbsp;
        </>
    )
}

export default App
