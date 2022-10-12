import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, getTotals } from "./CartSlice"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  console.log(cart)


  const logInFirst = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Logged In First!',
    })
  }
  return (
    <div className="container">
      <div className='col justify-content-center  d-flex' style={{ marginBottom: '50px' }}>
        <h2 id="scart" style={{ marginTop: '80px' }}>SHOPPING CART</h2>
      </div>
      {cart.cartItems.length == 0 ? (<>


        <Link to={`/`} >
          <h1 id="text" className='col justify-content-center  d-flex'>Go to Homepage For Shopping</h1>
        </Link>

      </>
      ) : (<div>
        <table className="table" id="tbl">
          <thead>
            <tr>

              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            {
              cart.cartItems.map((cartItem) => (

                <>
                  <tr >

                    <td><img style={{ width: '70px', height: '70px' }} src={`./uploads/${cartItem.pimage}`} className="card-img-top" alt="..." /></td>
                    <td>{cartItem.pprice}</td>
                    <button id="minus" className='btn btn-danger btn-sm' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <span>{cartItem.cartQuantity}</span>
                    <button id="plus" className='btn btn-info btn-sm' onClick={() => handleAddToCart(cartItem)}>+</button>
                    <td>{cartItem.pprice * cartItem.cartQuantity}</td>


                  </tr>
                </>



              ))
            }
          </tbody>
        </table>
        <div className='col justify-content-center  ' style={{ marginBottom: '50px' }}>
          <br />
          <h4>Total Products Are   <span className="qty">{cart.cartTotalQuantity}</span></h4>

          <h4>Your Total Bill will be   <span className="qty">Rs :{cart.cartTotalAmount}</span></h4>
        </div>


      </div>)}
      <div>
        {
          localStorage.getItem('login') ?
            <>
              <button style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'><Link to='/checkout' >CHECKOUT</Link></button>
            </>
            :
            <>
              <button onClick={logInFirst} style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'><Link to='/checkout' >CHECKOUT</Link></button>
            </>
        }
      </div>
    </div>







    /*(<div className="cart-container">
  <h2>Shopping Cart</h2>
  {cart.cartItems.length === 0 ? (
    <div className="cart-empty">
      <p>Your cart is currently empty</p>
      <div className="start-shopping">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <span>Start Shopping</span>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <div className="titles">
        <h3 className="product-title">Product: {cart.cartItems.Name}</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      <div className="cart-items">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" >Name{cartItem.Name}
              
              
              <div className="cart-product-quantity">
                
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={() => handleAddToCart(cartItem)}>+</button>
              </div>
              <div className="cart-product-total-price">
                ${cartItem.price * cartItem.cartQuantity}
              </div>
            </div>
          ))}
      </div>
      
    </div>
  )}
</div>*/);
};

export default Cart;