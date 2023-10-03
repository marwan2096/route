import React, { useEffect, useState } from 'react';
import Style from './Home.module.css'
import FeaturedProducts from './../FeaturedProducts/FeaturedProducts';
import { useNavigate } from 'react-router';
import axios from 'axios';
import CategorySlider from './../CategorySlider/CategorySlider';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import MainSlider from './../MainSlider/MainSlider';
import {Helmet} from "react-helmet";
export default function Home() {




  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>FreshCart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <MainSlider/>
    <CategorySlider/>
  

  
    <FeaturedProducts/>
    
    </>
  )
}
