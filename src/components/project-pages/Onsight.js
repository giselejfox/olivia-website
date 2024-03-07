import React from 'react';
import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"
import { ImageCarousel } from '../project-sections/ImageCarousel';

export default function Onsight() {

    const researchImages = [
        {
            imageTitle: "onsight-research-1.jpeg",
            altText: "timeline of mountaineering photography"
        },
        {
            imageTitle: "onsight-research-2.jpeg",
            altText: "graphic on other competitors"
        },
        {
            imageTitle: "onsight-research-3.jpeg",
            altText: "harness research graphic"
        },
        {
            imageTitle: "onsight-research-4.jpeg",
            altText: "collage of camera research"
        }
    ]
    
    const sketchingAndPrototypingImages = [
        {
            imageTitle: "onsight-ideation.jpeg",
            altText: "sketching backpack ideations"
        },
        {
            imageTitle: "onsight-prototyping.jpeg",
            altText: "collage of backpack prototypes"
        },
        {
            imageTitle: "onsight-refined-concepts.jpeg",
            altText: "collage of refined backpack concepts"
        }
    ]

    const finalImages = [
        {
            imageTitle: "onsight-final-camerabag.jpeg",
            altText: "graphic of the finalized backpack"
        },
        {
            imageTitle: "onsight-final-materials.jpeg",
            altText: "graphic of the finalized materials"
        },
        {
            imageTitle: "onsight-final-techpack.jpeg",
            altText: "graphic of the finalized backpack"
        }
    ]

    const featureImages = [
        {
            imageTitle: "onsight-backpack-features.jpeg",
            altText: "graphic describing the backpack features"
        },
        {
            imageTitle: "onsight-camera-features.jpeg",
            altText: "graphic describing the backpack's camera features"
        }
    ]

    const inActionImages = [
        {
            imageTitle: "onsight-in-action-1.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-2.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-3.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-4.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-5.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-6.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-7.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-8.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-9.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-1.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-10.jpeg",
            altText: "man wearing the backpack near a rock wall"
        },
        {
            imageTitle: "onsight-in-action-11.jpeg",
            altText: "man wearing the backpack near a rock wall"
        }
    ]
    
    return (
        <div>
            <div style={{background:"white"}}>

                {/* To help scroll back to the top when clicking a new project */}
                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="Onsight"
                    description="A backpack for amateur climbing photographers."
                    projectType="COLLABORATORS: VICTORIA LI, KRIS BRAUER."
                    duration="5 WEEKS"
                    date="APR - JUN 2023"
                /> 

                <FullWidthImage project="Onsight" imageName="onsight-main.jpeg" altText="Black modular cowboy boot in the desert" />

                <SectionHeader text="Research" />
                <ImageCarousel project={"Onsight"} imageData={researchImages} />
                <Spacer />

                <FullWidthImage project="Onsight" imageName="onsight-moodboard.jpeg" altText="moodboard of climbing backpacks" />

                <SectionHeader text="Sketching and Prototyping" />
                <ImageCarousel project={"Onsight"} imageData={sketchingAndPrototypingImages} />
                <Spacer />

                <SectionHeader text="Tech Pack" />
                <ImageCarousel project={"Onsight"} imageData={finalImages} />
                <Spacer />

                <FullWidthImage project="Onsight" imageName="onsight-onrock.jpeg" altText="backpack and tools on a rock" />

                <ImageCarousel project={"Onsight"} imageData={featureImages} />
                <Spacer />

                <ImageCarousel project={"Onsight"} imageData={inActionImages} />
                <Spacer />
                <Spacer />
                <Spacer />

            </div>

            {/* <MainSplash /> */}
        </div>
    )
}