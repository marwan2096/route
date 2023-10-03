import axios from "axios";
import { createContext, useState } from "react";

 export let WishContext=createContext();

 export default function WishContextProvider(props){
  const [WishCount, setWishCount] = useState(0);
  let userToken=localStorage.getItem('userToken');
  let baseUrl="https://ecommerce.routemisr.com";
let headers={
    token:localStorage.getItem('userToken')
  }
   function AddWish(productId){
    return  axios.post(`${baseUrl}/api/v1/wishlist`,{
        productId:productId,
      },
      {
         headers:headers
      }).then((response)=>response)
      .catch((error)=>error)

   }

   function GetWish(){
    return  axios.get(`${baseUrl}/api/v1/wishlist`,{
      headers:headers
    })
  .then((response)=>response)
  .catch((error)=>error)

   }
   function RemoveWish(id){
    return  axios.delete(`${baseUrl}/api/v1/wishlist/${id}`,{
      headers:headers
    })
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

 return <WishContext.Provider value={{AddWish,GetWish,RemoveWish,RemoveALL,WishCount,setWishCount}}>
{props.children}

{console.log(props.children)}

 </WishContext.Provider>

}