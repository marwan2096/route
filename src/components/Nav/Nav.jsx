import React, { useContext, useEffect, useState } from 'react';
import Style from './Nav.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/freshcart-logo.svg';
import { UserContext } from '../context/UserContext';
import BrandsDetails from './../BrandsDetails/BrandsDetails';
import { CartContext } from '../context/CartContext';
import { WishContext } from '../context/WishContext';

export default function Nav() {
  let Navigate=useNavigate()
  let{token,setToken}=useContext(UserContext);

  function LogOut(){
localStorage.removeItem('userToken')
setToken(null);
Navigate('/Login')
  }
  
let {cartCount}=useContext(CartContext)
let{WishCount}=useContext(WishContext)


  return (
    <>
    <nav className="navbar py-3 navbar-expand-sm fixed-top navbar-light bg-light">
    <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="not found" width={120} srcSet="" />
    </Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
    {token!==null?
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
    
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products">Products</Link>
        </li>
        
        
        <li className="nav-item">
          <Link className="nav-link" to="/category">category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/WishList">WishList</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
        
      </ul>:''
    }
    

      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
    
      <li className="nav-item d-flex align-items-center">
  
      <>
        <i className='fab fa-facebook mx-2'></i>
        <i className='fab fa-twitter mx-2'></i>
        
        <i className='fab fa-instagram mx-2'></i>
        <i className='fab fa-youtube mx-2'></i>
        <i className='fab fa-google mx-2'></i>
      
        <li className="nav-item">
          <Link className="nav-link mx-2 position-relative" to="/WishList"><i class=" fa-solid fa-heart text-success fw-bold fa-lg "></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
          {WishCount}
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 position-relative" to="/cart"><i class="fa-solid fa-cart-shopping text-success fw-bold fa-lg "></i>
          
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
  {cartCount}
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </li>
      </>
    
    </li>

    {token==null?
<>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Register">Register</Link>
      </li>
</>
    :<li className="nav-item">
    <span className="nav-link cursor-pointer" onClick={()=>{LogOut()}}>Logout</span>
    </li>}

  
  </ul>
    </div>
  </div>
</nav>

    </>
  )
}
