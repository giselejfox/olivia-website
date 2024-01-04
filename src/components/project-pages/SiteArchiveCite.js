import React from 'react';
import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"

export default function SiteArchiveSite() {

    const finalTwoImages = [
        {
            imageTitle: "spurRender3.jpeg",
            altText: "white modular cowboy boot in a desert at sunset"
        },
        {
            imageTitle: "spurRender4.jpeg",
            altText: "picture of man wearing modular black cowboy boot"         
        }
    ]
    
    return (
        <div>
            <div style={{background:"white"}}>

                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="SITE / ARCHIVE / CITE"
                    description="A mixed reality art intervention based on the National Archives at Seattle."
                    projectType="COLLABORATORS: AMARANTH BORSUK, CARRIE BODLE"
                    duration="NOV 2021 - JUN 2023"
                    date="FIRST SHOW: MAY 2023"
                /> 

                <div className='row'>
                    <div className='col-12 col-lg-9 d-flex justify-content-center align-items-center'>
                        <img className="col-image" src="img/SiteArchiveSite/sac-intro-1.jpeg" alt="two long posters taped to the wall" />
                    </div>
                    <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center'>
                        <img className="col-image" src="img/SiteArchiveSite/sac-intro-2.jpeg" alt="two long posters taped to the wall" />
                    </div>
                </div>

                <Paragraph text="Site/Archive/Cite is an augmented reality art intervention based on the National Archives at Seattle that interrogates the relationship of archive to place and public. At a time when many institutions hold out hope for digital accessibility to broaden the audience for their holdings, the realities of what gets digitized and who has access do not always live up to those heightened expectations. What is cited on a website may only be a fraction of the materials available onsite, providing a partial—and highly subjective—window into a collection that fundamentally gains meaning through public access and interaction. What ghosts haunt the archive? Who has put them there? And how might we both bear witness to and intervene into the construction of a public archive? " />
                <Paragraph text="In two large-scale prints that layer and distort archival holdings, visitors can materialize the spectral presence of digital documents, inviting us to re-envision an archive that is simultaneously here and gone. Visitors were invited to take home a poster and open their own portal into the collection." />

                <FullWidthImage project="Spur" imageName="mainSpurImage.jpeg" altText="Black modular cowboy boot in the desert" />

                <SectionHeader text="INSPIRATION" />
                <Paragraph text={"Bold — Western — Sleek"} />
                <FullWidthImage project="Spur" imageName="spurInsoBoard.jpeg" altText="collage of western inspired wear" />

                <Spacer />

                <FullWidthImage project="Spur" imageName="spurRender1.jpg" altText="black modular cowboy boot on a white background" />

                <FullWidthImage project="Spur" imageName="spurRender2.jpg" altText="closeup of a black modular cowboy boot on a white background" />

                <Spacer />

                <TwoColumnImageLayout project="Spur" imageData={finalTwoImages} />

                <Spacer />

            </div>

            <MainSplash />
        </div>
    )
}