import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Navbar() {

    const location = useLocation();
    
    return (
        <nav className="navbar navbar-expand-lg py-5 px-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/work">OLIVIA OOMEN</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-middle" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            className={"nav-link active fw-bold " + ( (location.pathname !== '/about' & location.pathname !== '/sole-opinion') ? "text-decoration-line-through" : '')}
                            to="/work"
                        >WORK</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={"nav-link active fw-bold " + (location.pathname === '/about' ? "text-decoration-line-through" : '')}
                            to="/about"
                        >ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className={"nav-link active fw-bold " + (location.pathname === '/sole-opinion' ? "text-decoration-line-through" : '')}
                            to="/sole-opinion"
                        >SOLE OPINION</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}