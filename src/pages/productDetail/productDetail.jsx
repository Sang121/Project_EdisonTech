import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import './productDetail.css';
import { base_url } from '../../service/base-url';
import Cart from '../cart/cart';

const findItemIndex = (cart, id) => {
  return cart.findIndex((item) => item.id === id);
}

function ProductDetail() {
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      try {
        axios.get(`${base_url}/products/${id}`)
          .then(response => {
            setProduct(response.data);
            setLoading(false);
          })
      }
      catch (error) {
        console.log(error);
      }
    }

  }, [id]);

  const handleAddToCart = () => {
    const item = { id: product.id, title: product.title, price: product.price, quantity: quantity };
    const itemIndex = findItemIndex(cartItems, product.id);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, increase its quantity by 1
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // If the cart does not exist, create a new array and add the new item to it
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
    }
    // Reset the quantity to 1 after adding the item to the cart
    setQuantity(1);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  localStorage.setItem('cart', JSON.stringify(cartItems));

  return (
    <div>
      <div className="details-container row">
        <div className="row image col-5 col-lg-5 col-md-12 ">
          <div className="col-12">
            {loading ? (
              <div className="loader_detail">
                <BeatLoader
                  size={15}
                  color={"#123abc"}

                />
              </div>
            ) :
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
                </ul>}
            </div>
          </div>
      
          <div className="row col-7  col-lg-7 col-md-12 details">
            <div className="col-12">
              <h1 className="red">{product.title}</h1>
              <div className='price-details d-flex column'>
              <h4> Price:</h4>
                <h4 className='n-price  '> ${(product.price * (100 - product.discountPercentage) / 100).toFixed(2)} </h4>
                <p className='o-price'> ${product.price}</p>
      
              </div>
              <p className='stock'> Remaining: {product.stock} product </p>
              <div>
                <button onClick={handleAddToCart} className='addToCartBtn' type="button"> Add to cart</button>
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
      
        {/* Render the Cart component */}
        <Cart cart={cartItems} removeFromCart={removeFromCart} />
      </div>
      )
      }
      
      export default ProductDetail;