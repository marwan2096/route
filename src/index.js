import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
 import {QueryClient,QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';


let x= new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={x} >  <App  />
  <ReactQueryDevtools initialIsOpen={false} />


  </QueryClientProvider>
  
  </React.StrictMode>
);

