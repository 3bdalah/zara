import React from 'react';
import {connect} from "react-redux";
import  CartItem  from './CartItem';
const CartList = ({items}) => {
    return (
        <>
          <div className="container">
            <div className="row">
            {items.map(item => {
                        return(
                        <CartItem key={item.id} item={item} /> 
                        )
                    })}
            </div>
          </div>
        </>
    )
}
// Connect Parts Together 
export default connect(
    (coverData) => {
    return{
    items : coverData.Cart.items
    }
  })(CartList);
  