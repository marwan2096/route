import React, { useState } from 'react';
import Style from './UpdatePassword.module.css'
import { Formik,useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Login from './../Login/Login';
import { Link } from 'react-router-dom';

export default function UpdatePassword() {
  let baseUrl="https://ecommerce.routemisr.com";
  const [error, setError] = useState('');

  let navigate=useNavigate();
  let valid =Yup.object({

    email:Yup.string().required("email requerid").email('enter email'),
    newPassword:Yup.string().required("password requerid").matches(/^[A-Z]{6}$/,'enter valid password'),

  })

  let Formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",

    },
  

  onSubmit:sendData,
  validationSchema: valid,
  }); 

  async  function sendData(values) {
    let {data}=await axios.put(`${baseUrl}/api/v1/auth/resetPassword`,values).catch(err => {
      setError(err.response.data.message)
    })

  
    if(data.token){
      navigate('/Login')
    }
  
  }
  return (
    <>
    
  
    <form onSubmit={ Formik.handleSubmit} action="">
    <label className='mb-1 mt-5' htmlFor="email">email :</label><br />
  <input value={ Formik.values.email} onFocus={ Formik.handleBlur}  onChange={ Formik.handleChange} type="text" className='form-control' type="email" name='email' id='email'/>
        
        { Formik.errors.email &&  Formik.touched.email? <div className='alert alert-danger h-25'>{ Formik.errors.email}</div>:null}


    <label className='mb-1 mt-5' htmlFor="newPassword">newPassword :</label><br />
  <input type="password" value={ Formik.values.newPassword} onFocus={ Formik.handleBlur}  onChange={ Formik.handleChange} type="text" className='form-control' name='newPassword' id='newPassword'/>
        
        { Formik.errors.newPassword &&  Formik.touched.newPassword? <div className='alert alert-danger h-25'>{ Formik.errors.newPassword}</div>:null}


  <button type='submit' disabled={!( Formik.dirty &&  Formik.isValid)} className='btn btn-success mt-4 mb-3'>Reset Password</button><br />
  {error? <div className="alert alert-danger mt-3" role="alert">{error}</div> :""}
  <Link to="/ForgetPassword" className="text-main ">
  <button className='btn btn-success'>  Reset code ....</button>
  
</Link>
    </form>
    </>
  )
}
