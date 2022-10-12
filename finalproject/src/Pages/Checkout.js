import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Checkout = () => {
  const [name,setName]=useState('')
  const [adress,setAdress]=useState('')
  const [province,setProvince]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')



  const submit = async(event)=>{
    event.preventDefault();
    
    let res = await fetch('http://localhost:5000/checkout', {
      method: 'post',
      body: JSON.stringify({ name,adress,province,email,phone }),
      headers: {
          'Content-Type': 'application/JSON'
      }
  })
  setName("")
  setAdress("")
  setProvince("")
  setEmail("")
  setPhone("")
  const data = await res.json()
  if(!name || !adress || !province || !email || !phone){
    Swal.fire(
      'Oops?',
      'PLease Fill All Input Fields?',
      'error'
    )
  }else{
    Swal.fire(
      'Good job!',
      'You Order Has Been Placed',
      'success'
    )
  }

  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h2 className='text-center display-5 color-primary'>Checkout</h2>
          <div className='col-6'>
            <h6>Name</h6>
            <input type='text' id='input' name='name' value={name} onChange={(event)=>setName(event.target.value)} />
            <br />
            <br />
            <h6>Address</h6>
            <input type='text' id='input' name='adress' value={adress} onChange={(event)=>setAdress(event.target.value)}  />
            <br />
            <br />
            <h6>Provice / State</h6>
            <input type='text' id='input' name='province' value={province} onChange={(event)=>setProvince(event.target.value)}  />
          </div>
          <div className='col-6'>
            <h6>Email</h6>
            <input type='text' id='input' name='email' value={email} onChange={(event)=>setEmail(event.target.value)}  />
            <br />
            <br />
            <h6>Phone No:</h6>
            <input type='text' id='input'name='phone' value={phone} onChange={(event)=>setPhone(event.target.value)}  />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <button id='order-btn' onClick={submit}>PLACE ORDER</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkout