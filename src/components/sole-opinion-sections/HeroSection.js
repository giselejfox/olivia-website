import { useState, useEffect } from "react"


export default function HeroSection() {

    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(1);
    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        // Function to preload images
        const preloadImages = () => {
        const imagesToPreload = {};
        for (let i = 1; i <= 35; i++) {
            const image = new Image();
            image.src = `/img/sole-opinion/sole-opinion-title-${i}.png`;
            imagesToPreload[i] = image;
        }
        setImageCache(imagesToPreload);
        };

        // Call the preloadImages function
        preloadImages();

        // Function to update background image
        const updateBackgroundImage = () => {
        setCurrentBackgroundImage((prevImage) => {
            return prevImage === 35 ? 1 : prevImage + 1;
        });
        };

        const interval = setInterval(updateBackgroundImage, 200);

        return () => {
        clearInterval(interval);
        };
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${imageCache[currentBackgroundImage]?.src || ''})`,
    }

    return (
        <div className="sole-opinion-hero-section" style={backgroundStyle}>
            <div className="container vh-100 d-flex flex-column justify-content-center">
                <h1 className="fw-bold d-flex flex-column">
                    <span>SOLE</span> 
                    <span>OPINION</span>
                </h1>
                <p className="fw-bold w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}