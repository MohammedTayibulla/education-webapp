import React from 'react'
import { team } from '../dummydata'
import "./team.css"
function TeamCard() {
  return (
    <>
      {team.map((val)=>(
        <div className="items shadow">
            <div className="img">
                <img src={val.cover} alt="" />
            <div className="overlay">
            <i className="fa-brands fa-youtube icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-brands fa-facebook icon"></i>
          </div>
          </div>
                <div className="details">
                    <h2>{val.name}</h2>
                    <p>{val.work}</p>
                
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
