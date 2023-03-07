  import React, { useEffect, useState }  from 'react';
  import axios from 'axios';
  import'./home.css';
  import Slideshow from '../../components/slideshow';
  import Header from '../../components/Headers';
  import Footer from '../../components/footer';
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
      <div>
      <Header/>
      <div className=" container-fluid">
      {products.map((product, index) => (

        <div key={index}><div className="cardView">
       
        <img src={product.thumbnail} className="thumbnail"/>

       <h4> {product.brand}</h4>
       <p> {product.title}</p>
       <h5>${product.price}</h5>
        <p> {product.description}</p>
        </div>
        </div>
      ))}

    </div>
     <Footer/>
      </div>
    )  
  } 
  export default Home