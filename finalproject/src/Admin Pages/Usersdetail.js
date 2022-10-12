import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useState, useEffect } from 'react'

const Usersdetail = () => {
    
    const [user, setuser] = useState([]);
    useEffect(() => {
        getUsers();

    }, []);
    
    const getUsers = async () => {
        let result = await fetch('http://localhost:5000/users-detail')
        result = await result.json();
        if (result) {
            setuser(result)
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
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((obj, ind) =>(
                    
                                <tr key={obj._id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phone}</td>
                                    <td>
                                        <button className='btn btn-success'>
                                            <AiFillEdit />
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
export default Usersdetail