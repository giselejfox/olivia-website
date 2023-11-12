import React, { useState } from "react";
import { Link } from "react-router-dom"

import NameColorAnimation from "./name-animations/NameColorAnimation"
import NameSketchAnimation from "./name-animations/NameSketchAnimation"
import ImagesBasedOnCursor from "./name-animations/ImagesBasedOnCursor";
import FloatingImages from "./name-animations/FloatingImages";
import CursorFollow3D from "./name-animations/CursorFollow3D";

export default function MainSplash() {

    const [currentAnimation, setCurrentAnimation] = useState(1);

    // Cycles through numbers 1-n (n being after the %)
    // const handleClick = () => {
    //     setCurrentAnimation((currentAnimation % 4) + 1);
    // };

    return (
        <div className="main-splash d-flex flex-column justify-content-between">
            <div className="main-splash-spacer"></div>     {/* First div is just to push the NameAnimation to the middle and ProjectBar to the bottom */}
            {/* {currentAnimation === 1 && <NameColorAnimation />}
            {currentAnimation === 2 && <NameSketchAnimation />}
            {currentAnimation === 3 && <ImagesBasedOnCursor />} */}
            {/* {currentAnimation === 4 && <FloatingImages />} */}
            {/* <FloatingImages /> */}
            <CursorFollow3D />
            <ProjectBar />
        </div>
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
                <Link className="main-splash-link fw-bold" to='/onsight'>ONSIGHT</Link>
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