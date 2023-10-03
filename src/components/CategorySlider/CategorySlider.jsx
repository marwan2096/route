import React from 'react';
import Style from './CategorySlider.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from "react-slick";

export default function CategorySlider() {
  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };
  let baseUrl="https://ecommerce.routemisr.com";

  function getCategory(){

  return  axios.get(`${baseUrl}/api/v1/categories`);
    
    
    }
  
  let {data}=useQuery('category',getCategory)
  return (
    <>
      <Slider className='py-4' {...settings}>
  {data?.data.data.map((category) => (
    <div key={category._id}>
      <img height={200} className='w-100' src={category.image} alt={category.name} srcSet='' />
      <span className='text-main text-center d-block fw-bold font-sm mt-2'>{category.name}</span>
    </div>
  ))}
</Slider>
  
    </>
  )
}
