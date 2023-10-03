import React, { useState } from 'react';
import Style from './ForgetPassword.module.css'
import { Formik,useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';
import UpdatePassword from './../UpdatePassword/UpdatePassword';
export default function ForgetPassword() {
  let baseUrl="https://ecommerce.routemisr.com";
 const [code, setcode] = useState("");
let navigate=useNavigate();
async  function SendCode(values) {
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/forgotPasswords`,values)

    console.log(data.statusMsg);
    setcode(data.statusMsg);
  }
  async function  VerifyCode(values) {
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/verifyResetCode`,values)
    console.log(data)
    if(data.status==='Success'){
      navigate('/UpdatePassword')
    }
    
  }




  let valid =Yup.object({

    email:Yup.string().required("email requerid").email('enter email'),
    // password:Yup.string().required("password requerid").matches(/^[A-Z]{6}$/,'enter valid password'),

  })
  let CodeValid =Yup.object({

    resetCode:Yup.number('enter Number').required(" number requerid"),
    // password:Yup.string().required("password requerid").matches(/^[A-Z]{6}$/,'enter valid password'),

  })
  let Formik = useFormik({
    initialValues: {
      email: "",
      // password: "",

    },
  

  onSubmit:SendCode,
  validationSchema: valid,
  });  

  let VerifyFormik = useFormik({
    initialValues: {
      resetCode: "",
      // password: "",

    },
  

  onSubmit:VerifyCode,
  validationSchema: CodeValid,
  });
  return (
    <>
  {code === 'success' ? (
    <form onSubmit={VerifyFormik.handleSubmit} action="">
    <label className='mb-1 mt-5' htmlFor="resetCode">resetCode :</label><br />
  <input value={VerifyFormik.values.resetCode} onFocus={VerifyFormik.handleBlur}  onChange={VerifyFormik.handleChange} type="text" className='form-control' name='resetCode' id='resetCode'/>
        
        {VerifyFormik.errors.resetCode && VerifyFormik.touched.resetCode? <div className='alert alert-danger h-25'>{VerifyFormik.errors.resetCode}</div>:null}

  <button disabled={!(VerifyFormik.dirty && VerifyFormik.isValid)} className='btn btn-success mt-4'>send code</button>


    </form>
) : (
  <form onSubmit={Formik.handleSubmit} action="">
    <label className='mb-1 mt-5' htmlFor="email">Email :</label><br />
  <input value={Formik.values.email} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="email" className='form-control' name='email'id='email'/>
        
        {Formik.errors.email && Formik.touched.email? <div className='alert alert-danger h-25'>{Formik.errors.email}</div>:null}



  <button disabled={!(Formik.dirty && Formik.isValid)} className='btn btn-success mt-4'>send code</button>


    </form>

)}
    





    </>
  )
}
