import React from 'react';
import Style from './ProtectedRouter.module.css'
import { Navigate } from 'react-router';
import Login from './../Login/Login';

export default function ProtectedRouter(props) {

if(localStorage.getItem('userToken')!=null) {
return props.children;
}else{
  return <Navigate to={'/Login'}/>
}

}
