import React from 'react'

export default function Subscribe() {
    return (
        <section className="subscribe">
             <div className="container">
                  <h2 className="text-center title">News Notfy! </h2>
                 <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto">
                       <form>
                          <div className="input-group">
             
                              <input type="mail" value="" name="mail" placeholder="Subscribe " />
                              <button  className="btn-subscribe" type="submit">
                                  Send
                              </button>

                          </div>
                          
                       </form>
                    </div>
                   
                 </div>
             </div>
        </section>
    )
}
