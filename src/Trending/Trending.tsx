import '../Trending/Trending.css'

function Trending() {
    return (
        <div className='Trending container'>
            <div className="row">
                <div className="col-lg-12">
                    <h2>Trending Searches Right Now</h2>
                    <div className='d-flex gap-3'>
                        <div className='movies'>
                            <a href="">
                                <h5>Jailer</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>kushi</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>Jawan</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>king of kotha</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>openheimer</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>DD Returns</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>Barbie</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>Dream Girl 2</h5>
                                <p>movies</p>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-12 d-flex gap-3 mt-3'>
                        <div className='movies'>
                            <a href="">
                                <h5>saalar</h5>
                                <p>movies</p>
                            </a>
                        </div>
                        <div className='movies'>
                            <a href="">
                                <h5>Rockey Aur Rani Kii prem khaani</h5>
                                <p>movies</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending