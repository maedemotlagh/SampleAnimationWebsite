import React, { useEffect } from "react";
import './style.scss'
import { useState } from "react";
import BottomContent from "./BottomContent/BottomContent";



const EmojSvg = () => <svg version="1.1"  x="0px" y="0px" viewBox="0 0 136 136"  ><circle class="st0" cx="68" cy="68" r="66.2"></circle><path class="st1" d="M108,62.2c3.8,24.9-5,42.2-27.2,49.3c-22.2,7.2-38.8-1.8-50.4-24.3"></path><ellipse transform="matrix(0.9515 -0.3076 0.3076 0.9515 -13.5691 15.3156)" class="st2" cx="41.8" cy="50.7" rx="7.4" ry="11"></ellipse><ellipse transform="matrix(0.9515 -0.3076 0.3076 0.9515 -8.2245 25.864)" class="st2" cx="77.9" cy="39" rx="7.4" ry="11"></ellipse><path class="st1" d="M21.7,88.1l1-0.1c5.5-0.3,10.9-2.1,15.5-5.2l0.4-0.3"></path><path class="st1" d="M98.6,63.2l1-0.1c5.5-0.3,10.9-2.1,15.5-5.2l0.4-0.3"></path></svg>


const Features = () => {

    const [movepointer , setMovepointer] = useState(0)
    const [direction , setDirection] = useState('center') 

    useEffect(() => {
        const myComponent = document.querySelector('#featuresContainer')
        myComponent.addEventListener("mousemove", handleComponentMouseMove);
    },[])

    let previousMouseX = 0

    const handleComponentMouseMove = (e) => {
        const currentMouseX = e.clientX;
        
        // Calculate the difference in X-axis coordinates
        const deltaX = currentMouseX - previousMouseX;

        if (deltaX > 0) {
            setTimeout(() => {
                setMovepointer(currentMouseX)
                setDirection('right')
            },700)
        } else if (deltaX < 0) {
            setTimeout(() => {
                setMovepointer(currentMouseX)
                setDirection('left')
            },700)
        }
        // Update the previous mouse position
        previousMouseX = currentMouseX;
    }

    

    const mainTitle = "ETHICAL AND SUSTAINABLE"
    const mainDesc = "Vegan and cruelty free certified products to respect the environment and nature , obtained with energy produced from sources renewable." 
    return(
        <>
            <div id="featuresContainer" className="features" >
                <div className="features__imgBox1" style={{left : direction === "left" ?  movepointer : direction === "center" ? '215px' : movepointer-1}} >  
                    <EmojSvg/>
                    <img src="img/curlyhaire.jpg" />
                </div>
                <div className="features__text" >
                    <h1>{mainTitle}</h1>
                    <p>{mainDesc}</p>
                </div>
                <div className="features__imgBox2" style={{right : direction === "right" ? movepointer : direction === "center" ? "155px" : movepointer-1}}>
                    <img src="img/bargsabz.jpg"/>
                    <img src="img/people.jpg"/>
                </div>

            </div>

            <BottomContent/>
        </>
        
    )
}

export default Features