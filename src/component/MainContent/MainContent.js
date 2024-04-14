import React from "react";
import './mainStyle.scss';
import Features from "./Features/Features";
import Journals from "./Journals/Journals";
import ContactUs from "./ContactUs/ContactUs";


const MainContent = () => {
    return(
        <div className="mainContainer" >
            <Features/>
            <Journals/>
            <ContactUs/>
        </div>
    )
}

export default MainContent