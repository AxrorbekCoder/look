import React from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaGithub, FaTelegramPlane    } from "react-icons/fa";
const Footer =() => {
    return (
        <footer class="footer-distributed">

        <div class="footer-left">

            <h3>A.SH CODERS <span>IT GROUP</span></h3>

            <p class="footer-links">
                <a href="#" class="link-1">Home</a>
                
                <a href="#">Blog</a>
            
                <a href="#">Pricing</a>
            
                <a href="#">About</a>
                
                <a href="#">Faq</a>
                
                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">© 2015 All rights reserved.</p>
        </div>

        <div class="footer-center">

            <div>
                   <FaMapMarkerAlt  className='icon_one map-marker'/>
                <p><span>170100 Republic of Uzbekistan</span>cty. Andijon, st. A.Fitrat</p>
            </div>

            <div>
                  <FaPhoneAlt className='icon_one phone'/>
                <p>+998 99 123 45 67</p>
            </div>

            <div>
                     <FaEnvelope className='icon_one envelope'/>
                <p><a href="mailto:support@company.com">support@a.sh.coders.com</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>About the company</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div class="footer-icons">

                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="https://t.me/ash_coders"><FaTelegramPlane /></a>
                <a href="https://github.com/AxrorbekCoder"><FaGithub /></a>

            </div>

        </div>

    </footer>
    );
};

export default Footer;