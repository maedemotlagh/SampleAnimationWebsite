import React from "react";
import './style.scss'



const images = [
    {
        address : 'img/Bunny.png'
    },
    {
        address : 'img/NATURAL.png'
    },
    {
        address : 'img/SOLAR.png'
    },
    {
        address : 'img/VEGAN.png'
    },
]

const BottomContent = () => {

    const BtnText = 'Discover more'

    return(
        <div className="bottomContent" >
            <div className="mainContentBottom">
                {images.map((item) => 
                    <img src={item.address} />
                )
                }
            </div>
            <button>{BtnText}</button>
        </div>

    )
}


export default BottomContent