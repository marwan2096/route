import React, { useContext, useState } from 'react';



import { useEffect } from 'react';
import { WishContext } from '../context/WishContext';

export default function Cart() {
  let {GetWish,RemoveWish,RemoveALL,WishCount,setWishCount}= useContext(WishContext);
  const [Wish, setWish] = useState(null);

  async function RemoveALLWish(){

    let {data} =await RemoveALL();
    setWish(data)
    }
  async function RemoveOneWish(id){

    let {data} =await RemoveWish(id);
    setWish(data)
    }
    
  
  async function GetAllWishes(){
    let {data} =await GetWish();
    setWish(data)
    setWishCount(data.count)
    console.log(data)
    }
  
useEffect(() => {
  GetAllWishes()
  
}, []);


  return (
    <>
    {Wish?<div className=" my-3 w-75 mx-auto p-3 bg-main-light">
<div className='mb-4'>
<div className='d-flex justify-content-between'>
      <h3 className='text-main fw-bold mb-4 mt-5 mx-4'>WishList</h3>
  

</div>
    {/* <h4 className='h6 text-success fw-bold mx-4' >Cart Item :{cart.numOfCartItems}</h4>
    <h4 className='h6 text-success fw-bold mx-4' >TotalCartPrice :{cart.data.totalCartPrice} EGP</h4> */}
</div>
  {Wish.data.map((product) =>
<div key={product._id} className='row p-3 border-bottom mt-2'>
    <div className="col-md-1">
    <img className='w-100' src={product.imageCover} alt={product.title} srcSet="" />
    
    </div>

    <div className="col-md-11">
   <div className='d-flex justify-content-between align-items-center '>
    <div >
  <h3 className="h6 text-success">
  {product.title}
  </h3>
  <h6 className='text-main'>
  {product.price} EGP
  </h6>
  
    </div>
<div>

{/* {product.count >0 && (
  <span>{product.count}</span>
)} */}
  
  

</div>

   </div>

    <button onClick={()=>RemoveOneWish(product.id)} className='btn p-0 mx-2'><i className=' text-danger fas fa-trash-can'> </i>  Remove</button>
</div>
  
  
</div>
  )}
  
  




    </div>:'h1'  }

    
    </>
  )
}
