import '../Footer/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='container p-2'>
            <div className="row">
                <div className="col-lg-12  d-flex justify-content-between">
                    <div className='d-flex'>
                        <img className="bwc__sc-au4qa5-50 gipVVh houseimage" alt="hut" src="//in.bmscdn.com/webin/common/icons/hut.svg"></img>
                        <p className='text-white'><b>List Your show</b>   Got a show,event,activity or a great experience?partner with us & get listed on BookMyShow</p>
                    </div>
                    <div className='pt-3'>
                        <button type="button" className="btn btn-danger">contact today!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer