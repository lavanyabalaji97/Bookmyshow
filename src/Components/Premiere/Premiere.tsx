import button from '../../Asserts/button.avif'
import '../Movies/Movies.css'
import data from '../../Data.json'
import '../Premiere/premiere.css'
import '../Movies/Movies.css'

function Moviessection() {
    return (
        <div className='premiere movies pt-5 container-fluid' style={{ backgroundColor: "#2b3149" }}>
            <div className="row">
                <div className="col-lg-12  padding">
                    <div>
                        <img src={button} alt="" className='w-100' />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-white'>
                            <h3>premieres</h3>
                            <p>Brand new releases every friday</p>
                        </div>
                        <div>
                            <a href="" className='text-decoration-none text-danger'>See All</a>
                        </div>
                    </div>
                    <div id="carouselExample3" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='d-flex'>
                                    {
                                        data.premiere.map((item: any) => {
                                            return <a href="" className='text-decoration-none'>
                                                <img src={item.image} alt="..." />
                                                <h4>{item.title}</h4>
                                                <p>{item.paragraph}</p>
                                            </a>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex'>
                                    {
                                        data.premiere1.map((item: any) => {
                                            return <a href="" className='text-decoration-none'>
                                                <img src={item.image} alt="..." />
                                                <h4>{item.title}</h4>
                                                <p>{item.paragraph}</p>
                                            </a>
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moviessection