import data from "../data";
import {SINGLEPRODUCT} from "./type";

// Creat State 
let inintailState = {
    storeProducts : data,
    singleProduct:{},
    featured:[]
  
}

// Spread Featured Product
let tempProducts =  inintailState.storeProducts.filter(item => item.featured === true);
console.log('temp Prodcuts',tempProducts);
inintailState.featured=[...tempProducts];



console.log('featured',inintailState.featured);
const reminders = (state = inintailState, action) =>{
    if(action.type === SINGLEPRODUCT ) {
     console.log('action payload ',action.payload);
    //    let product = state.storeProducts.filter(item => item.id === action.id);
       inintailState = {...state,singleProduct :{...action.payload}};
       return inintailState;

    }else{

        return state;
    }
}

export default reminders;