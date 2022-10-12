import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact = (props) => {
  const [name ,setname] = useState('');
  const [email ,setemail] = useState('');
  const [password ,setpassword] = useState('');
  const [msg ,setmsg] = useState('');


  const submitData = async (event)=>{
    event.preventDefault();
    

    let result =await fetch('http://localhost:5000/contact',{
      method : 'post',
      body : JSON.stringify({name,email,password,msg}),
      headers:{
        'content-type' : 'application/JSON'
      }

    })
    setname("");
    setemail("");
    setpassword("");
    setmsg("");
    result=await result.json()
    if(!name||!email  ||!msg){
      Swal.fire(
        'Oops?',
        'PLease Fill All Input Fields?',
        'error'
      )
    // alert("PLease Fill ALl details")
    // props.showAlert("Please Fill all input fields","info")
    }else{
      Swal.fire(
        'Good job!',
        'Thank you for getting in touch! We will get you back very soon',
        'success'
      )


      // alert("YOur Message has venn sent succesfully")
      // props.showAlert("Your Message Has Been Sent Successfully","success")
    }
    console.log(result);
    



  
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
          </div>

          <div className='col-md-6' id='form'>
           <form >
           <h1 className='text-center display-5 color-primary'>CONTACT US</h1>
            <h6>Name</h6>
            <input type='text'value={name} name='name' onChange={(event)=>setname(event.target.value)} />
            <h6>Email</h6>
            <input type='email' value={email} name='email'  onChange={(event)=>setemail(event.target.value)}/>
            <h6>Message</h6>
            <textarea rows="5" cols="65" placeholder='Enter Your Message here' name='msg' value={msg}  onChange={(event)=>setmsg(event.target.value)}></textarea>
            <button type='submit' id='submit' onClick={submitData}>submit</button>
            <br />
            <br />

             <br />
           </form>
          </div>
          
          <div className='col-md-3'>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact