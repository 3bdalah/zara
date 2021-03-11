// import Types
import { ADD,DEC,INC,REM,TOT,CLR,CNT} from "./Type";
// import  Function 
import {addToCart,decreas_item,increas_item,getTotal,getCountProducts} from "./Functions";
// Create Structur State
let CartData = {
    items :[],
    total: 0,
    countProducts:0
}
// Start Reducer
const Cart = (state = CartData,action) => {
    // Add New Item To Cart 
    if(action.type === ADD){
        CartData = {...state,items : addToCart(state.items,action.payload),countProducts : getCountProducts(state.items)};
        return CartData;
    // Decrease Item 
    }else if(action.type === DEC){
        CartData = {...state, items : decreas_item(state.items,action.payload),countProducts : getCountProducts(state.items)};
        return CartData;
    // Increase Item 
    }else if(action.type === INC){
        CartData = {...state, items : increas_item(state.items,action.payload),countProducts : getCountProducts(state.items)};
        return CartData;
    // Remove Item 
    }else if(action.type === REM){
        CartData = {...state, items : state.items.filter(item => item.id !== action.payload),countProducts : getCountProducts(state.items)};
        return CartData;
    // Get Totals 
    }else if(action.type === TOT){
       CartData = {...state, total: getTotal(state.items),countProducts : getCountProducts(state.items)};
       return CartData;
    // Clear Cart 
    }else if(action.type === CLR ){
      CartData = {...state, items : [],countProducts : getCountProducts(state.items)};
      return CartData;
    // Get Count Items
    }else if(action.type === CNT){
       CartData = {...state,countProducts : getCountProducts(state.items)};
       return CartData;
    
    }else{
        return state;
    }
}
// End Reducer And Export 
export default Cart;