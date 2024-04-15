import React, { useEffect, useState } from "react";
import './style.scss';


const ThirdJurnal = () => {

    const title = "Create your own look"
    const desc = "Whether you want to create a new style in the Salon or directly at Home, here are the styling products to create the look you want."
    const btnText = "Discover me"

    const [animate , setAnimate] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const componentImgThree = document.getElementById('imgAnimateThree');
          if (componentImgThree) {
            const rect = componentImgThree.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentTitleThree = document.getElementById('animateTitleThree');
          if (componentTitleThree) {
            const rect = componentTitleThree.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentDescThree = document.getElementById('animateDescThree');
          if (componentDescThree) {
            const rect = componentDescThree.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentBtnThree = document.getElementById('animateBtnThree');
          if (componentBtnThree) {
            const rect = componentBtnThree.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className="thirdContainer" >
            <div className="thirdContainer__left" >
                <div style={{display : 'flex' , flexDirection : 'column' , direction: 'ltr'}} >
                    <span id="animateTitleThree" className={animate && "activeTitleThree"} >{title}</span>
                    <p id="animateDescThree"  className={animate && "activeDescThree"}>{desc}</p>
                    <button id="animateBtnThree"  className={animate && "activeBtnThree"}>{btnText}</button>
                </div>
                
            </div>
            <div id="imgAnimateThree" className={`thirdContainer__right ${animate && "animateImgThree"}`} >
                <img src="img/pinkgirl.jpg" />
            </div>
        </div>
    )
}


export default ThirdJurnal