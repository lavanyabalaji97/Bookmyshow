
interface props {
    image: string,
    title: string,
    paragraph: string,
}

function productCard({ image, title, paragraph }: props) {
    return (
        <div className="container">
            <div className="row">
                <a href="#">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{paragraph}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div >
    )
}

export default productCard