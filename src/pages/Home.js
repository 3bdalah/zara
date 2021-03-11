import React from 'react';
import {Link} from "react-router-dom";
import Services from "../component/Services";

import Featured from "../component/Featured";
import Subscribe from "../component/Subscribe";
import InstallApp from "../component/InstallApp";
export default function Home() {
    return (
        <>
        <section className="home">
          <div className="container">
               <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto ">
                            <div className="content">
                                <h1>Hello From  Zara Store </h1>
                                <p>loremLorem ipsum dolor sit amet, consectetur adipiscing elit. non satis magnam tribuunt inventoribus gratiam. </p>
                                <button className="btn-shop">
                                 <Link to="/products">
                                     Shop Now 
                                 </Link>
                                </button> 
                             </div>    
                                                   
                        </div>
               </div>
          </div>
        </section>
        <Services/>
        <Featured/>
        {/* Start Part Subscribe To NotFy! NEWS  */}
         <Subscribe/>
         <InstallApp/>
         
        </>
    )
}
