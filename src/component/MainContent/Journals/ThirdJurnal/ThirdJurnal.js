import React from "react";
import './style.scss';


const ThirdJurnal = () => {

    const title = "Create your own look"
    const desc = "Whether you want to create a new style in the Salon or directly at Home, here are the styling products to create the look you want."
    const btnText = "Discover me"


    return(
        <div className="thirdContainer" >
            <div className="thirdContainer__left" >
                <div style={{display : 'flex' , flexDirection : 'column' , direction: 'ltr'}} >
                    <span>{title}</span>
                    <p>{desc}</p>
                    <button>{btnText}</button>
                </div>
                
            </div>
            <div className="thirdContainer__right" >
                <img src="img/pinkgirl.jpg" />
            </div>
        </div>
    )
}


export default ThirdJurnal