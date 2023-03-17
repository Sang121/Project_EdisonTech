
import React, { useEffect, useState }  from 'react';
  import axios from 'axios';
  import'./productList.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
  
const base_url = 'https://dummyjson.com/products/';
function convertToStars(rating) {
  const starArray = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      starArray.push(<FontAwesomeIcon icon={faStar} className="star" key={i} />);
      rating -= 1;
    } else if (rating > 0 && rating < 1) {
      starArray.push(<FontAwesomeIcon icon={faStarHalfAlt} className="star" key={i} />);
      rating = 0;
    } else {
      starArray.push(<FontAwesomeIcon icon={faStarRegular} className="star" key={i} />);
    }
  }
  return starArray;
}
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
        <Link className='text-black' to={`/product/${product.id}`}>
        <div className='cardViewContainer' key={index}><div className="cardView">
        
        <img src={product.thumbnail} className="thumbnail"/>
        <div className='detail'> 
            <h5 className='title'> {product.title}  </h5>
            <p className='des'>{product.description}</p>
            <div className='rating star'>
            {convertToStars(Math.round(product.rating))}
            
            </div>
            <p className=''> Remaining: { product.stock} </p>
            <div className='price'>
                <h4 className='new-price'>${ (product.price*(100-product.discountPercentage)/100).toFixed(2)} </h4>
                <p className='old-price'>${product.price}</p>
            </div>

           
               
        </div>
        </div>
        
        </div>
        </Link>
      ))}

    </div>
 
  )
}

export default ProductList


