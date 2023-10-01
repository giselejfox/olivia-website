import React, { useState } from 'react'

import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TestUpperSVG, upperSVGData } from '../../svg-banks/TestUpperSVG';
// import { TestLowerSVG, lowerSVGData } from '../../svg-banks/TestLowerSVG';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const lowerSVGData = [
    { id: 1, label: 'Rainbow rubber Sole'},
    { id: 2, label: 'Clear rubber chunky heel'},
    { id: 3, label: 'Clear rubber chunky heel'},
    { id: 4, label: 'Blue wavey plastic sole'},
    { id: 5, label: 'Futuristic metal sole'}
];



export default function CollageSection() {

    const [upperNum, setUpperNum] = useState(1)
    const [lowerNum, setLowerNum] = useState(1)
    const [currentSelection, setCurrentSelection] = useState("upper")

    const handleSetUpperNum = (num) => { setUpperNum(num) }
    const handleSetLowerNum = (num) => { setLowerNum(num) }
    const handleSetCurrentSelection = (selection) => { setCurrentSelection(selection) }

    console.log(upperNum)

    return (
        <div className="collage-section container">
            <div className='d-flex flex-column'>
                <h2 className='fw-bold mb-0 me-3'>DREAM SHOE</h2>
                <p className='fst-italic my-3 mb-5'>Choose from the different upper, lower, and accessories to create your dream shoe</p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='collage-result mb-5'>
                    {/* <TestUpperSVG num={upperNum} svgClasses={"collage-upper-svg"}/> */}
                    <ResultUpperImage num={upperNum} />
                    <ResultLowerImage num={lowerNum} />
                    {/* <TestLowerSVG num={lowerNum} wrapperClasses={"collage-element-lower"} svgClasses={"collage-lower-svg"} /> */}
                </div>
                <SelectionButtons currentSelection={currentSelection} handleSetCurrentSelection={handleSetCurrentSelection}/>
                {/* Based on what we can select, show the appropriate carousel */}
                {currentSelection === "upper" && <ResponsiveSelectionCarousel selection={"upper"} selectionData={upperSVGData} handleSetNum={handleSetUpperNum} />}
                {currentSelection === "lower" && <ResponsiveSelectionCarousel selection={"lower"} selectionData={lowerSVGData} handleSetNum={handleSetLowerNum} />}
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
                id="option-upper"
                value="upper"
                checked={currentSelection === "upper"}
                onChange={handleClick}
            />
            <label className={"btn border-0 fw-bold " + (currentSelection === "upper" ? "text-decoration-line-through" : "")} htmlFor="option-upper">UPPERS</label>
            <input
                type="radio"
                className="btn-check"
                name="options-base"
                id="option-lower"
                value="lower"
                checked={currentSelection === "lower"}
                onChange={handleClick}
            />
            <label className={"btn border-0 fw-bold " + (currentSelection === "lower" ? "text-decoration-line-through" : "")} htmlFor="option-lower">LOWERS</label>
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
                    {/* {selection === "upper" && <TestUpperSVG num={item.id} svgClasses={"carousel-svg"}/>}
                    {selection === "lower" && <TestLowerSVG num={item.id} svgClasses={"carousel-svg"}/>} */}
                    <MenuImage type={selection} number={item.id} />
                </button>
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
        <div className='collage-carousel'>
          <Slider {...settings}>
            {carouselElements}
          </Slider>
        </div>
      );
}


function MenuImage({ type, number}) {
    return <img className={"carousel-svg"} src={"img/sole-opinion/" + type + number + ".png"} alt={type} />
}

function ResultUpperImage({ num }) {
    // return <img className={"collage-upper-svg"} src={"img/sole-opinion/upper" + num + ".png"} alt={"upper"} />
    return <img className='collage-upper-svg' src="img/sole-opinion/upper1-full.png" />
}

function ResultLowerImage({ num }) {
    return (
        <div className="collage-element-lower">
            {/* <img className="collage-lower-svg" src={"img/sole-opinion/lower" + num + ".png"} alt="lower" /> */}
            <img className='collage-lower-svg' src="img/sole-opinion/lower1-full.png" />
        </div>
    )
}









