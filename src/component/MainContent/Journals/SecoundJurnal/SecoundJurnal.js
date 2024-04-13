import React from "react";
import './style.scss';


const SecoundJurnal = () => {

    const title = "Hair care, nourishment and reconstruction"
    const desc = "A complete line of shampoo and mask for cleansing, nourishing and restructuring the hair fiber without changing its natural balance."
    const btnText = "Discover me"


    return(
        <div className="secondContainer" >
            <div className="secondContainer__left" >
                <div style={{display : 'flex' , flexDirection : 'column'}} >
                    <span>{title}</span>
                    <p>{desc}</p>
                    <button>{btnText}</button>
                </div>
                
            </div>
            <div className="secondContainer__right" >
                <img src="img/bluegirl.jpg" />
            </div>
        </div>
    )
}


export default SecoundJurnal