import React from 'react'
import Title from '../common/title/Title'
import Awrapper from './Awrapper'
import "./about.css";
import { homeAbout} from "../dummydata";

function AboutCard() {
    return (
    <div>
     <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/about.webp" alt="about us" />
            </div>
            <div className="right row">
                <Title subtitle="LEARN ANYTHING" title="Benefits about online Learning"/>
                <div className="items">
                    {homeAbout.map((val)=>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                        </div>
                    )
)}
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default AboutCard
   