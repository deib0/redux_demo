let initial = 0
const countReducer=(preState=initial,action)=>{
    switch(action.type){
        case 'increase':
            return preState+action.number*1;
        case 'decrease':
            return preState-action.number;
        default:
            return preState 
}
}
export default countReducer