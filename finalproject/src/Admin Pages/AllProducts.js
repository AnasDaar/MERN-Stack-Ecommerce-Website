import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const AllProducts = () => {
    
    const [prod, setProd] = useState([]);
    useEffect(() => {
        getProd();

    }, []);
    
    const getProd = async () => {
        let result = await fetch('http://localhost:5000/all-products')
        result = await result.json();
        if (result) {
            setProd(result)
        } else {
            console.log("no data found")
        }

    }
      
    return (
        <div>
            <h1 className='text-black text-center fw-bold fs-2 mt-5'>Users Detail</h1>
            <hr className='w-25 text-center m-auto' />

            <div className='container'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            prod.map((obj, ind) =>(
                    
                                <tr key={obj._id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{obj.pname}</td>
                                    <td>{obj.pcategory}</td>
                                    <td>{obj.pprice}</td>
                                    <td><img src={`./uploads/${obj.pimage}` } id='img2'/></td>
                                    <td>
                                        <button className='btn btn-success'>
                                            <Link to={"/update/"+obj._id}><AiFillEdit /></Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger rounded-circle' >
                                            <BsFillTrashFill  />
                                        </button>
                                    </td>
                                   
                                </tr>
                                
                            
                    ))
                        }
                       

                </tbody>
            </table>
            </div>
            </div>
        
    )
}
export default AllProducts