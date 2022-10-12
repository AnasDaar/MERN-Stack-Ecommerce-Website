import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart, } from "./CartSlice";
import Swal from 'sweetalert2';

const ProductCard = ({ prod }) => {
    const dispatch = useDispatch();
    const handleAddToCart=(obj)=>{
        dispatch(addToCart(obj))
        Swal.fire(
            'Added!',
            'Product Has Been Added to Cart',
            'success'
          )
    }
    
    
    return (
        <>
            <div className="card" style={{ width: '18rem' }} id="card">
                <img className="card-img-top" src={prod.image} alt="Card image cap" />
                <center>
                    <div className="card-body">

                        <Link to={`/mens/${prod.id}`} id="link">{prod.name}</Link>
                        <p className="card-text" id='price'>Rs : {prod.price}</p>
                        <a  className="btn btn-primary" id='btn1' onClick={() => handleAddToCart(prod)} >Add To Cart</a>
                    </div>
                </center>
            </div>

        </>
    )
}

export default ProductCard