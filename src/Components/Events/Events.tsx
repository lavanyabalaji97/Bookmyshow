import data from '../../Data.json'
import '../Events/Events.css'

function Events() {
  return (
    <div className="Events container pt-5">
      <div className="row">
        <h2>The best of live events</h2>
        <div className="col-lg-12">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='d-flex justify-content-between py-5'>
                  {
                    data.Events.map((item: any) => {
                      return <a href="" key={item.id}>
                        <img src={item.image}/>
                      </a>
                    })
                  }
                </div>
              </div>
              <div className="carousel-item">
                <div className='d-flex'>
                  {
                    data.Events2.map((item: any) => {
                      return <a href="" key={item.id}>
                        <img src={item.image} />
                      </a>
                    })
                  }
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events