import React, { useEffect } from "react"
import { useRef,useState } from "react"
import store from "./redux/store"
import {createDecreaseAction,createIncreaseAction} from './redux/count_action'

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
        createIncreaseAction(selectRef.current.value)
    }
    const decrease=()=>{
        createDecreaseAction(selectRef.current.value)
    }
    const increaseIfOdd=()=>{
        if(store.getState()%2 !==0){
            createIncreaseAction(selectRef.current.value)
        }
    }
    const increaseAsync=()=>{
        setTimeout(() => {
            createIncreaseAction(selectRef.current.value)
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
