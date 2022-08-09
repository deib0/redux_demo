// 生成action
import {INCREASE,DECREASE} from './constant'
let initial = 0
const countReducer=(preState=initial,action)=>{
    switch(action.type){
        case INCREASE:
            return preState+action.data*1;
        case DECREASE:
            return preState-action.data;
        default:
            return preState 
}
}
export default countReducer