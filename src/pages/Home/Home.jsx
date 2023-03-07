  import React, { useEffect, useState }  from 'react';
  import axios from 'axios';
  import'./home.css';

  import 'bootstrap/dist/css/bootstrap.min.css';
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
        console.log("ero");
      }

    },[]);

    return (
      <div>
      <Header/>
      <div className="container">
      {products.map((product, index) => (
        <div key={index}><div className="cardView">
        <img src={product.thumbnail} className="thumbnail"/>
       <h3> {product.title}</h3>
       <h4>Price: {product.price}</h4>
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