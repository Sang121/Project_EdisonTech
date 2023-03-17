  import React, { useEffect, useState }  from 'react';
  import axios from 'axios';

  import Slideshow from '../../components/slideshow';
  import Header from '../../components/Headers';

  import Footer from '../../components/footer';
  import ProductList from '../../components/ProductList';
  function Home() {
    

    return (
      <div>
      <Header/>
      <ProductList/>
     <Footer/>
      </div>
    )  
  } 
  export default Home