import Navbar from "./Navbar";
import React from 'react';

import { SiInstagram } from "react-icons/si";
import { GoMail } from "react-icons/go"
import { FaLinkedinIn } from "react-icons/fa"
import { IconContext } from "react-icons";


function ModelViewer() {
    return (
        <>
            <model-viewer style={{height: "150vh", width: "100%"}} src="img/aboutmefigure.glb" camera-controls tone-mapping="commerce" poster="poster.webp"></model-viewer>  
        </>
    )
}

export default function About() {

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5" style={{paddingRight: "5rem"}}>
                        <section>
                            <h1 className="mt-5 mb-4">HI, I'M OLIVIA OOMEN</h1>
                            <p className="mb-5">I'm an interdisciplinary creative focused on using design as a tool to shift culture and improve lives. Majoring in Industrial Design and being in the Interdisciplinary Honors Program at the University of Washington has allowed me to develop and use my skills synthesizing information and solving problems through design. When I'm not in the studio designing, I'm making music, drawing, bouldering with friends, drinking coffee & tea, visiting museums, going to the library, and developing photos taken on film.</p>
                        </section>
                        <section className="mt-5 mb-5" >
                            <a className="no-underline-link" href="/resume">VIEW RESUME</a>
                        </section>
                        <section>
                            <p className="fw-bold">SAY HI!</p>
                            {/* <a className="email-link fw-bold text-decoration-none" href="mailto:oomen@uw.edu">oomen@uw.edu</a> */}
                            <div className="d-flex flex-row mt-3">
                                <IconContext.Provider value={{ size: "1.5rem", className: "global-class-name" }}>
                                    <a className="text-dark" href="https://www.instagram.com/oomenstudio/" aria-label="Instagram"><span className="me-3"><SiInstagram /></span></a>
                                    <a className="text-dark" href="mailto:oomen@uw.edu" aria-label="Email"><span className="me-3"><GoMail /></span></a>
                                    <a className="text-dark" href="https://www.linkedin.com/in/oliviaoomen/" aria-label="LinkedIn"><span className="me-3"><FaLinkedinIn /></span></a>
                                </IconContext.Provider>
                            </div>
                        </section>                   
                    </div>
                    <div className="col-12 col-md-7">
                        <ModelViewer />
                    </div>
                </div>
                
            </div>
        </div>
    )
}