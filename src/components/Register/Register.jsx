import React, { useState } from 'react';
import Style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Audio } from  'react-loader-spinner';
import { useNavigate } from 'react-router';
import Login from './../Login/Login';
// manual 
// const [userData, setUserData] = useState({
//     name: "",
//     password:"",
//     rePassword:"",
//     email:"",
//     phone:"",
// });
// function changeName(e){
//   // 5lethm nfs address
//   let NewUserData={...userData}
//   NewUserData.name=e.target.value;
//   setUserData(NewUserData)
//   console.log(NewUserData)
   
// zwd on change w ht function fel input
// // }
//   validate:(x)=>{
//     const errors = {};
 
//     if (!x.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(x.email)) {
//       errors.email = 'Invalid email address';
//     }
//    return errors;

//   },

export default function Register() {
let navigate=useNavigate();
const [isLoading, setIsLoading] = useState(false);
const [errorMsg, setError] = useState(null);





  let baseUrl="https://ecommerce.routemisr.com";
  let valid =Yup.object({
    name:Yup.string().required("name requerid").min(3,'min 3').max(20,'max 20'),
    email:Yup.string().required("email requerid").email('enter email'),
    password:Yup.string().required("password requerid").matches(/^[A-Z]{6}$/,'enter valid password'),
    rePassword:Yup.string().required("confirm pass").oneOf([Yup.ref('password')],'enter matched pass'),
    phone:Yup.number().required('phone requred').min(10,'min 10')
  })


// mmkn kza form ashn kda b3ml variable
  let Formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      rePassword: "",
      email: "",
      phone: "",
    },
  //  onSubmit:(x)=>{
  //  console.log(x)

  //  }

  onSubmit:SubmitRegister,
  validationSchema: valid,
  });

  async function SubmitRegister(values){
  console.log(values)
  setIsLoading(true);
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/signup`,values).catch((err)=>{
      console.log(err)
      
      
      setError(err.response.data.message)
      console.log(err.response.data.message)
      setIsLoading(false);

    });
    if(data.message=="success"){
      console.log(data)
      setIsLoading(false);
      navigate('/Login')
    }
    }



  return (
    <>

  <div className='mx-auto w-75 my-5 container'>
<h4 className='text-main fw-bold mb-3'>Register Now:</h4>

  {/* // lw fe zraran */}
      <form onSubmit={Formik.handleSubmit}  >
    
    {errorMsg==null ? "" :<div className="alert alert-danger" role="alert">{errorMsg}</div>
   }
       <div className='mb-3'>
        <label className='mb-1'htmlFor="name">Name :</label>
        
        <input value={Formik.values.name} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="text" className='form-control' name='name'id='name'/>
  
        {Formik.errors.name && Formik.touched.name? <div className='alert alert-danger'>{Formik.errors.name}</div>:null}
       </div>
       <div className='mb-3'>
        <label className='mb-1'htmlFor="email">Email :</label>
      
        <input value={Formik.values.email} onFocus={Formik.handleBlur}  onChange={Formik.handleChange} type="email" className='form-control' name='email'id='email'/>
        
        {Formik.errors.email && Formik.touched.email? <div className='alert alert-danger h-25'>{Formik.errors.email}</div>:null}
       </div>
       <div className='mb-3'>
        <label htmlFor="password">Password :</label>
        {Formik.errors.password && Formik.touched.password? <div className='alert alert-danger h-25'>{Formik.errors.password}</div>:null}
        <input value={Formik.values.password} onFocus={Formik.handleBlur}   onChange={Formik.handleChange} type="password" className='form-control' name='password'id='password'/>
       </div>
       <div className='mb-3'>
        <label className='mb-1'htmlFor="rePassword">RePassword :</label>
        {Formik.errors.rePassword && Formik.touched.rePassword? <div className='alert alert-danger'>{Formik.errors.rePassword}</div>:null}
        <input  value={Formik.values.rePassword} onFocus={Formik.handleBlur}  onChange={Formik.handleChange}type="password" className='form-control' name='rePassword'id='rePassword'/>
       </div>
       <div className='mb-3'>
        <label className='mb-1' htmlFor="phone">Phone :</label>
        {Formik.errors.phone && Formik.touched.phone? <div className='alert alert-danger'>{Formik.errors.phone}</div>:null}
        <input value={Formik.values.phone}  onFocus={Formik.handleBlur} onChange={Formik.handleChange}type="tel" className='form-control' name="phone"id="phone"/>
        
       </div>
       
       {/* <button type='submit' onClick={Formik.handleSubmit} className='btn bg-success ms-auto d-block my-2 '>Register</button> */}
       <button
          type='submit'
          className='btn bg-success ms-auto d-block my-2 text-light'
          disabled={!(Formik.dirty && Formik.isValid) || isLoading}
                  >
                    {isLoading ? (
                      <Audio
              height = "80"
              width = "80"
              radius = "9"
              color = 'green'
              ariaLabel = 'three-dots-loading'     
              wrapperStyle
              wrapperClass
  />// Show the spinner if isLoading is true
          ) : (
            'Register' // Show 'Register' text when not loading
          )}
              </button>
            </form>
        </div>
    </>
  )
}
