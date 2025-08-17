import ListingCard from "./ListingCard"
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

const projectData = [
    {
        title: "KIT",
        slug: "kit",
        iconUrl: "img/homepage-2d-floting-images/kithomepage.png"
    },
    {
        title: "ONSIGHT",
        slug: "onsight",
        iconUrl: "img/homepage-2d-floting-images/onsighthomepage.png"
    },
    {
        title: "WELL",
        slug: "well",
        iconUrl: "img/homepage-2d-floting-images/wellhomepage.png"
    },
    {
        title: "SPUR",
        slug: "spur",
        iconUrl: "img/homepage-2d-floting-images/spurhomepage.png"
    },
    {
        title: "BEAM",
        slug: "beam",
        iconUrl: "img/homepage-2d-floting-images/beamhomepage.png"
    },
    {
        title: "CONVERSATION AVE",
        slug: "conversation-ave",
        iconUrl: "img/homepage-2d-floting-images/conversationavehomepage.png"
    },
    // {
    //     title: "SITE ARCHIVE CITE",
    //     slug: "site-archive-cite",
    //     iconUrl: "img/homepage-2d-floting-images/spurhomepage.png"
    // },
    // {
    //     title: "CODA",
    //     slug: "coda",
    //     iconUrl: "/project-icons/coda-icon.png"
    // },

    {
        title: "MOTION",
        slug: "motion",
        iconUrl: "img/homepage-2d-floting-images/motionhomepage.png"
    }
];

export default function ProjectListingPage() {
    return (
        <div className="container">
            <Navbar />
            <Row>
                {projectData.map((project) => (
                    <Col key={project.slug} xs={12} sm={6} md={4} lg={3} className="py-4">
                        <ListingCard
                            slug={project.slug}
                            title={project.title}
                            iconUrl={project.iconUrl}
                        />
                    </Col>
                ))}
            </Row> 
        </div>
    )
}