import store from "./store"
import {INCREASE,DECREASE} from "./constant"

export const createIncreaseAction=(data)=>store.dispatch({type:INCREASE,data})
export const createDecreaseAction=(data)=>store.dispatch({type:DECREASE,data})