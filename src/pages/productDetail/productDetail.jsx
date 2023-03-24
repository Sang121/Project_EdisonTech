import Header from '../../components/Headers'
import Footer from '../../components/footer';
import ProductList from '../../components/ProductList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetail.css';
const base_url = 'https://dummyjson.com';

function ProductDetail() {
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      try {
        axios.get(`${base_url}/products/${id}`)
          .then(response => {
            setProduct(response.data);
          })
      }
      catch (error) {
        console.log(error);
      }
    }


  }, []);


  return (
    <div>
      <Header />
      <div className="container row">
        <div className="row image col-lg-5 col-md-12 ">
          <div className="col-12">
            <ul className="nav nav-tabs nav-justified">
              <li className="nav-item ">
                <img
                  src={product.images && product.images.length !== 0 ? product.thumbnail : ""}
                  alt="image of product"
                  className="img-cover"
                />
              </li>
              <div className="small-img">
                <li className="nav-item">

                  <img
                    className='item'
                    src={product.images && product.images.length !== 0 ? product.images[0] : ""}
                    alt=""

                  />

                </li>
                <li className="nav-item">

                  <img
                    className='item'
                    src={product.images && product.images.length !== 0 ? product.images[1] : ""}
                    alt=""

                  />

                </li>
                <li className="nav-item">

                  <img
                    className='item'
                    src={product.images && product.images.length !== 0 ? product.images[2] : ""}
                    alt=""

                  />

                </li>
                <li className="nav-item">

                  <img
                    className='item'
                    src={product.images && product.images.length !== 0 ? product.images[3] : ""}
                    alt=""
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="row   col-lg-7 col-md-12 details">
          <div className="col-12">
            <h1 className="red">{product.title}</h1>
            <div className='price'>
              <h4 className=''> Giá sản phẩm: ${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)} </h4>
              <p className='old-price'>${product.price}</p>

            </div>
            <p className='stock'> Remaining: {product.stock} product </p>
            <div>
              <button type="button">Add to cart</button>
            </div>
            <div >
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
              <span >{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <h5 className='dess'> {product.description}</h5>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}
export default ProductDetail