
import React, { useContext, useState } from 'react';
import { Formik,useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Audio } from  'react-loader-spinner'
import Style from './Login.module.css'
import { useNavigate } from 'react-router';
import Home from './../Home/Home';
import { Link } from 'react-router-dom';
import Register from './../Register/Register';
import { UserContext } from '../context/UserContext';



export default function Login() {
  let navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setError] = useState(null);
  // const [token, setToken] = useState(null);
let{token,setToken}=useContext(UserContext)


     let baseUrl="https://ecommerce.routemisr.com";
    let valid =Yup.object({

      email:Yup.string().required("email requerid").email('enter email'),
      password:Yup.string().required("password requerid").matches(/^[A-Z]{6}$/,'enter valid password'),

    })
  
  // mmkn kza form ashn kda b3ml variable
    let Formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      
    
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
        let {data}=await axios.post(`${baseUrl}/api/v1/auth/signin`,values).catch((err)=>{
          console.log(err)
          setError(err.response.data.message)
          console.log(err.response.data.message)
          setIsLoading(false);
    
        });
        if(data.message=="success"){
          console.log(data)
          setIsLoading(false);
          navigate('/')
          localStorage.setItem('userToken',data.token)
          setToken(localStorage.getItem('userToken'))
        }
        }
  

    return (
      <>
  
    <div className='py-5'>
  
    {/* // lw fe zraran */}
        <form onSubmit={Formik.handleSubmit} className='container' >
        {errorMsg==null ? "" :<div className="alert alert-danger" role="alert">{errorMsg}</div>
   }
        
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
      
{/*          
         {token} */}
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
            'Login' // Show 'Register' text when not loading
          )}
              </button>

  <Link to="/Register" className="text-main">
  Create Account
</Link><br />
  <Link to="/ForgetPassword" className="text-main">
  ForgetPassword
</Link>
        </form>
    </div>
      </>
    )
  }
  