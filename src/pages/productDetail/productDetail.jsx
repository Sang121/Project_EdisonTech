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

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs nav-justified">
              <li className="nav-item">
                <img
                  src={product.images && product.images.length !== 0 ? product.thumbnail : ""}
                  alt=""
                  className="img-cover"
                />
              </li>
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


            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={product.thumbnail} alt="Lacos" title="Túi Lacos" />
            </div>
          </div>
          <div className="col-9">
            <h1>{product.title}</h1>
            <p>Giá sản phẩm: {(product.price * (100 - product.discountPercentage) / 100).toFixed(2)}$</p>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <h2>Màu sắc &nbsp;</h2>
              <button type="button" className="btn btn-outline-primary">Black</button>
              <button type="button" className="btn btn-outline-primary">Green</button>
              <button type="button" className="btn btn-outline-primary">White</button>
            </div><br />
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <h2>Kích cỡ &nbsp;</h2>
              <button type="button" className="btn btn-outline-primary">M</button>
              <button type="button" className="btn btn-outline-primary">L</button>
              <button type="button" className="btn btn-outline-primary">XL</button>
            </div>
            <div>
              <button type="button">Add to cart</button>
            </div>
            <div>
              <p>
                <button onclick="totalClick(-1)">-</button>
                <span id="totalClicks">1</span>
                <button onclick="totalClick(1)">+</button>
              </p>
            </div>
            <h4> {product.description}</h4>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}
export default ProductDetail