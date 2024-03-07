import React from 'react';
import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import Spacer from "../project-sections/Spacer"
import Paragraph from "../project-sections/Paragraph"
import ThreeColumnImageLayout from '../project-sections/ThreeColumnImageLayout';
import { ImageCarousel } from '../project-sections/ImageCarousel';

export default function SiteArchiveSite() {

    const prototypeImages = [
        {
            imageTitle: "sac-prototype-1.jpeg",
            altText: "woman holding her phone up to floating transparent images"
        },
        {
            imageTitle: "sac-prototype-2.jpeg",
            altText: "digital sketches of a wall with two long posters hung up"         
        },
        {
            imageTitle: "sac-prototype-3.jpg",
            altText: "a woman standing in front of two large posters with her phone raised as if she's taking a picture"         
        }
    ]

    const publicInstallationImages = [
        {
            imageTitle: "sac-pi-0.jpeg",
            altText: "closeup of poster"
        },
        {
            imageTitle: "sac-pi-1.jpeg",
            altText: "stack of posters on a pedestal"         
        },
        {
            imageTitle: "sac-pi-4.jpeg",
            altText: "two people milling around the large posters"         
        },
        {
            imageTitle: "sac-pi-3.jpeg",
            altText: "picture of a phone taking a picture of a poster"
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
                        <img className="col-image" src="img/SiteArchiveCite/sac-intro-1.jpeg" alt="two long posters taped to the wall" />
                    </div>
                    <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center'>
                        <img className="col-image" src="img/SiteArchiveCite/sac-intro-2.jpeg" alt="two long posters taped to the wall" />
                    </div>
                </div>

                <Spacer />

                <Paragraph text="Site/Archive/Cite is an augmented reality art intervention based on the National Archives at Seattle that interrogates the relationship of archive to place and public. At a time when many institutions hold out hope for digital accessibility to broaden the audience for their holdings, the realities of what gets digitized and who has access do not always live up to those heightened expectations. What is cited on a website may only be a fraction of the materials available onsite, providing a partial—and highly subjective—window into a collection that fundamentally gains meaning through public access and interaction. What ghosts haunt the archive? Who has put them there? And how might we both bear witness to and intervene into the construction of a public archive? " />
                <Paragraph text="In two large-scale prints that layer and distort archival holdings, visitors can materialize the spectral presence of digital documents, inviting us to re-envision an archive that is simultaneously here and gone. Visitors were invited to take home a poster and open their own portal into the collection." />

                <SectionHeader text="PROTOTYPING" />
                <ThreeColumnImageLayout project="SiteArchiveCite" imageData={prototypeImages} />
                <Spacer />
                <Paragraph text="My role as a collaborator in the project expanded my knowledge of the process of conceptualizing artwork and how technical limitations of mediums shape an artwork. Since AR is still a relatively experimental and new artform, the conventions and possibilities of artworks within AR are still being established. Within the creation of Site / Archive / Cite, we were often pushing softwares past what they are intended or advertised to do. Due to this, experimenting with the technology itself was an essential part of understanding what the artwork could be throughout the process of conceptual ideation." />
                
                <SectionHeader text="PUBLIC INSTALLATION" />
                <Paragraph text="We are grateful that we had the opportunity to show this work at the Seattle Art Book Fair, May 6–7, 2023 at Washington Hall, a free event open to the public. This teaser of our exhibit acted as a test “trial” for the larger exhibit being developed." />

                <ImageCarousel project="SiteArchiveCite" imageData={publicInstallationImages} />
                <Spacer />
                <Spacer />
                

            </div>

            {/* <MainSplash /> */}
        </div>
    )
}