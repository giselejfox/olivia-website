import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function ImageCarousel({ project, imageData }) {

    const carouselImages = imageData.map((image) => {
        return (
            <Carousel.Item>
                <img src={"img/" + project + "/" + image.imageTitle} className="d-block project-carousel-image" alt={image.altText} />
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