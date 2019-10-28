const tiger = false 
//这是action
const increase = {
    type: false
}
const decrease = {
    type: true
}
//这是reducer
const reducer = (state = tiger, action) => {
    if(action.type === true){
        state = true;
        return state;
    }else{
        state = false;
        return state;
    }
}
export default reducer