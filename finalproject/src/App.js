import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Mens from './Pages/Mens'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Women from './Pages/Women'
import Contact from './Pages/Contact'
import Singlepage from './Pages/Singlepage'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Footer from './components/Footer'
import Usersdetail from './Admin Pages/Usersdetail'
import PrivateComp from './components/PrivateComp'
import Checkout from './Pages/Checkout'
import Addproduct from './Admin Pages/Addproduct'
import Admin from './Admin Pages/Admin'
import Alert from './components/Alert'
import AllProducts from './Admin Pages/AllProducts'
import Update from './Admin Pages/Update'

const App = () => {
  

  //function for alerts

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }


  return (
    
    <> 



      <BrowserRouter>
        <Alert alert={alert} />
        <div>
          <Navbar />
          <Routes>
            <Route element={<PrivateComp />}>
              <Route path="mens" element={<Mens />} />
              <Route path="women" element={<Women />} /> 
              <Route path="women/:id" element={<Singlepage />} /> 
              <Route path="/checkout" element={<Checkout />} />
            {/* Routes for Admin pages */}
              <Route path="admin" element={<Admin />} />
              <Route path="/user-detail" element={<Usersdetail />} />
              <Route path="/add-product" element={<Addproduct />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/update/:id" element={<Update />} />


            </Route>

            <Route exact path="/" element={<Homepage />} />
            <Route path="/mens/:id" element={<Singlepage />} />
            <Route path="contact" element={<Contact showAlert={showAlert} />} />
            <Route path="cart" element={<Cart />}/>
            <Route path="register" element={<Register showAlert={showAlert} />} />
            <Route path="login" element={<Login showAlert={showAlert} />} />
          </Routes>
          <Footer />
        </div>


      </BrowserRouter>



    </>


  )
}


export default App















