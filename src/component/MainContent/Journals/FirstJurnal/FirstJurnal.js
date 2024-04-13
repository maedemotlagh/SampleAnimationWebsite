import React from "react";
import './style.scss'

const timeSvg = () => <svg version="1.1"  x="0px" y="0px" viewBox="0 0 172 172" ><circle class="st0" cx="85.6" cy="85.6" r="79.9"></circle><circle class="st1" cx="85.6" cy="85.6" r="45.4"></circle><path class="st1" d="M69.6,119.9L69.6,119.9c2.3,1.3,3.2,4.2,1.9,6.6l-4.7,8.4c-1.3,2.3-4.2,3.2-6.6,1.9l0,0 c-2.3-1.3-3.2-4.2-1.9-6.6l4.7-8.4C64.4,119.5,67.3,118.6,69.6,119.9z"></path><path class="st1" d="M104.1,119.4L104.1,119.4c2.3-1.4,5.2-0.6,6.6,1.7l4.9,8.3c1.4,2.3,0.6,5.2-1.7,6.6l0,0 c-2.3,1.4-5.2,0.6-6.6-1.7l-4.9-8.3C101,123.7,101.8,120.8,104.1,119.4z"></path><circle class="st2" cx="85.6" cy="85.6" r="37.2"></circle><path class="st1" d="M85.4,70.5L85.4,70.5c2.3,0,4.2,1.8,4.2,4.1l0.3,17.9c0,2.3-1.8,4.2-4.1,4.2l0,0c-2.3,0-4.2-1.8-4.2-4.1 l-0.3-17.9C81.3,72.4,83.1,70.5,85.4,70.5z"></path><path class="st1" d="M102.2,92.2L102.2,92.2c0,2.3-1.8,4.2-4.1,4.2l-12.4,0.2c-2.3,0-4.2-1.8-4.2-4.1l0,0c0-2.3,1.8-4.2,4.1-4.2 L98,88.2C100.3,88.1,102.2,90,102.2,92.2z"></path><circle class="st1" cx="57.4" cy="44.7" r="11"></circle><circle class="st1" cx="111.1" cy="43.9" r="11"></circle></svg>


const FirstJurnal = () =>{

    const title = "Shorter laying time"
    const desc = "With the 10 minutes only Timeless color cream, you will get the color you have always wanted in half the time of a traditional hair coloring while providing a perfect coverage and shine."
    const btnText = "Discover more"


    return(
        <div className="firstContainer" >
            <div className="firstContainer__contentText" >
                <span className="firstContainer__contentText__title" >{title}</span>
                <p>{desc}</p>
                <button>{btnText}</button>
            </div>
            <div className="firstContainer__img" >
                <img src="img/sikhaBlog.jpg" />
                <timeSvg/>
            </div>
        </div>
    )
}

export default FirstJurnal