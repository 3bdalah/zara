import React from 'react';
import {connect} from "react-redux";
// Import Action 
import { decreas_item ,increas_item,remove_item,get_count_item,gettotals} from '../../cart/Actions';
import {MdClear} from "react-icons/md";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

const CartItem = ({item,decreas_item,increas_item,remove_item,get_count_item,gettotals}) => {
    React.useEffect(()=>{
        gettotals();
        get_count_item();
    });
    return (
        <>
          <div className="col-lg-8 col-md-8 col-sm-12 m-auto">
          <div key={item.id} className="card-cart">
           <div className="box-img">
           <img src={item.img} alt="img product" className="img"/>
           </div>
                  <div className="data-item">  
                    <span className="title"><strong>Title :</strong> {item.title}</span>
                    <br/>
                    <span className="price"><strong>Price :</strong> {item.price}</span>
                  </div>
               <div className="group-btn">
                    {/* Decrease Item  */}
                    <button onClick={() => decreas_item(item.id)} className="btn-Dec"> <AiOutlineMinus/> </button>
                    {/* Increase Item  */}
                    <span className="count">{item.count}</span>
                    <button onClick={() => increas_item(item.id)} className="btn-Inc"> <AiOutlinePlus/></button>
                    {/* Remove Item  */}
                    <button onClick={() => remove_item(item.id)}  className="btn-Rem"> <MdClear/> </button>
               </div>
            </div> 
                    
          </div>
        </>
    )
}
// Connect Parts Together 
export default connect(null,{decreas_item,increas_item,remove_item,gettotals,get_count_item})(CartItem);
  