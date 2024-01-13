import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";

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

export function SlickSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 50,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
    );

}

