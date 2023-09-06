import { useState } from "react"
import { Link } from "react-router-dom"
import LetterSVG from "../svg-banks/LetterSVGs"


export default function MainSplash() {
    return (
        <div className="main-splash d-flex flex-column justify-content-between">
            {/* First div is just to push the NameAnimation to the middle and ProjectBar to the bottom */}
            <div className="main-splash-spacer"></div> 
            {/* <NameColorAnimation /> */}
            <NameSketchAnimation />
            <ProjectBar />
        </div>
    )
}

function NameSketchAnimation() {

    const firstName = "OLIVIA"
    const lastName = "OOMEN"

    const firstNameElements = firstName.split('').map((letter) => {
        return (
            <HoverLetter 
                defaultSvg={<DefaultLetter letter={letter} />} 
                hoverSvg={<LetterSVG styledLetter={"dotted-" + letter} />} 
            />
        )
    })

    const lastNameElements = lastName.split('').map((letter) => {
        return (
            <HoverLetter 
                defaultSvg={<DefaultLetter letter={letter} />} 
                hoverSvg={<LetterSVG styledLetter={"dotted-" + letter} />} 
            />
        )
    })

    return (
        <h1 className="pb-4 justify-self-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row">
                    {firstNameElements}
                </div>
                <div className="d-flex flex-row">
                    {lastNameElements}
                </div>
            </div>
        </h1>
    )
}

function NameColorAnimation() {

    // Whenever someone hovers over a letter it changes color and moves in a random direction and back
    // after a little bit

    const firstName = "OLIVIA"
    const lastName = "OOMEN"

    const moveColorLetter = (e) => {
        // Change it's color and position to random options
        e.target.style.color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        e.target.style.top = -30 + Math.random() * 60 + "px";
        e.target.style.left = -30 + Math.random() * 60 + "px";

        // Change it back after a certain period of time
        setTimeout(function(){
            e.target.removeAttribute("style")
        }, 1500);
    }

    const firstNameElements = firstName.split('').map((letter) => {
        return <div onMouseOver={moveColorLetter} className="main-splash-letter">{letter}</div>
    })

    const lastNameElements = lastName.split('').map((letter) => {
        return <div onMouseOver={moveColorLetter} className="main-splash-letter">{letter}</div>
    })

    return (
        <h1 className="pb-4 justify-self-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row">
                    {firstNameElements}
                </div>
                <div className="d-flex flex-row">
                    {lastNameElements}
                </div>
            </div>
        </h1>
    )
}

function ProjectBar() {
    return (
        <div className="d-flex flex-wrap justify-content-center project-bar mb-5 pb-4">
            <div className=" mx-2">
                <Link className="main-splash-link fw-bold" to='/well'>WELL</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='/beam'>BEAM</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='/spur'>SPUR</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='/conversation-ave'>CONVERSATION AVE</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='/site-archive-cite'>SITE / ARCHIVE / SITE</Link>
            </div>
        </div>
    )
}


function DefaultLetter({letter}) {
    return (
        <div className="main-splash-letter">{letter}</div>
    )
}


function HoverLetter({ defaultSvg, hoverSvg }) {
    const [isHovered, setIsHovered] = useState(true);

    const handleMouseEnter = () => {
        setIsHovered(true);

        setTimeout(function(){
            setIsHovered(false)
        }, 1500);
    };

    return (
        <div
            className="hover-object d-flex align-items-center justify-content-center align-content-center"
            onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
            {isHovered ? hoverSvg : defaultSvg }
        </div>
    );
}