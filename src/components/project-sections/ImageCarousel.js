import Carousel from 'react-bootstrap/Carousel';

export function ImageCarousel({ project, imageData }) {

    const carouselImages = imageData.map((image) => {
        return (
            <Carousel.Item className=''>
                <div className='d-flex justify-content-center carousel-item-wrapper'>
                    <img src={"img/" + project + "/" + image.imageTitle} className="d-block project-carousel-image" alt={image.altText} />
                </div>
            </Carousel.Item>
        )
    })

    return (
        <div className='container' style={{background: "white"}}>
            <Carousel data-bs-theme="dark" className='image-carousel' interval={1500} touch={true}>
                {carouselImages}
            </Carousel>
        </div>
    )
}

export function SmallImageCarousel({ project, imageData }) {

    const carouselImages = imageData.map((image) => {
        return (
            <Carousel.Item>
                <img src={"img/" + project + "/" + image.imageTitle} className="d-block project-carousel-image" alt={image.altText} />
            </Carousel.Item>
        )
    })

    return (
        <div className='container' style={{background: "white", height: "50vh"}}>
            <Carousel data-bs-theme="dark" className='image-carousel'>
                {carouselImages}
            </Carousel>
        </div>
    )
}

