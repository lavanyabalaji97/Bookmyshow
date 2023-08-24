import '../Listitems/List.css'

function List() {
    return (
        <div>
            <div className='list-items container-fluid'>
                <div className='list-bgcolor row'>
                    <div className="col-lg-12 d-flex justify-content-around">
                        <ul className='d-flex gap-4'>
                            <li><a href="">Movies</a></li>
                            <li><a href="">stream</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">sports</a></li>
                            <li><a href="">Activities</a></li>
                            <li><a href="">Buzz</a></li>
                        </ul>

                        <ul className='d-flex gap-4'>
                            <li><a href="">ListYourShow</a></li>
                            <li><a href="">corporates</a></li>
                            <li><a href="">offers</a></li>
                            <li><a href="">Giftcards</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List