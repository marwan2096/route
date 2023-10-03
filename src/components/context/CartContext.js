import axios from "axios";
import { createContext, useState } from "react";

 export let CartContext=createContext();

 export default function CartContextProvider(props){
  const [cartCount, setCartCount] = useState(0);
  let userToken=localStorage.getItem('userToken');
  let baseUrl="https://ecommerce.routemisr.com";
let headers={
    token:localStorage.getItem('userToken')
  }
   function AddCart(productId){
    return  axios.post(`${baseUrl}/api/v1/cart`,{
        productId:productId,
      },
      {
         headers:headers
      }).then((response)=>response)
      .catch((error)=>error)

   }

   function GetCart(){
    return  axios.get(`${baseUrl}/api/v1/cart`,{
      headers:headers
    })
  .then((response)=>response)
  .catch((error)=>error)

   }
   function RemoveCart(id){
    return  axios.delete(`${baseUrl}/api/v1/cart/${id}`,{
      headers:headers
    })
  .then((response)=>response)
  .catch((error)=>error)

   }
   function UpdateCart(id,count){
    return  axios.put(`${baseUrl}/api/v1/cart/${id}`,{
    
      count:count,
    },{  headers:headers})
  .then((response)=>response)
  .catch((error)=>error)

   }
   function RemoveALL(id){
    return  axios.delete(`${baseUrl}/api/v1/cart`,{
      headers:headers
    })
  .then((response)=>response)
  .catch((error)=>error)

   }

   function onlinePayment(id,shippingAddress){
    return  axios.post(`${baseUrl}/api/v1/orders/checkout-session/${id}`,
    {
      shippingAddress:shippingAddress
    },{  headers:headers})
  .then((response)=>response)
  .catch((error)=>error)

   }
  

   

 return <CartContext.Provider value={{AddCart,GetCart,RemoveCart,UpdateCart,RemoveALL,cartCount,setCartCount,onlinePayment}}>
{props.children}

{console.log(props.children)}

 </CartContext.Provider>

}