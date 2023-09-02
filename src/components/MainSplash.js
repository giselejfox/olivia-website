
import { Link } from "react-router-dom"


export default function MainSplash() {
    return (
        <div className="main-splash d-flex flex-column justify-content-between">
            {/* First div is just to push the NameAnimation to the middle and ProjectBar to the bottom */}
            <div className="main-splash-spacer"></div> 
            <NameAnimation />
            <ProjectBar />
        </div>
    )
}

function NameAnimation() {

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