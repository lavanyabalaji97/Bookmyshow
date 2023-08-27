import data from '../Data.json'
import '../Explore/Explore.css'
import '../Explore/Explore.css'

function Explore() {
    return (
        <>
            <div className='movies container p-3'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className='d-flex justify-content-between'>
                            <h2>Explore Fun Activities</h2>
                            <a href="" className='text-decoration-none text-danger'>See all</a>
                        </div>
                        <div id="carouselExampleexplore" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='d-flex'>
                                        {
                                            data.explore.map((item: any) => {
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
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleexplore" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleexplore" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid  bg-white p-3  homebtn'>
                <a href='' className='text-decoration-none  text-black' style={{ marginLeft: "130px" }}>Home</a>
            </div>
        </>
    )
}

export default Explore