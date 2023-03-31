
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productList.css';
import { Carousel } from 'react-bootstrap';
import ConvertToStars from '../service/convertStar';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { fetchProducts } from '../service/products';
import { base_url } from '../service/base-url';

function ProductList() {
  const [totalCount, setTotalCount] = useState(0)
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const getProducts = async (pg = page, pgSize = pageSize) => {
    try {

      const res = await axios.get(`${base_url}/products?limit=${100}&page=${pg}`);
      const startIdx = (pg - 1) * pgSize;
      const endIdx = pg * pgSize;
      setProducts(res.data.products.slice(startIdx, endIdx));
      setTotalCount(res.data.total)

      
    }
    catch (errors) {
      console.log("Call API products errors:", errors);
      setLoading(false)
    }
  };

  useEffect(() => {

    getProducts(page, pageSize);
    setLoading(false);

  }, [page, pageSize]);

  const prePage = async () => {
    const pg = page === 1 ? 1 : page - 1;
    setPage(pg);
  };

  const nextPage = async () => {
    const pg = page + 1;
    setPage(pg);
  };


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
                      {ConvertToStars(Math.round(product.rating))}

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
      <div className='page'>
      <button onClick={prePage} disabled={page === 1}>Previous</button>

      {Array.from({ length: Math.min(Math.ceil(totalCount / pageSize)) }, (v, i) => i + 1).map((pageNumber) => (
        <button key={pageNumber} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
      ))}

      <button onClick={nextPage} disabled={totalCount <= page * pageSize}>Next</button>
      <br />
      <label>
        Page Size:
        <input
          type="number"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        />
      </label>
    </div>


    </div>

  )
}

export default ProductList


