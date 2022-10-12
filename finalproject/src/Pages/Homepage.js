import React from 'react'
import Carousel from '../components/Carousel'
import Mens from './Mens'
import Data from '../components/Data'
import ProductCard from './ProductCard'

const Homepage = ({onAdd}) => {
    
    return (
        <div>
            <Carousel />
            <br />
            <br />
            <h2 id='fprod'  className='text-center'>Featured Products</h2>
            <Mens />



























            {/* <br />
            <br />
            <h1 id='h1'>Featured Products </h1>
            <center><hr id='hr' /></center>
            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    {
                        Data.map((prod) => {
                            return (
                                <div className='col-md-4 mb-4'>
                                    <ProductCard prod={prod} onAdd={onAdd} />
                                </div>
                            )
                        })
                    }

                </div>
            </div> */}
        </div>
    )
}

export default Homepage