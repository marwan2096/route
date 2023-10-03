import React, { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Brands from './components/Brands/Brands';
import Category from './components/Category/Category';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import CounterContextProvider from './components/context/counterContext';
import UserContextProvider, { UserContext } from './components/context/UserContext';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import CartContextProvider from './components/context/CartContext';

import toast, { Toaster } from 'react-hot-toast';
import WishList from './components/WishList/WishList';
import WishContextProvider, { WishContext } from './components/context/WishContext';
import BrandsDetails from './components/BrandsDetails/BrandsDetails';
import Order from './components/Order/Order';
import Allorders from './components/Allorders/Allorders';





// Define your routes with unique paths
// let{token,setToken}=useContext(UserContext)


let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index:true, element:<ProtectedRouter><Home/></ProtectedRouter>  },
      { path: 'Products', element: <ProtectedRouter><FeaturedProducts/></ProtectedRouter> },
      { path: 'Login', element:<Login/>  },
      { path: 'Register', element:<Register/>  },
    
      { path: 'ForgetPassword', element:<ForgetPassword/>  },
      { path: 'UpdatePassword', element:<UpdatePassword/>  },

      { path: '/Brands', element: <ProtectedRouter><Brands/></ProtectedRouter> },
      { path: '/BrandsDetails/:_id', element: <ProtectedRouter><BrandsDetails/></ProtectedRouter> },

      { path: 'Category', element: <ProtectedRouter><Category/></ProtectedRouter> },
      { path: 'Cart', element:<ProtectedRouter><Cart/></ProtectedRouter>  }, // Unique path for Cart
      { path: 'WishList', element:<ProtectedRouter><WishList/></ProtectedRouter>  }, // Unique path for Cart
      { path: 'ProductsDetails/:id', element:<ProtectedRouter><ProductsDetails/></ProtectedRouter>  }, // Unique path for Cart
      { path: 'Order', element:<ProtectedRouter><Order/></ProtectedRouter>  }, // Unique path for Cart
      { path: 'allorders', element:<ProtectedRouter><Allorders/></ProtectedRouter>  }, // Unique path for Cart
  // Unique path for Cart
// Unique path for Cart
      { path: '*', element: <NotFound/> }, // Unique path for Cart
    ],
  },
]);

function App() {
  


  return (
    <>
  
{/* <CounterContextProvider> */}
<WishContextProvider>
<CartContextProvider>
<UserContextProvider>
<RouterProvider router={routers}>

</RouterProvider>
<Toaster/>
</UserContextProvider>

</CartContextProvider>

</WishContextProvider>



{/* // </CounterContextProvider> */}
    

      


    </>
  );
}

export default App;
