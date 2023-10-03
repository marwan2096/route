

import React, { useContext, useState } from 'react';

import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Audio } from  'react-loader-spinner';
import { useNavigate } from 'react-router';
import { CartContext } from '../context/CartContext';

export default function Order() {
  let {onlinePayment,GetCart}= useContext(CartContext);
  let baseUrl="https://ecommerce.routemisr.com";
  async function OnlinePay(values){
    let {data}=await GetCart()
   let resp=await  onlinePayment(data.data._id,values)
   console.log(resp.data.session.url)
   window.location.href=resp.data.session.url;
  console.log(data._id)

  }
let Formik = useFormik({
  initialValues: {
    details: "",
    phone: "",
    city: "",
  },
  onSubmit:OnlinePay
});

  return (
    <>
    <form  onSubmit={Formik.handleSubmit} className='mx-auto w-75 my-5 mt-5 p-5'>
       <div className='mb-3 mt-3'>
          <label className='mb-1 mt-2' htmlFor="details">details :</label>
          {Formik.errors.details && Formik.touched.details? <div className='alert alert-danger'>{Formik.errors.details}</div>:null}
          <input  value={Formik.values.details} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="text" className='form-control' name='details' id='details'/>
         </div>
         <div className='mb-3'>
          <label className='mb-1 mt-2' htmlFor="phone">phone :</label>
          {Formik.errors.phone && Formik.touched.phone? <div className='alert alert-danger'>{Formik.errors.phone}</div>:null}
          <input  value={Formik.values.phone} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="text" className='form-control' name='phone' id='phone'/>
         </div>
         <div className='mb-3'>
          <label className='mb-1 mt-2' htmlFor="city">city :</label>
          {Formik.errors.city && Formik.touched.city? <div className='alert alert-danger'>{Formik.errors.city}</div>:null}
          <input  value={Formik.values.city} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="text" className='form-control' name='city' id='city'/>
         </div>
         <button  className='btn btn-outline-success mx-5 mt-5 '>Pay</button>
    </form>
    </>
  )
}
