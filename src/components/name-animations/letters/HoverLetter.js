
import React, { useState } from 'react'

export default function HoverLetter({ defaultSvg, hoverSvg }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);

        setTimeout(function(){
            setIsHovered(false)
        }, 1500);
    };

    return (
        <div
            className="hover-object d-flex flex-column justify-content-center"
            onMouseEnter={handleMouseEnter}
        >
            {isHovered ? hoverSvg : defaultSvg }
        </div>
    );
}