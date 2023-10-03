import React from 'react';
import Style from './NotFound.module.css'
import  error from'../../assets/error.svg';

export default function NotFound() {
  return (
    <>
<div className='text-center py-5'>
      <img  src={error} alt="not found"  srcSet="" />
</div>
    </>
  )
}
