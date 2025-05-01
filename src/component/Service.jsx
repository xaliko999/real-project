import React from 'react'
import './Service.css'

function Service() {
    

    return (
        <div id='service'>


     <div className="mart" data-aos="flip-up">
  <div className='jj'>
  <h1>Our Service</h1>
  <div className="cards" data-aos="fade-zoom-in"

data-aos-easing="ease-in-back"
data-aos-delay="300"
data-aos-offset="0">

   {/*  */}
   <div className="biv">
     <img src="./ticket.png" alt="" />
     <h2>Free Ticket</h2><br />
     <h4>You can buy cheaper tickets with us.</h4>
   </div>
   {/*  */}
   <div className="biv">
     <img src="./hotel.png" alt="" />
     <h2>Hotel Booking</h2><br />
     <h4>you can book hotels in advance</h4>
   </div>
   {/*  */}
   <div className="biv">
     <img src="./plane.png" alt="" />
     <h2>Tour Plan</h2><br />
     <h4>Your travel plan will be prepared in advance.</h4>
   </div>
  </div>
  </div>
      {/*  */}
  
   
     </div>
    
        </div>
    )
}

export default Service;
