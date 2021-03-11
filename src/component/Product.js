import React from 'react'
import { setSingle_Product } from '../reducer/Action'
import {Link} from "react-router-dom";
import {connect} from "react-redux"  
import {add_to_cart} from "../cart/Actions";
const Product = ({item,setSingle_Product,add_to_cart}) => {
    // const {that} = ;
    // console.log(props);
    let {id,img,title,price} = item; 
    return (
        <div className="col-lg-4 col-md-12 col-sm-12 m-auto">
            <div className="card">
                    <Link to={`/products/${id}`}  onClick={() => {setSingle_Product(item)}} className="link-product">
                    <div className="overlay">
                        <span className="view">View</span>
                    </div>
                    <img src={img} alt="title"/>
                    </Link>
                    <p className="title">{title}</p>
                    <p className="price">${price}</p>
                    <Link to={`/cart`} onClick={() => {add_to_cart(item)}}className="btn-add"> Add To Cart </Link>
                
            </div>
        </div>

    )
}



export default connect(null,{setSingle_Product,add_to_cart})(Product);
  