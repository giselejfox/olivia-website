
import { Link } from "react-router-dom"


export default function MainSplash() {
    return (
        <div className="main-splash d-flex flex-column justify-content-end">
            <ProjectBar />
        </div>
    )
}

function ProjectBar() {
    return (
        <div className="d-flex flex-wrap py-4 justify-content-center">
            <div className=" mx-2">
                <Link className="main-splash-link fw-bold" to='well'>WELL</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='beam'>BEAM</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='spur'>SPUR</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='conversation-ave'>CONVERSATION AVE</Link>
            </div>
            <div className="mx-2">
                <Link className="main-splash-link fw-bold" to='site-archive-cite'>SITE / ARCHIVE / SITE</Link>
            </div>
        </div>
    )
}