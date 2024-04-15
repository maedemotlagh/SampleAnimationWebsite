import React, { useEffect, useState } from "react";
import './style.scss';


const SecoundJurnal = () => {

    const title = "Hair care, nourishment and reconstruction"
    const desc = "A complete line of shampoo and mask for cleansing, nourishing and restructuring the hair fiber without changing its natural balance."
    const btnText = "Discover me"

    const [animate , setAnimate] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const componentImg = document.getElementById('imgJurnalTwo');
          if (componentImg) {
            const rect = componentImg.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentTitleTwo = document.getElementById('titleJurnalTwo');
          if (componentTitleTwo) {
            const rect = componentTitleTwo.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentDescTwo = document.getElementById('descJurnalTwo');
          if (componentDescTwo) {
            const rect = componentDescTwo.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight;
            if(isVisible && !animate){
                setAnimate(isVisible);
            }
          }

          const componentBtnTwo = document.getElementById('btnJurnalTwo');
          if (componentBtnTwo) {
            const rect = componentBtnTwo.getBoundingClientRect();
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
        <div className="secondContainer" >
            <div className="secondContainer__left" >
                <div style={{display : 'flex' , flexDirection : 'column'}} >
                    <span id="titleJurnalTwo" className={animate && 'animateTitleTwo'} >{title}</span>
                    <p id="descJurnalTwo" className={animate && 'animateDescTwo'} >{desc}</p>
                    <button id="btnJurnalTwo" className={animate && 'animateBtnTwo'}>{btnText}</button>
                </div>
                
            </div>
            <div id="imgJurnalTwo" className={`secondContainer__right ${animate && 'animateImgTwo'}`} >
                <img src="img/bluegirl.jpg" />
            </div>
        </div>
    )
}


export default SecoundJurnal