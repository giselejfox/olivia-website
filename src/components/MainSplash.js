import { useState } from "react"
import { Link } from "react-router-dom"

import NameColorAnimation from "./name-animations/NameColorAnimation"
import NameSketchAnimation from "./name-animations/NameSketchAnimation"


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