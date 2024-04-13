import React from "react";
import './style.scss';
import FirstJurnal from "./FirstJurnal/FirstJurnal";
import SecoundJurnal from "./SecoundJurnal/SecoundJurnal";
import ThirdJurnal from "./ThirdJurnal/ThirdJurnal";



const Journals = () => {
    return(
        <div className="jurnalContainer">
            <FirstJurnal/>
            <SecoundJurnal/>
            <ThirdJurnal/>
        </div>
    )
}


export default Journals