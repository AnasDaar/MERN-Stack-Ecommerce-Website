import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Update = () => {
    const [pname, setpname] = useState();
    const [pcategory, setpcategory] = useState();
    const [pprice, setpprice] = useState();
    const [pimage, setpimage] = useState();
    const params =useParams()

const setname = (e)=>{
const{value} =e.target;
setpname(value);
}
const setcategory = (e)=>{
    const{value} =e.target;
    setpcategory(value);
}
const setprice = (e)=>{
        const{value} =e.target;
        setpprice(value);
}
const setimg = (e)=>{
    setpimage(e.target.files[0])
}
 useEffect(() => {
    getProductDetails()
 }, [])
 
const getProductDetails = async() =>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result =await result.json()
    console.log(result)
    setpname(result.pname)
    setpcategory(result.pcategory)
    setpprice(result.pprice)
    setpimage(result.pimage)

}


const UpdateProducts = async (e) => {
    e.preventDefault();
    var formData = new FormData()
    formData.append('pname',pname);
    formData.append('pcategory',pcategory);
    formData.append('pprice',pprice);
    formData.append('pimage',pimage);


  
    

    const config ={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
    
    const res = await axios.put(`http://localhost:5000/product/${params.id}`,formData,config)
        Swal.fire(
            'Added!',
            'Product Has Been Added',
            'success'
          )
          console.log(res)
         
    
  
         
    
      


    





        
// // const config ={
// //     header:{
// //         "Content-Type":"multipart/form-data"
// //     }
// // }
// // const res = await axios.post("/add-product",formData,config)
// //  console.log(res)
// //  if (res.data.status === 401 || !res.data) {
// //    alert("ERROr")
// //   } else {
// //     alert("product added")
// //   }
// // } 



//         // let prod =  await fetch('http://localhost:5000/add-product',formData, {
//         //     method: 'post',
//         //     body: JSON.stringify({ pname, pcategory, pprice,pimage  }),
//         //     headers:{
//         //         "Content-Type":"multipart/form-data"
//         //     }
//         // })
//         // if (!pname || !pcategory || !pprice || !pimage) {
//         //     alert("please Enter all Detail of Product")
//         // } else {
//         //     alert("Product Has Been Added")
//         // }

//         // prod = await prod.JSON()
//         // console.log(prod)

    
       

}
    
         

        







    return (
        <div>
            <form >
                <h1 className='text-center display-5 color-primary'>Update Products</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                        </div>

                        <div className='col-md-6' id='form'>
                            <form >
                                <h6>Product Name</h6>
                                <input type='text' name='pname'value={pname} onChange={setname} />
                                <h6>Product Cateogory</h6>
                                <input type='text' name='pcategory' value={pcategory} onChange={setcategory} />
                                <h6>Price</h6>
                                <input type='text' name='pprice' value={pprice} onChange={setprice} />
                                <h6>UPload Image</h6>
                                <input type='file' name='pimage'   onChange={setimg} />
                                <br />
                                <br />
                                <button type='submit' id='psubmit' onClick={UpdateProducts} >ADD PRODUCTS</button>

                            </form>
                        </div>

                        <div className='col-md-3'>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    )
}


export default Update






 
// const config ={
//     header:{
//         "Content-Type":"multipart/form-data"
//     }
// }
// const res = await axios.post("/add-product",formData,config)
//  console.log(res)
//  if (res.data.status === 401 || !res.data) {
//    alert("ERROr")
//   } else {
//     alert("product added")
//   }
// } 