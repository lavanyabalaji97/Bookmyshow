import data from '../Data.json'
import '../Explore/Explore.css'

function Explore() {
    return (
        <div className='Explore container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className='d-flex justify-content-between'>
                    <h2>Explore Fun Activities</h2>
                    <a href="" className='text-decoration-none text-danger pt-5'>See All</a>
                    </div>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='d-flex'>
                                    {
                                        data.explore.map((item: any) => {
                                            return <a href="" className='text-decoration-none text-dark'>
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
            <div className='bg-white p-2 m-4'>
                <a href='' className='text-decoration-none text-black homebtn'>Home</a>
            </div>
        </div>

    )
}

export default Explore