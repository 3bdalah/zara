import {ADD,DEC, INC,REM,TOT,CLR, CNT} from "./Type";

// Add To Cart
export const add_to_cart = (item) => {
    const action = {
        type: ADD,
        payload : item
    }
    return action;
}

// decreas  item 
export const decreas_item = (id) => {
    const action = {
        type: DEC,
        payload : id
    } 
    return action;
}
export const increas_item = (id) =>{
 const action = {
     type : INC,
     payload : id
 }
 return action;
}

// Remove Item 
export const remove_item = (id) =>{
    const action = {
        type : REM,
        payload : id
    }
    return action;
}

// Remove Item 
export const gettotals = () =>{
    const action = {
        type : TOT
    }
    return action;
}
// clear Cart 
export const clear_cart = () =>{
    const action = {
        type : CLR
    }
    return action;
}

// get Count Items 
export const get_count_item = () =>{
    const action = {
        type :CNT
    }
    return action;
}