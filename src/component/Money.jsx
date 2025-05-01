import React from 'react'
import './Money.css'

export default function Money() {
    

    return (
        <>
           <div className="container" >
            <h1>We always try to give you 
            the best service</h1>
            <p>We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority</p><br />
            <div className="u" data-aos="zoom-out-up"  data-aos-duration="500">
                <div className="mp">
                    <img src="./home.png" alt="" />
                    <h3>15+</h3>
                    <p>Years of 
                    Experience</p>
                </div>
                <div className="mp">
                    <img src="./siystem.png" alt="" />
                    <h3>15k+</h3>
                    <p>Happy 
                    Travellers</p>
                </div>
                <div className="mp">
                    <img src="./carbon.png" alt="" />
                    <h3>650+</h3>
                    <p>Places Visited</p>
                </div>
                <div className="mp">
                    <img src="./history.png" alt="" />
                    <h3>2k+</h3>
                    <p>Travel History</p>
                </div>
            </div>
            </div> 
        </>
    )
}
