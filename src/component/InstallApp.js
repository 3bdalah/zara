import React from 'react'
import zara from "../img/zara-app.png";
import {BsCloudDownload} from "react-icons/bs";
 const InstallApp = () => {
    return (
        <div className="install-app">
             <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-12">
                         <div className="box-img">
                             <img src={zara} alt="Zara App "/>
                         </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                         <div className="content">
                             <h2>Download the App</h2>
                             <p>Enjoy the latest full-featured devRant experience on the iOS and Android apps (dark theme included)</p>
                             <button className="btn-down">
                                    App Store <BsCloudDownload/>
                             </button>
                             <button className="btn-down">
                                    Google Play Store <BsCloudDownload/>
                             </button>
                             
                         </div>
                    </div>
                </div>

             </div>
        </div>
    )
}

export default InstallApp;