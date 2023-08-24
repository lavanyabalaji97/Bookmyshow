import data from '../Data.json'

function Popular() {
    return (
        <div className='movies container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className='d-flex justify-content-between'>
                    <h2>popular Events</h2>
                    <a href="" className='text-decoration-none text-danger'>See All</a>
                    </div>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='d-flex'>
                                    {
                                        data.popular.map((item: any) => {
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular