import React from "react";
import './mainStyle.scss';
import Features from "./Features/Features";
import Journals from "./Journals/Journals";


const MainContent = () => {
    return(
        <div className="mainContainer" >
            <Features/>
            <Journals/>
        </div>
    )
}

export default MainContent