import React from 'react';
import desktopslider from '../../../src/Asserts/desktopslider.avif'
import blueslider from '../../../src/Asserts/blueslider.avif'
import manslider from '../../../src/Asserts/manslider.avif'
import singerslider from '../../../src/Asserts/singerslider.avif'
import '../Sliders/Sliders.css'

function Sliders() {
    return (
        <div className='sliders container p-2'>
            <div className="row">
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={desktopslider} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={blueslider} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={manslider} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={singerslider} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sliders;
