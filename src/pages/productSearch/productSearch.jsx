import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function ProductSearch() {
  let { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(response => {
          setProducts(response.data.products);
          console.log(response.data.products);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      
      <h2>Search results for "{searchTerm}"</h2>
      <div className="container">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Link className='text-black' to={`/product/${product.id}`} key={index}>
              <div className='cardViewContainer'>
                <div className="cardView">
                  <img src={product.thumbnail} className="thumbnail" />
                  <div className='detail'>
                    <h5 className='title'> {product.title} </h5>
                    <p className='des'>{product.description}</p>
                    <p className=''> Remaining: {product.stock} </p>
                    <div className='price'>
                      <h4 className='new-price'>${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)} </h4>
                      <p className='old-price'>${product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>


    </div>
  )
}
export default ProductSearch