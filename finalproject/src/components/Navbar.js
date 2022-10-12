import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Navbar = () => {
    const auth =localStorage.getItem('login')
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.clear()

        Swal.fire(
            'Logout!',
            'You Are Logout From Website',
            'success'
          )
        
        navigate('/');
    } 
    return (
        <div>

            <center><img src="../images/logo.jpg" id='logo' /></center>
            <nav className="navbar navbar-expand-lg navbar-light " id='one'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {
                    localStorage.getItem('login') ?
                        <>
                            <div className="collapse navbar-collapse" id="abc">
                                <ul className='navbar-nav'>
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" >HOME </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="mens" className="nav-link" >MENS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="women" className="nav-link">WOMENS FASHION</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/cart" className="nav-link "  >CART</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="contact" className="nav-link " >CONTACT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link " onClick={logout} >LOGOUT</Link>
                                    </li>
                                </ul>
                            </div>


                        </>
                        :
                        <>
                            <div className="collapse navbar-collapse" id="abc">
                                <ul className='navbar-nav'>
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" >HOME </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="contact" className="nav-link " >CONTACT</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to="/cart" className="nav-link "  >CART</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link "  >LOGIN</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="register" className="nav-link "  >REGISTER</Link>
                                    </li>


                                </ul>

                            </div>

                        </>
                }








            </nav>

        </div>
    )
}

export default Navbar


{/* <ul className="navbar-nav">

<li className="nav-item active">
    <Link to="/" className="nav-link" >HOME </Link>
</li>
<li className="nav-item">
    <Link to="mens" className="nav-link" >MENS</Link>
</li>
<li className="nav-item">
    <Link to="women" className="nav-link">WOMENS FASHION</Link>
</li>
<li className="nav-item">
    <Link to="children" className="nav-link "  >CHILDREN</Link>
</li>
<li className="nav-item">
    <Link to="contact" className="nav-link " >CONTACT</Link>
</li>
<li className="nav-item">
    <Link to="cart" className="nav-link "  >CART</Link>
</li>
<li className="nav-item">
    <Link to="login" className="nav-link "  >LOGIN</Link>
</li>
<li className="nav-item">
    <Link to="register" className="nav-link "  >REGISTER</Link>
</li>
<li className="nav-item">
    <Link to="logout" className="nav-link "  >LOGOUT</Link>
</li>
</ul> */}