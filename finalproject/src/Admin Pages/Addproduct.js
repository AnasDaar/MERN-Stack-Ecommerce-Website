import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

const Addproduct = () => {
    const [pname, setpname] = useState();
    const [pcategory, setpcategory] = useState();
    const [pprice, setpprice] = useState();
    const [pimage, setpimage] = useState();

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
 

    const AddProducts = async (e) => {
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
        const res = await axios.post('http://localhost:5000/add-product',formData,config)
       
        if(res.data.status===401||  !res.data){

            console.log("error")
        }else{
            Swal.fire(
                'Added!',
                'Product Has Been Added',
                'success'
              )
             
        }
      


    





        
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



        // let prod =  await fetch('http://localhost:5000/add-product',formData, {
        //     method: 'post',
        //     body: JSON.stringify({ pname, pcategory, pprice,pimage  }),
        //     headers:{
        //         "Content-Type":"multipart/form-data"
        //     }
        // })
        // if (!pname || !pcategory || !pprice || !pimage) {
        //     alert("please Enter all Detail of Product")
        // } else {
        //     alert("Product Has Been Added")
        // }

        // prod = await prod.JSON()
        // console.log(prod)

    
       

    }
    
         

        







    return (
        <div>
            <form >
                <h1 className='text-center display-5 color-primary'>Add Products</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                        </div>

                        <div className='col-md-6' id='form'>
                            <form >
                                <h6>Product Name</h6>
                                <input type='text' name='pname' value={pname} onChange={setname} />
                                <h6>Product Cateogory</h6>
                                <input type='text' name='pcategory' value={pcategory} onChange={setcategory} />
                                <h6>Price</h6>
                                <input type='text' name='pprice' value={pprice} onChange={setprice} />
                                <h6>UPload Image</h6>
                                <input type='file' name='pimage'   onChange={setimg} />
                                <br />
                                <br />
                                <button type='submit' id='psubmit' onClick={ AddProducts } >ADD PRODUCTS</button>

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

export default Addproduct






 
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