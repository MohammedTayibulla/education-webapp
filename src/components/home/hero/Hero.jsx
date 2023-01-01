import React from 'react'
import "./hero.css";
import Title from '../../common/title/Title';
function Hero() {
  return (
    <>
   <section className="hero">
    <div className="container">
        <div className="row">
          <Title subtitle="WELCOME TO TAYIB ACADEMY" title="BEST ONLINE LEARNING CENTRE"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati quo rem adipisci, earum aut quae harum maiores non officia aspernatur, tempore repudiandae voluptate similique in! Aliquid explicabo expedita nemo!</p>
        <div className="button">
            <button className="primary-btn">GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i></button>
            <button>VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i></button>
         </div>

  </div>
    </div>
   </section>
      <div className="marigin"></div>
    </>
  )
}

export default Hero
