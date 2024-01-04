import React from 'react';
import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"

export default function Spur() {

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
                    title="Spur"
                    description="Spur is a cowboy boot that combines classic western style with modern functionality. The zip-up design makes it easy to put on and take off, while the slip-on inner foot sleeve adds an extra layer of comfort."
                    projectType="INDIVIDUAL PROJECT"
                    duration="3 WEEKS"
                    date="OCT 2022"
                /> 

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