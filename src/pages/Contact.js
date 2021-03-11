import React from 'react';
import Title from "../component/Title";
const Contact = () => {   
   
    return (
        <>
        <Title title={"Contact"}/>
          <section className=" contact" >
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-4-3">
                    <h2 className="title"><strong> Contact </strong> </h2>
                <form className="mt-5">
                
                <div className="form-group">
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="mail"
                    name="mail"
                    className="form-control"
                    placeholder="Mail "
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    required
                />
                </div>
                <div className="form">
                <textarea
                    name="message"
                    className="form-control"
                    rows="10"
                    placeholder=" Message "
                    required
                />
                </div>
                <div className="form-group mt-3">
                    <input
                        type="submit"
                        value="Send"
                        className="form-control bg-primary text-white"
                    
                    />
                </div>
                </form>
                </div>

            </div>
          </section>
        </>
      
  )
  
}
export default Contact; 