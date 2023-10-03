import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Slider from "react-slick";
import {Helmet} from "react-helmet"

export default function Category() {

  function getOneCategory() {
  
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
   
   
 } 
let {data}=useQuery('Category',()=>getOneCategory())
console.log(data)








  return (
    <>
    
    {data?.data.data.map((category) => (
  <div key={category.id} className=" mt-5 d-flex justify-content-center align-items-center">
    <div className="cursor-pointer py-3 px-2 mb-3">
      {/* Your content */}
      <div className='mt-3 text-center'>
        <h3 className='text-main text-capitalize'>{category.slug}</h3>
        <img height={200} width={200} className='w-100 ' src={category.image} alt={category.title} />
        {/* Other content here */}
      </div>
    </div>
  </div>
))}




 

 


  
    </>
    
  )
  

  }