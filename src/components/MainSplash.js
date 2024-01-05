import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from "./Navbar";
import FloatingShapesWrapper from "./FloatingShapesWrapper";

export default function MainSplash() {

    return (
        <div>
            <FloatingShapesWrapper />
            <div className="content-wrapper d-flex vh-100 flex-column justify-content-between">
                <Navbar />
                <ProjectBar />
            </div>
        </div>
    )

}

export function ProjectBar() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }
  
    return (
        <div>
            {/* ProjectBar links */}
            <div className="d-flex flex-wrap justify-content-center project-bar mb-5 pb-4">
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/well" onClick={handleLinkClick}>
                    WELL
                </Link>
                </div>
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/beam" onClick={handleLinkClick}>
                    BEAM
                </Link>
                </div>
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/spur" onClick={handleLinkClick}>
                    SPUR
                </Link>
                </div>
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/onsight" onClick={handleLinkClick}>
                    ONSIGHT
                </Link>
                </div>
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/conversation-ave" onClick={handleLinkClick}>
                    CONVERSATION AVE
                </Link>
                </div>
                <div className="mx-2">
                <Link className="main-splash-link fw-bold" to="/site-archive-cite" onClick={handleLinkClick}>
                    SITE / ARCHIVE / SITE
                </Link>
                </div>
            </div>
        </div>
        
    );
  }