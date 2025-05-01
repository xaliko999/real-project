import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter';


function Home() {
    return (
        <div className='boxx'>
          
   <div className="cardd">
       <div className="leftt">
  


<h1  data-aos="fade-up" data-aos-duration="800">Go to Travel</h1>
<h3  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700" >
{/* <Typewriter          
        words={[
             ` ${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium sequi, animi delectus, magnam sed distinctio porro praesentium maxime ratione consectetur."}`
            ]}
            autoStart={true}
            loop={true}
            /> */}
   
</h3>



          

        </div>
        {/*  */}
        <div className="slidee" data-aos="zoom-out-up" data-aos-duration="1000">
  <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide ><img src="./InHis.jpg" alt="" className='solid'/></SwiperSlide>
        <SwiperSlide ><img src="./id.jpg" alt="" className='solid'/></SwiperSlide>
        <SwiperSlide ><img src="./Mastering.jpg" alt="" className='solid'/></SwiperSlide>
        <SwiperSlide ><img src="./amazing.jpg" alt=""  className='solid'/></SwiperSlide>
        <SwiperSlide ><img src="./h.jpg" alt=""  className='solid'/></SwiperSlide>

      </Swiper>
  </div>

        </div>
  
       </div>
    )
}

export default Home;