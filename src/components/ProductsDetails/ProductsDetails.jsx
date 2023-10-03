import React, { useEffect } from 'react';
import Style from './ProductsDetails.module.css'
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Slider from "react-slick";
import {Helmet} from "react-helmet";
export default function ProductsDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let params= useParams();

   function getOneProduct(id) {
  
     return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    
    
  } 
 let {data}=useQuery('productsDetails',()=>getOneProduct(params.id))
 console.log(data)




  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>ProductsDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <div className='details row align-items-center'>
    
              <div className="col-md-4 ">
              <Slider {...settings}>
              {data?.data.data.images.map((image)=>{
            

              return  <img src={image}  className="w-100" alt={data?.data.data.title} srcSet="" />


              }
              

              )}

               </Slider>
            {/* <img  className="w-100" src={data?.data.data.imageCover} alt={data?.data.data.title} srcSet='' /> */}
              </div>
              <div className="col-md-8">
          <h1 className='fw-bold h2 mb-3'>{data?.data.data.title} </h1>
          <p>{data?.data.data.description} </p>
          <h6 className='text-main fw-bold'>{data?.data.data.category.name}</h6>
          <h6 className='text-main fw-bold'>{data?.data.data.price} EGP</h6>
          <div className="content d-flex justify-content-between mt-2">
      <span className='fw-bold'> ratingsQuantity:  {data?.data.data.ratingsQuantity}</span>
      <span> <i className='fa fa-star rating-color'></i> {data?.data.data.ratingsAverage}</span>
  
    </div>
<div className='details'>
      <button className='btn bg-main text-white w-100 btn-sm mt-3'>add to Cart</button>
</div>
              </div>
            
    </div>
    </>
  )
}
