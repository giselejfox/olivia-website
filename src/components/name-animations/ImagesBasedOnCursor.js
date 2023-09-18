import { useState, useEffect, useRef } from "react"


export default function ImagesBasedOnCursor() {

    // The image in the background changes based on where your cursor is on the screen

    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(1);
    const [imageCache, setImageCache] = useState({});
    const containerRef = useRef(null);

    useEffect(() => {
        // Function to preload images
        const preloadImages = () => {
            const imagesToPreload = {};
            for (let i = 1; i <= 5; i++) {
                const image = new Image();
                image.src = `/img/main-splash-image-test/hand-${i}.JPG`;
                imagesToPreload[i] = image;
            }
            setImageCache(imagesToPreload);
        };

        // Call the preloadImages function
        preloadImages();

        // Function to update background image based on cursor position
        const updateBackgroundImage = (e) => {
            const containerWidth = containerRef.current.clientWidth;
            const cursorX = e.clientX - containerRef.current.getBoundingClientRect().left;
            const imageCount = 5;
            const newIndex = Math.floor((cursorX / containerWidth) * imageCount) + 1;
            setCurrentBackgroundImage(newIndex);
        };

        const containerRefCurrent = containerRef.current
        // Attach mousemove event listener to the container
        containerRefCurrent.addEventListener("mousemove", updateBackgroundImage);

        return () => {
            // Remove event listener when component unmounts
            containerRefCurrent.removeEventListener("mousemove", updateBackgroundImage);
        };
    }, []);

    return (
        <div className="d-flex align-items-center justify-content-center" ref={containerRef}>
            <img style={{height: "20rem"}}src={imageCache[currentBackgroundImage]?.src || ''} alt="hand in motion" />
        </div>
    )
}