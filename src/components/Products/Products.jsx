import React, { useEffect, useState } from 'react';
import Style from './Products.module.css'
import  axios from 'axios';
import { useQuery } from 'react-query';

export default function Products() {
  const [products, setProducts] = useState([]);
  let baseUrl="https://ecommerce.routemisr.com";
//   async function getProducts(){
//   let{data}=await axios.get(`${baseUrl}/api/v1/products`)
//   console.log(data)
// setProducts(data.data)
//   console.log(setProducts(data.data))
//   }
// useEffect(() => {
//   getProducts()
// }, []);
   async function getProducts(){
  return  await axios.get(`${baseUrl}/api/v1/products`)
//   console.log(data)
// setProducts(data.data)
//   console.log(setProducts(data.data))
  }
  let {data}= useQuery(getProducts)
return (
  <>
    {products.map((product) => {
      return (
        <div key={product.id}>{product.title}</div>
      );
    })}
  </>
);

  }


