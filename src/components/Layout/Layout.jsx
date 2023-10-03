import React, { useContext, useEffect, useState } from 'react';
import Style from './Layout.module.css'
import Nav from '../Nav/Nav';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router';
import { UserContext } from '../context/UserContext';

import { Offline, Online } from "react-detect-offline";
import { CartContext } from '../context/CartContext';



export default function Layout() {
  let {GetCart,RemoveCart,UpdateCart,RemoveALL}= useContext(CartContext);
  const [cart, setCart] = useState(null);
  let {AddCart,setCartCount,cartCount} = useContext(CartContext);

  let{token,setToken}=useContext(UserContext);
  useEffect(() => {
    if(localStorage.getItem('userToken')!=null){
      setToken(localStorage.getItem('userToken'))
    }
    async function GetAllCarts(){
      let {data} =await GetCart();
      setCart(data)
      console.log(data)
      setCartCount(data.numOfCartItems)
      }
  
    
  },[]);
  return (
    <>
  <Nav/>
<div className='container'>
    <Outlet></Outlet>
</div>
  <div>
  
    <Offline>
    <div className="network">
      <i className='fas fa-wifi'>Only shown offline (surprise!)</i>
    </div>
    
    </Offline>
  </div>

  {/* <Footer/> */}
  
    </>
  )
}
