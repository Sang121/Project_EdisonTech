
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productList.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { fetchProducts } from '../service/products';
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

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index, products]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div >
      <Carousel className='slide' activeIndex={index} onSelect={handleSelect}>
        {products?.map((product, index) => (
          <Carousel.Item key={index}>
            <Link className='text-black' to={`/product/${product.id}`}>
              <img
                className="d-block img-slide"
                src={product.thumbnail}
                alt={product.title}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className=" container">
        {
          loading ? (
            <div className="loader">
              <BeatLoader
                size={15}
                color={"#123abc"}

              />
            </div>
          ) :
            products?.map((product, index) => (

              <Link className='text-black' to={`/product/${product.id}`}>
                <div className='cardViewContainer' key={index}><div className="cardView">

                  <img src={product.thumbnail} className="thumbnail" />
                  <div className='detail'>
                    <h5 className='title'> {product.title}  </h5>
                    <p className='des'>{product.description}</p>
                    <div className='rating star'>
                      {convertToStars(Math.round(product.rating))}

                    </div>
                    <p className=''> Remaining: {product.stock} </p>
                    <div className='price'>
                      <h4 className='new-price'>${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)} </h4>
                      <p className='old-price'>${product.price}</p>
                    </div>
                  </div>
                </div>

                </div>
              </Link>


            ))}
      </div>
    </div>

  )
}

export default ProductList


