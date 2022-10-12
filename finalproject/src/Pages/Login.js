import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = (props) => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const sign = async (event) => {
        console.warn(email, password);
        event.preventDefault();


        let res = await fetch('http://localhost:5000/signin', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/JSON'
            }
        })
        
        

        const data = await res.json()
        
        console.log(data);
        if (!email || !password) {
            Swal.fire(
                'Oops?',
                'PLease Fill All Input Fields?',
                'error'
              )
           
        //    props.showAlert("Please Fill all input fields","info")
            // alert("Please Fill all input fields")
        } else if (res.status === 400) {
            // props.showAlert("User Not Found","secondary")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Credentials!',
              })
        } else {
            Swal.fire(
                'Good job!',
                'You Are Succesfully Logged In',
                'success'
              )
            // props.showAlert("Signin Succesfully","success")
            localStorage.setItem('login',data.result.token)
            navigate('/');


        }
        
       




      

    }



    return (
         
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                    </div>

                    <div className='col-md-6' id='form'>
                        <form method=''>
                            <h1 className='text-center display-5 color-primary'>LOGIN</h1>

                            <h6>Email</h6>
                            <input type='email' value={email} name='email' onChange={(event) => setemail(event.target.value)} />
                            <h6>Password</h6>
                            <input type='password' value={password} name='password' onChange={(event) => setpassword(event.target.value)} />
                            <br />
                            <br />
                            <button type='submit' id='submit' onClick={sign} >submit</button>
                            <br />
                            <br />
                            <p><a href='register'>Click here to REGISTER</a></p>
                        </form>
                    </div>

                    <div className='col-md-3'>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login