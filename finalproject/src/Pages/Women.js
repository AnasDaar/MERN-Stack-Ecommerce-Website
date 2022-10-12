import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart, } from "./CartSlice"; 
import Swal from 'sweetalert2';


const Women = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (obj) => {
    dispatch(addToCart(obj))
    Swal.fire(
      'Added!',
      'Product Has Been Added to Cart',
      'success'
    )
  }
  const [products, setProducts] = useState([]);
  console.log(products)
  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/all-products',{
      // headers:{
      //   "Content-Type":"application/json"
      // }
    })
    result = await result.json()
    setProducts(result)
  }

  return (
    <div>
      <h1 className='text-center display-4'>Women Fashion</h1>
      < div className='container'>
        <div className='row'>

          {
           products.map((x,i) => ( 
                <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }} id="card2">
                  <img class="card-img-top" src={`./uploads/${x.pimage}`} alt="Card image cap" />

                  <div className="card-body">
                    {/* <p>{x.pname}</p> */}
                    <Link to={`/women/${x._id}`} id='link'>{x.pname}</Link>
                    <p className="card-text">{x.pprice}</p>
                    <a href="#" id='btn-cart' className="btn btn-primary" onClick={()=>handleAddToCart(x)}>ADD TO CART</a>
                  </div>
                </div>

              </div>
              
          ))
          }


        </div>

      </div>
    </div>
  )
}

export default Women
