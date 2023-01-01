import React from 'react'
import Back from '../common/back/Back'
import "./contact.css";
function Contact() {
    const map="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124428.60034270282!2d77.59790079999999!3d12.946636799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666866288301!5m2!1sen!2sin";
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map} title="map"></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ut? Enim distinctio ipsum </p>
            <div className="items grid2">
                <div className="box">
                    <h4>ADDRESS:</h4>
                    <p>#1,bangalore:560001</p>
                </div>
                <div className="box">
                    <h4>Email:</h4>
                    <p>info@gmail.com</p>
                </div>
                <div className="box">
                    <h4>PHONE:</h4>
                    <p>+91 1231231234</p>
                </div>
                </div>
                <form action="">
                    <div className="flexSB">
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <textarea  cols="30" rows="5">
                        Create a message here...
                    </textarea>
                    <button className='primary-btn'>SEND MESSAGE</button>
                </form>
                <h3>Follow us here</h3>
                <span>facebook twitter instagram</span>
            
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
