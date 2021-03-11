import React from 'react'
import  {connect} from "react-redux";

// Import Action 
import { decreas_item ,increas_item,remove_item,gettotals,clear_cart,get_count_item} from '../cart/Actions';
// Import Title 
import Title from "../component/Title"
import CartList from "../component/Cart/CartList";
const Cart = ({items,total,clear_cart,gettotals, get_count_item}) => {
   
    // UpDate Totals Every Action 
    React.useEffect(()=>{
        gettotals();
        get_count_item();
    });

    // Check Cart Empty Or Full 
    if(items.length === 0){
        return (
            <div className="empty-cart">
              {/* {() => gettotals()}
              {() => get_count_item()} */}
                 <Title title={"Cart"}/>
                <h2 className="text-center">Cart Empty !!Oops</h2>
            </div>
        )
    }else{
        return (
            <div>
                {/* {() => gettotals()}
                {() => get_count_item()} */}
                <Title title={"Cart"}/>
                <div className="container text-center">
                <CartList/>
                <p className="total text-center">total :  {total}</p>
                {/* Clear Cart  */}
                <button onClick={() => clear_cart()} className="clear_cart text-center"> Clear Cart </button>
               </div>
            </div>
        )
    }
    
}

// Connect Parts Together 
export default connect(
    (coverData) => {
    return{
    items : coverData.Cart.items,
    total : coverData.Cart.total
    }
  },{decreas_item,increas_item,remove_item,gettotals,clear_cart,get_count_item})(Cart);
  