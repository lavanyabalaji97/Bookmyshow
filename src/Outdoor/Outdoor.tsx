import data from '../Data.json'

function Outdoor() {
    return (
        <div className='movies outdoor container p-3'>
            <div className="row">
                <div className="col-lg-12">
                    <div className='d-flex justify-content-between'>
                        <h2>outdoor Events</h2>
                        <a href="" className='text-decoration-none text-danger'>See all</a>
                    </div>
                    <div id="carouselExampleoutdoor" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='d-flex'>
                                    {
                                        data.outdoor.map((item: any) => {
                                            return <a href="" className='text-decoration-none'>
                                                <img src={item.image} alt="..." />
                                                <h5>{item.title}</h5>
                                                <p>{item.paragraph}</p>
                                            </a>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex'>
                                    {
                                        data.Movies1.map((item: any) => {
                                            return <a href="" className='text-decoration-none'>
                                                <img src={item.image} alt="..." />
                                                <h5>{item.title}</h5>
                                                <p>{item.paragraph}</p>
                                            </a>
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleoutdoor" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleoutdoor" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outdoor