import React, { useContext, useEffect, useState } from 'react';
import Style from './FeaturedProducts.module.css'

import { useNavigate } from 'react-router';
import axios from 'axios';
import { useQuery } from 'react-query';
import { date } from 'yup';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import ProductsDetails from '../ProductsDetails/ProductsDetails';
import CartContextProvider, { CartContext } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import { WishContext } from '../context/WishContext';










export default function FeaturedProducts() {

  // const [products, setProducts] = useState([]);
//   let navigate=useNavigate();
// const [isLoading, setIsLoading] = useState(false);
// const [errorMsg, setError] = useState(null);
//   let baseUrl="https://ecommerce.routemisr.com";

//   async function getProducts(){

//     setIsLoading(true)
//       let {data}=await axios.get(`${baseUrl}/api/v1/products`);
//         console.log(data.data);
//         setProducts(data.data);
//         setIsLoading(false)
//       }
      
//       useEffect(() => {
//         getProducts();
//       }, []);
let {AddCart,setCartCount,cartCount} = useContext(CartContext);
console.log(cartCount)
let {AddWish,WishCount,setWishCount} = useContext(WishContext);


const baseUrl = "https://ecommerce.routemisr.com";


const [currentPage, setCurrentPage] = useState(1);
const handlePaginationClick = (direction) => {
  if (direction === 'previous' && currentPage > 1) {
    setCurrentPage(currentPage - 1);
  } else if (direction === 'next' && data?.data.metadata.nextPage) {
    setCurrentPage(currentPage + 1);
  }
};
const Paginte = (page) => {
  setCurrentPage(page);
};

async function addToCart(id){
  let response=await AddCart(id);

if(response.data.status==='success'){
  setCartCount(response.data.numOfCartItems)
  console.log(setCartCount)
  console.log(response)
 toast('product is Added to Cart successfully');
 
}
else{
  toast('error product not Added ');
}

}
async function addToWish(id){
  let response=await AddWish(id);
  console.log(response)
  
if(response.data.status==='success'){
  
 toast('product is Added to Wishlist successfully');
//  document.querySelectorAll('.fa-heart').forEach((element) => {
//   element.style.color = 'red';
// });

 
}
else{
  toast('error  Wishlist not Added ');
}

}


function getProducts(page = 1) {

  return axios.get(`${baseUrl}/api/v1/products?page=${currentPage}`);
}
const { data, isError, isLoading, isFetching } = useQuery(['FeaturedProducts', currentPage], () => getProducts(currentPage));
// let { data, isError, isLoading, isFetching } = useQuery('FeaturedProducts', () => getProducts(currentPage));

// console.log('isFetching', isFetching);
// console.log('isLoading', isLoading);







  return (
    <>
    {isLoading?<div className="w-100 p-5 d-flex justify-content-center ">
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>

    </div>:     <div className="container py-2">
     <div className="row">
     {/* //optional chaning */}
    {data?.data.data.map((product)=>

   <div key={product.id} className="col-md-2">

    <div className="mt-5  product cursor-pointer py-3 px-2 mb-3">
    <Link to={`/ProductsDetails/${product.id}`}>
       <img className ='w-100' src={product.imageCover} alt={product.title} srcSet="" />
       <span className='text-main  fw-bold font-sm'>
        {product.category.name}
       </span>
       <h3 className='h6 mt-2'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
       <div className="content d-flex justify-content-between mt-2">
      <span>  {product.price}EGP</span>

    
      <span> <i className='fa fa-star rating-color'></i> {product.ratingsAverage}</span>
    </div>
</Link> 


      <span width={100} onClick={()=>addToWish(product.id)} className='fs-4 fa-solid fa-heart d-flex justify-content-end mt-2 '></span>
    <button onClick={()=>addToCart(product.id)} className='btn bg-main text-white w-100 btn-sm mt-2'>add to Cart</button>
    </div>
    

    </div>  

    )}


      </div>
     </div>
       }
       <div className='d-flex justify-content-center'>
       <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePaginationClick('previous')}>
                    Previous
                  </button>
                </li>
                <button value="1" className={`page-link page-item ${currentPage === 1 ? 'active' : ''}`} onClick={(e) => Paginte(e.target.value)}>1</button>
      <button value="2" className={`page-link page-item ${currentPage === 2 ? 'active' : ''}`} onClick={(e) => Paginte(e.target.value)}>2</button>
      {/* <button value="3" className={`page-link page-item ${currentPage === 3 ? 'active' : ''}`} onClick={(e) => Paginte(e.target.value)}>3</button> */}

                <li className="page-item">
                  <button className="page-link page-item" onClick={() => handlePaginationClick('next')}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>

       </div>
          
        
     
    </>
  )
}
