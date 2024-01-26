import { SiInstagram } from "react-icons/si";
import { GoMail } from "react-icons/go"
import { FaLinkedinIn } from "react-icons/fa"
import { IconContext } from "react-icons";
import Navbar from "./Navbar";


export default function About() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="about-container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-lg-5">
                            <h1 className="about-intro d-flex flex-column fw-bold">
                                <span>Hi, I'm</span>
                                <span>Olivia Oomen!</span>
                            </h1>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                        <div className="col col-lg-6">
                            <img className="w-100" src="img/croppedsquareselfportrait.gif" alt="sketch outline gif of Olivia spinning" />
                        </div>
                    </div>
                    <div className="row align-items-start my-5">
                        <div className="col-12 col-lg-5">
                            <h2 className="fw-bold">I solve problems through design</h2>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                        <div className="col col-lg-6">
                            <p>I'm an interdisciplinary creative focused on using design as a tool to shift culture and improve lives. Majoring in Industrial Design and being in the Interdisciplinary Honors Program at the University of Washington has allowed me to develop and use my skills synthesizing information and solving problems through design.</p>
                            <p>When I'm not in the studio designing, I'm making music, drawing, bouldering with friends, drinking coffee & tea, visiting museums, going to the library, and developing photos taken on film.</p>
                        </div>
                    </div>
                    <div className="row align-items-start my-5">
                        <div className="col-12 col-lg-5">
                            <h2 className="fw-bold">Selected accolades & experience</h2>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                        <div className="col col-lg-6">
                            <ul className="no-bullets">
                                <li>Honors Undergraduate Scholar Award, University of Washington</li>
                                <li>Mary Gates Student Endowment Research Scholarship Recipient</li>
                                <li>Interior Design Intern, Objekts</li>
                                <li>AR/VR Exhibit Designer, University of Washington</li>
                                <li>Medical Technology Research Designer, University of Washington</li>
                                <li>Illustrator, The Daily</li>
                                <li>Design For America, Member and Project Lead</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-start my-5 pb-5">
                        <div className="col-12 col-lg-5">
                            <h2 className="fw-bold">Say Hi</h2>
                        </div>
                        <div className="col-0 col-lg-1"></div>
                        <div className="col col-lg-6">
                            <a className="email-link fw-bold text-decoration-none" href="mailto:oomen@uw.edu">oomen@uw.edu</a>
                            <div className="d-flex flex-row mt-3">
                                <IconContext.Provider value={{ size: "1.5rem", className: "global-class-name" }}>
                                    <a href="https://www.instagram.com/oomenstudio/" aria-label="Instagram"><span className="circle me-3"><SiInstagram /></span></a>
                                    <a href="mailto:oomen@uw.edu" aria-label="Email"><span className="circle me-3"><GoMail /></span></a>
                                    <a href="https://www.linkedin.com/in/oliviaoomen/" aria-label="LinkedIn"><span className="circle me-3"><FaLinkedinIn /></span></a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}