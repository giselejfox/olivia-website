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

export function ResponsiveSelectionCarousel({ imageData, project }) {

    const carouselElements = imageData.map((image, index) => {
        return ( 
            <div key={index} className='d-flex justify-content-center'>
                <img src={"img/" + project + "/" + image.imageTitle} className="d-block project-carousel-image" alt={image.altText} />
            </div>
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 2,
        prevArrow: <ArrowBackIosIcon sx={{ color: "black" }} />,
        nextArrow: <ArrowForwardIosIcon sx={{ color: "black" }} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='container collage-carousel'>
          <Slider {...settings}>
            {carouselElements}
          </Slider>
        </div>
      );
}