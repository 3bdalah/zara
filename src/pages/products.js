import React from 'react'
import {setSingle_Product} from "../reducer/Action";
import {get_count_item} from "../cart/Actions";
// import { PureComponent } from 'react';
import {connect} from "react-redux"  
import Title from "../component/Title";
import Product from "../component/Product";

const Products =({storeProducts,get_count_item}) => {
    React.useEffect(()=>{
        
        get_count_item();
    }); 
        return (
            <>
            <Title title={"Products"}/>
            <div className="container">
                 <div className="row">
                    {/* Display Products  */}
                    {storeProducts.map(item => {
                            return (
                                    <Product key={item.id} item={item}/>
                            )
                    })}
                 </div>
            </div>

            </>
        )
    
}



export default connect(
    (coverdata) => {
    return{
       storeProducts: coverdata.productss.storeProducts
    }
  },{setSingle_Product,get_count_item})(Products);
  