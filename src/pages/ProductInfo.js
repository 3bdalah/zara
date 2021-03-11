import React from 'react'
// import Actions 
import {setSingle_Product} from "../reducer/Action";
import {Link} from "react-router-dom";
import {connect} from "react-redux"  
import {add_to_cart} from "./../cart/Actions";
import Title from "../component/Title";
const ProductInfo = ({singleProduct,add_to_cart}) => {
       let {title,price,id,img,description , avalb_cnt}= singleProduct;
       console.log('single Product : ',singleProduct);
        return (

          <>
           <Title title="Product Info "/>
           <section className="product-info">
                      <div className="container">
                         <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 m-auto ">
                                       <div className="cover-img">
                                        <img src={img} alt="hoto-product"/>
                                        {/* <img src={img} alt="title"/> */}
                                       </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-sm-12  ">
                                       <div className="data-product">
                                       <strong>Title : <p>{title}</p></strong>
                                       <strong>Price : <p>{price}</p></strong>
                                       <strong>Avalible : <p>{ avalb_cnt}</p></strong>
                                       <strong>inforamtion : <p>{description}</p></strong>
                                       <Link to={`/cart`} onClick={() => {add_to_cart(singleProduct)}} className="btn-add"> Add To Cart </Link>
                                       <Link to={`/products`}  className="btn-add"> Back To Products  </Link>
                                       </div>
                                </div>
                         </div>
                      </div>
           </section>
          </>
        )
    
}

export default connect(
    (coverdata) => {
    return{
    singleProduct:coverdata.productss.singleProduct
    }
  },{setSingle_Product,add_to_cart})(ProductInfo);