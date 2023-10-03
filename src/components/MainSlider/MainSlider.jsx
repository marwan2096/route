import React from 'react';

import Slider from "react-slick";

import  slide1 from  './../../assets/slider-2.jpeg';
import  slide2 from  './../../assets/slider-image-2.jpeg';
import  slide3 from  './../../assets/slider-image-3.jpeg';


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
  <div className="row my-5 gx-0 ">
  <div className="col-md-9">
  <Slider {...settings}>
            <img height={400}className='w-100' src={slide1} alt='Slide 1' />
            <img height={400}className='w-100' src={slide2} alt='Slide 1' />
            <img height={400} className='w-100' src={slide3} alt='Slide 1' />
  
        </Slider>
  </div>
   <div className="col-md-2">
   <img height={200} className='w-100' src={slide2} alt='Slide 1' />
    <img height={200} className='w-100' src={slide3} alt='Slide 1' />
  
   </div>

  </div>
      
  
  );
}