import React from 'react'
import {useParams} from "react-router-dom";
 const Title = ({title}) => {
 
    return (
        <>
          <section className="title-head">
              <div className="container">
                    <h2 className="title">/ {title}</h2>
              </div>
          </section>   
        </>
    )
}
export default Title;