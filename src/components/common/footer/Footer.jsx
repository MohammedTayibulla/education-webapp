import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>online education & learning</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, adipisci?</p>
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-youtube icon"></i>
            </div>
            <div className="box link">
                <h3>Quick links</h3>
                <ul>
                <li>Home</li>
                <li>All Courses</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Team</li>
                </ul>
            </div>
            <div className="box last">
                <h3>Have a Questions ?</h3>
                <ul>
                <li><i className="fa fa-map"></i>123, fake street,bangalore-01</li>
                <li><i className="fa fa-phone-alt"></i>+91 123 123 1234</li>
                <li><i className="fa fa-paper-plane"></i>info@gmail.com</li>
                </ul>
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>Copyright @2022 All rights reserved </p>
        <p> This template is made with <i className="fa fa-heart"></i> in India by Mohammed Tayibulla</p>
    </div>
    </>
  )
}

export default Footer
