import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Register = (props) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const navigate = useNavigate();



    const submitData = async (event) => {
        console.warn(name, email, password,phone)
        event.preventDefault();



        let res = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password, phone }),
            headers: {
                'content-type': 'application/JSON'
            }

        })

        setname("");
        setemail("");
        setpassword("");
        setphone("");
       
        const data = await res.json()
        
        console.log(data);
        if (!name || !email || !phone || !password) {
            Swal.fire(
                'Oops?',
                'PLease Fill All Input Fields?',
                'error'
              )


            // props.showAlert("Please Fill all input fields","info")
            // alert("PLz Filled all Required Fields")
        } else if(res.status === 422){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This Email is Already Registered!',
              })


            // alert("Email ALready Exist")
            // props.showAlert("Email Already Exist","secondary")
        }else {

            Swal.fire(
                'Good job!',
                'You Are Succesfully Registered',
                'success'
              )
            // alert("you are succesfully registered")
            // props.showAlert("You Have Succesfully Registered","success")
            navigate('/login')

        }
        
       





    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                    </div>

                    <div className='col-md-6' id='form'>
                        <form method=''>
                            <h1 className='text-center display-5 color-primary'>REGISTER</h1>
                            <h6>Name</h6>
                            <input type='text' value={name} name='name' onChange={(event) => setname(event.target.value)} />
                            <h6>Email</h6>
                            <input type='email' value={email} name='email' onChange={(event) => setemail(event.target.value)} />
                            <h6>Phone No</h6>
                            <input type='text' value={phone} name='phone' onChange={(event) => setphone(event.target.value)} />
                            <h6>Password</h6>
                            <input type='password' value={password} name='password' onChange={(event) => setpassword(event.target.value)} />
                            <br />
                            <br />
                            <br />
                            <button type='submit' id='submit' onClick={submitData}>submit</button>
                            <p>ALready have an account <a href='login'>Click here to login</a></p>

                        </form>
                    </div>

                    <div className='col-md-3'>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Register