import React, { useContext, useState } from 'react';
import Style from './Cart.module.css'
import { CartContext } from '../context/CartContext';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Order from './../Order/Order';

export default function Cart() {
  let {GetCart,RemoveCart,UpdateCart,RemoveALL}= useContext(CartContext);
  const [cart, setCart] = useState(null);
  let {setCartCount,cartCount} = useContext(CartContext);


  async function RemoveALLCart(){

    let {data} =await RemoveALL();
    setCart(data)
    }
  async function RemoveOneCart(id){

    let {data} =await RemoveCart(id);
    setCart(data)
    setCart(data)
    setCartCount(data.numOfCartItems)
    }
    async function UpdateOneCart(id,count){
    
      let {data} =await UpdateCart(id,count);
      setCart(data)
      setCartCount(data.numOfCartItems)
      }
  
  async function GetAllCarts(){
    let {data} =await GetCart();
    setCart(data)
    console.log(data)
    }
  
useEffect(() => {
  GetAllCarts()
  // setCartCount(data.numOfCartItems)
}, []);


  return (
    <>
    <br />
    {cart?<div className=" my-3 w-75 mx-auto p-3 bg-main-light">
<div className='mb-4'>
<div className='d-flex justify-content-between mt-4'>
      <h3 className='text-main fw-bold mb-4'>Shopping Cart</h3>
      <button onClick={()=>RemoveALLCart()} style={{ width: '100px', height: '80px' }} className='btn btn-outline-danger'>
  Clear ALL 
</button>

</div>
    {/* <h4 className='h6 text-success fw-bold mx-4' >Cart Item :{cart.numOfCartItems}</h4>
    <h4 className='h6 text-success fw-bold mx-4' >TotalCartPrice :{cart.data.totalCartPrice} EGP</h4> */}
</div>
  {cart.data.products.map((product) =>
<div key={product.product.id} className='row p-3 border-bottom mt-2'>
    <div className="col-md-1">
    <img className='w-100' src={product.product.imageCover} alt={product.product.title} srcSet="" />
    
    </div>

    <div className="col-md-11">
   <div className='d-flex justify-content-between align-items-center '>
    <div >
  <h3 className="h6 text-success">
  {product.product.title.split(" ").slice(0,2).join(" ")}
  </h3>
  <h6 className='text-main'>
  {product.price} EGP
  </h6>
  
    </div>
<div>
  <button onClick={()=>UpdateOneCart(product.product.id,product.count +1)} className='btn btn-outline-success mx-3'>+</button>
  {product.count === 0 ? (
  <button onClick={ RemoveOneCart(product.product.id)} className='btn p-0 mx-2'>
    <i className='text-danger fas fa-trash-can'></i> Remove
  </button>
) : null}
{product.count >0 && (
  <span>{product.count}</span>
)}
  
  <button onClick={()=>UpdateOneCart(product.product.id,product.count - 1)} className='btn btn-outline-danger mx-3'>-</button>

</div>

   </div>

    <button onClick={()=>RemoveOneCart(product.product.id)} className='btn p-0 mx-2'><i className=' text-danger fas fa-trash-can'> </i>  Remove</button>
</div>
  
</div>
  )}
  <Link to="/Order" >
  <button  className='btn btn-outline-success mx-5 mt-5 '>Online Payment</button>
  
  </Link>





    </div>:'h1'  }



    </>
  )

}
