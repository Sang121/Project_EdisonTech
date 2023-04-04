import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import ConvertToStars from '../../service/convertStar';
import './productDetail.css';
import { base_url } from '../../service/base-url';
const findItemIndex = (cart, id) => {
  return cart.findIndex((item) => item.id === id);
}

function ProductDetail() {
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  let { id } = useParams();
  const islogged = localStorage.getItem('islogged');
  const new_price = (product.price * (100 - product.discountPercentage) / 100).toFixed(2)
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
      const item = { id: product.id, new_price: product.discountPercentage * product.price, thumbnail: product.thumbnail, title: product.title, quantity: quantity };
      const itemIndex = findItemIndex(cartItems, product.id);
      if(islogged) { 
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
    }
  

  else{
    alert("Please login to continue")
    window.location.href = "/login"
  }
}

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };
  if (quantity < 0) {

    alert(' Không thể nhập số âm')
    setQuantity(1)
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return (
    <div>
      <div className="details-container row">
        <div className=" img-details col-12 col-md-6  ">

          {loading ? (
            <div className="loader_detail">
              <BeatLoader
                size={15}
                color={"#123abc"}

              />
            </div>
          ) :
            <ul className="nav nav-tabs nav-justified">
              <li className="img-cover">
                <img
                  src={product.thumbnail}
                  alt="image of product"
                  className="col-12"
                />
              </li>

              <li>
                {product.images && product.images.length > 0 && (
                  <ul className="small-img" >
                    {product.images.slice(0, 4).map((image, index) => (
                      <li key={index} >
                        <img src={image} className='item' alt={`Product Image ${index}`} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>

            </ul>}
        </div>


        <div className=" details col-12  col-md-6 ">

          <h1 className="red">{product.title}</h1>
          <div className='rating star'>
            {ConvertToStars(Math.round(product.rating))}

          </div>
          <div className='price-details d-flex column'>
            <h4> Price:</h4>
            <h4 className='n-price  '> ${new_price} </h4>
            <p className='o-price'> ${product.price}</p>

          </div>
          <p className='stock'> Remaining: {product.stock} product </p>
          <h5 > {product.description}</h5>

          <div >
            <button className='setQuantity' onClick={() => setQuantity(quantity - 1)}> - </button>

            <input type="text" className='quantity' name="quantity" onChange={handleQuantityChange} value={quantity} />
            <button className='setQuantity' onClick={() => setQuantity(quantity + 1)}> + </button>
          </div>
          <div className='frame'>
            <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>
          </div>


        </div>

      </div>



    </div>
  )
}

export default ProductDetail;