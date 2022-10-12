import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../images/banner.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../images/2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../images/3.jpg"alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only"></span>
                </a>
            </div>


        </div>
    )
}

export default Carousel