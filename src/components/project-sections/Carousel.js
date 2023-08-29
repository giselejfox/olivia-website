

export default function Carousel({ project, imageData }) {

    const carouselImages = imageData.map((image) => {
        return (
            <div className="carousel-item active">
                <img src={"img/" + project + "/" + image.imageTitle} className="d-block w-100" alt={image.altText} />
            </div>
        )
    })

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide p-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselImages}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}