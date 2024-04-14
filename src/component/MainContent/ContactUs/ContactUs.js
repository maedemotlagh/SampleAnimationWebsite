import React from "react";
import  "./style.scss";
import { Radio } from "antd";


const AngleRight = () => <svg viewBox="0 0 13 11" fill="none" ><path d="M8.12 0.75L12.495 5.125V6.35L8.12 10.725L6.8775 9.5L9.7475 6.6125H0V4.8625H9.7475L6.86 1.975L8.12 0.75Z"></path></svg>


const ContactUs = () => {

    const title = "Subscribe to the newsletter"
    const policyText = "I accept the privacy policy and the terms and conditions"

    return(
        <div className="contactUs" >
            <p>{title}</p>
            <div className="contactUs__input" >
                <input placeholder="Email address"/>
                <div className="contactUs__input__svg" >
                    <AngleRight/>
                </div>
            </div>
            <div className="contactUs__radio" >
                <Radio>{policyText}</Radio>
            </div>
        </div>
    )
}


export default ContactUs