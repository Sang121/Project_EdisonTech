
import React, { useEffect, useState }  from 'react';
  import axios from 'axios';
const base_url = 'https://dummyjson.com/products/';
function ProductList() {
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
    
    <div className=" container">
      {products.map((product, index) => (

        <div className='cardViewContainer' key={index}><div className="cardView">
       
        <img src={product.thumbnail} className="thumbnail"/>

       <h4> {product.brand}</h4>
       <p> {product.title}</p>
       <h5>{product.price}</h5>
        <p> {product.description}</p>
        
        </div>
        </div>
      ))}

    </div>
 
  )
}

export default ProductList