import React, { forwardRef } from "react";
import './Footer.scss'
import logoZalo from '../assets/zalo_logo.png'
import logoFacebook from '../assets/facebook_logo.png'

const Footer = forwardRef((props, ref) => {
    return(
        <div className="footer-wrapper" ref={ref}>
            <div className="support-wrapper">
                <h2 className="support-head">Support</h2>
                <div className="support-wrap">
                    <div className="phone-number-wrap">
                        <div className="phone-number-letter">
                            Phone number:
                        </div>
                        <a className="phone-number">
                            0965323264
                        </a>
                    </div>
                </div>
            </div>
            <div className="aboutus-wrapper">
                <h2 className="aboutus-head">About US</h2>
                <div className="aboutus-wrap">
                    <div className="introduciton-wrap">
                        <div className="introduction">Introduction</div>
                    </div>
                </div>
            </div>
            <div className="contactus-wrapper">
                <h2 className="contactus-head">Contact US</h2>
                <div className="contact-zalo-wrap">
                    <div className="zalo">
                        <img src={logoZalo} alt="logo-zalo"/>
                    </div>
                </div>
                <div className="contact-facebook-wrap">
                    <div className="facebook">
                        <img src={logoFacebook} alt="logo-facebook"/>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Footer;