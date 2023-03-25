  import React, { useEffect, useState }  from 'react';
  import axios from 'axios';


  
  import Header from '../../components/Headers';

  import Footer from '../../components/footer';
  import ProductList from '../../components/ProductList';
  const base_url = 'https://dummyjson.com/products/';
  
  function Home() {
    const [products, setProducts] =  useState([])
    useEffect(() => {
      try{
    axios.get(base_url)
      .then(response => {

        setProducts(response.data.products);

      })}
      catch(error){
        console.log(error);
      }

    },[]);


    return (
      <div >
      <Header/>
     
      {ProductList(products)}
     <Footer/>
      </div>
    )  
  } 
  export default Home