import Carousel from 'react-bootstrap/Carousel';

export default function ImageCarousel({ project, imageData }) {

    const carouselImages = imageData.map((image) => {
        return (
            <Carousel.Item>
                <img src={"img/" + project + "/" + image.imageTitle} className="d-block w-100" alt={image.altText} />
            </Carousel.Item>
        )
    })

    return (
        <div className='container'>
            <Carousel data-bs-theme="dark">
                {carouselImages}
            </Carousel>
        </div>
    )
}