import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart, } from "./CartSlice"; 
import Swal from 'sweetalert2';



const Singlepage = () => {
  const navigate = useNavigate()
  const params = useParams('')
  const dispatch = useDispatch();
  const handleAddToCart = (obj) => {
    dispatch(addToCart(obj))
    Swal.fire(
      'Added!',
      'Product Has Been Added to Cart',
      'success'
    )
  }
  const log = () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Logged In First!',
          

        })
        navigate("/login");
      }


  const [num, setNum] = useState(1);
  const decnum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0)
    }
  }
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`http://localhost:5000/all-products/${params.id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json()
    setProducts(result)
    console.log(result)
  }

  return (
    
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
        
      <img src={`/uploads/${products.pimage}`} style={{ height: '450px', width: '300px' }} />
        </div>
        <div className='col-md-4'> 
        <h3>{products.pname}</h3>
        <h4>{products.pprice*num}</h4>
        <button style={{ marginRight: "5px" }} onClick={decnum} className='btn btn-danger btn-sm'>-</button>{num}<button style={{ marginLeft: "5px" }} className='btn btn-primary btn-sm' onClick={() => setNum(num + 1)}>+</button>
        <br />
        <br />
        <div>
        <button  style={{ backgroundColor: '#e4c09d', border: 'none', color: 'black', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px' }} id='btn0' onClick={()=>handleAddToCart(products)}>ADD TO CART</button>
        {
          localStorage.getItem('login')?
          <>
          <button style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'><Link to='/checkout' >CHECKOUT</Link></button>
          </>
          :
          <>
          <button onClick={log} style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'><Link to='/checkout' >CHECKOUT</Link></button>
          </>
        }
        </div>
        </div>
        <div className='col-md-2'></div>

      </div>
      
    </div>
  )
}

export default Singlepage































// import React from 'react'

// import { useParams } from 'react-router-dom'
// import Data from '../components/Data';
// import { useDispatch } from "react-redux";
// import { addToCart, } from "./CartSlice";
// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const Singlepage = () => {
//   const dispatch = useDispatch();
//   const handleAddToCart = (obj) => {
//     dispatch(addToCart(obj))
//     Swal.fire(
//       'Added!',
//       'Product Has Been Added to Cart',
//       'success'
//     )
//   }
//   const [num, setNum] = useState(1);
//   const decnum = () => {
//     if (num > 0) {
//       setNum(num - 1);
//     } else {
//       setNum(0)
//     }
//   }
  

//   const log = () => {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Please Logged In First!',
//     })
//   }

//   const { id } = useParams();
//   const abc = Data.find(p => p.id == Number(id));
//   return (
//     <div>


//       <div className='container'>

//         <div className='row'>
//           <div className='col-md-2'>
//           </div>

//           <div className='col-md-4'>
//             <img src={`/${abc.image}`} style={{ height: '450px', width: '300px' }} className='img-fluid m-3' />

//           </div>

//           <div className='col-md-4'>
//             <br />
//             <h2>{abc.name}</h2>
//             <h6>{abc.price}</h6>
//             <div>
//               <button style={{ marginRight: "5px" }} onClick={decnum} className='btn btn-danger btn-sm'>-</button>{num}<button style={{ marginLeft: "5px" }} className='btn btn-primary btn-sm' onClick={() => setNum(num + 1)}>+</button>
//               <br />
//               <br />
//               <button style={{ backgroundColor: '#e4c09d', border: 'none', color: 'black', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px' }} id='btn0' onClick={()=>handleAddToCart(abc)}>ADD TO CART</button>
//               {
//                 localStorage.getItem('login') ?
//                   <>
//                     <button style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'><a href='/checkout' >CHECKOUT</a></button>
//                   </>
//                   :
//                   <>
//                     <button onClick={log} style={{ backgroundColor: '#000000', border: 'none', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', height: '40px', width: '140px', borderRadius: '20px', marginLeft: '10px' }} id='btn0'>CHECKOUT</button>
//                   </>
//               }


//             </div>
//           </div>
//           <div className='col-md-2'>

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Singlepage