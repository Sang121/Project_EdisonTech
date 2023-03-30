import { Table } from 'phosphor-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './cartPage.css'
function CartPage() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const total = cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
  console.log(cartItems)
  return (

    <div className='cart-container' >
      <p><span className="h2">Shopping Cart </span><span className="h4">({cartItems.length} item in your cart)</span></p>



      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (

        <div>


          <div className="card ">
            <div className="card-body ">

              <table className='col-7'>
                <thead className='p_title'>

                  <th className='p_img'> </th>
                  <th className='p_name'>Product name</th>
                  <th className='p_price' >Price($)</th>
                  <th   >Quantity</th>
                  <th   >Total($)</th>
                  <th></th>
                </thead>

                {cartItems.map((item, key) => (
                  <tr className='cart_item' key={key}>

                    <td> <Link className='' to={`/product/${item.id}`}> <img className=" cart-img" src={item.thumbnail} alt={item.title} /> </Link> </td>
                    <td >{item.title}</td>
                    <td> {(item.new_price).toFixed(2)} </td>
                    <td >{item.quantity}</td>
                    <td>{(item.new_price * item.quantity).toFixed(2)}</td>
                    <td>  <button className='rm-btn' onClick={() => removeFromCart(item)}><i class="fa fa-trash"></i>
                    </button></td>
                  </tr>

                ))}


              </table>

            </div>


          </div>
          <div className='all'>
            <div classNameName=" card mb-5">
              <div className="card-body p-4">

                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span> <span
                      className="lead fw-normal">{total.toFixed(2)}$</span>
                  </p>
                </div>

              </div>
            </div>

            <div className="d-flex tbtn justify-content-center">
              <button type="button" className="btn btn-light btn-lg me-2"> <Link className='text-black' to='/'> Continue shopping </Link> </button>
              <button type="button" className="btn  btn-primary btn-lg">Checkout</button>
            </div>
          </div>

        </div>




      )}
    </div>
  )
}

export default CartPage