import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Slider from "react-slick";
import {Helmet} from "react-helmet";
export default function BrandsDetails() {

  let params= useParams();
  console.log(params)

   function getOneBrand(id) {
  
     return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    
    
  } 
 let {data}=useQuery('Brands',()=>getOneBrand(params._id))
 console.log(data)




  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <div className='details row align-items-center'>
    
              

          
            {/* <img  className="w-100" src={data?.data.data.imageCover} alt={data?.data.data.title} srcSet='' /> */}
              </div>
              <div className="col-md-8">
          <h1 className='fw-bold h2 mb-3 mt-5'>{data?.data.data.name} </h1>
          <img width={100} className ='w-100' src={data?.data.data.image} alt={data?.data.data.name} srcSet="" />
      

  
    </div>

          

    </>
  )
}
