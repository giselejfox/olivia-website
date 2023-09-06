import React from "react"

import LetterSVG from "../../svg-banks/LetterSVGs"
import HoverLetter from "./letters/HoverLetter"
import DefaultLetter from "./letters/DefaultLetter"

export default function NameSketchAnimation() {

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





