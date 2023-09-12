import React, { useState } from 'react'

import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TestUpperSVG, upperSVGData } from '../../svg-banks/TestUpperSVG';
import { TestLowerSVG, lowerSVGData } from '../../svg-banks/TestLowerSVG';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function CollageSection() {

    const [upperNum, setUpperNum] = useState(1)
    const [lowerNum, setLowerNum] = useState(1)
    const [currentSelection, setCurrentSelection] = useState("uppers")

    const handleSetUpperNum = (num) => { setUpperNum(num) }
    const handleSetLowerNum = (num) => { setLowerNum(num) }
    const handleSetCurrentSelection = (selection) => { setCurrentSelection(selection) }

    return (
        <div className="collage-section container">
            <div className='d-flex flex-column'>
                <h2 className='fw-bold mb-0 me-3'>DREAM SHOE</h2>
                <p className='fst-italic my-3 mb-5'>Choose from the different uppers, lowers, and accessories to create your dream shoe</p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='collage-result mb-5'>
                    <TestUpperSVG num={upperNum} svgClasses={"collage-upper-svg"}/>
                    <TestLowerSVG num={lowerNum} wrapperClasses={"collage-element-lower"} svgClasses={"collage-lower-svg"} />
                </div>
                <SelectionButtons currentSelection={currentSelection} handleSetCurrentSelection={handleSetCurrentSelection}/>
                {/* Based on what we can select, show the appropriate carousel */}
                {currentSelection === "uppers" && <ResponsiveSelectionCarousel selection={"uppers"} selectionData={upperSVGData} handleSetNum={handleSetUpperNum} />}
                {currentSelection === "lowers" && <ResponsiveSelectionCarousel selection={"lowers"} selectionData={lowerSVGData} handleSetNum={handleSetLowerNum} />}
            </div>
        </div>
    )
}



function SelectionButtons({ currentSelection, handleSetCurrentSelection }) {

    const handleClick = (e) => { handleSetCurrentSelection(e.target.value) }

    return (
        <div className='mb-4'>
            <input
                type="radio"
                className="btn-check"
                name="options-base"
                id="option-uppers"
                value="uppers"
                checked={currentSelection === "uppers"}
                onChange={handleClick}
            />
            <label className={"btn border-0 fw-bold " + (currentSelection === "uppers" ? "text-decoration-line-through" : "")} htmlFor="option-uppers">UPPERS</label>
            <input
                type="radio"
                className="btn-check"
                name="options-base"
                id="option-lowers"
                value="lowers"
                checked={currentSelection === "lowers"}
                onChange={handleClick}
            />
            <label className={"btn border-0 fw-bold " + (currentSelection === "lowers" ? "text-decoration-line-through" : "")} htmlFor="option-lowers">LOWERS</label>
        </div>
    )
}



function ResponsiveSelectionCarousel({ selection, selectionData, handleSetNum }) {

    // Change the element in the result box to the one we clicked on
    const handleItemClick = (itemNum) => { handleSetNum(itemNum) }

    const carouselElements = selectionData.map((item) => {
        return ( 
            <div key={item.id} className='d-flex justify-content-center'>
                <button
                    aria-label={`Select ${item.label}`}
                    onClick={() => handleItemClick(item.id)}
                    className="carousel-button"
                >
                    {selection === "uppers" && <TestUpperSVG num={item.id} svgClasses={"carousel-svg"}/>}
                    {selection === "lowers" && <TestLowerSVG num={item.id} svgClasses={"carousel-svg"}/>}
                </button>
            </div>
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 2,
        prevArrow: <ArrowBackIosIcon sx={{ color: "black" }} />,
        nextArrow: <ArrowForwardIosIcon sx={{ color: "black" }} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className='collage-carousel'>
          <Slider {...settings}>
            {carouselElements}
          </Slider>
        </div>
      );
}









