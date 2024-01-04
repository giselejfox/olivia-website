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

export default function ConversationAvenue() {

    const researchImages = [
        {
            imageTitle: "ca-research-1.jpeg",
            altText: "explanation of participatory research"
        },
        {
            imageTitle: "ca-research.jpeg",
            altText: "explanation of participatory research"
        },
    ]

    const sketchingImages = [
        {
            imageTitle: "ca-sketching.jpeg",
            altText: "sketch of stop sign"
        },
        {
            imageTitle: "ca-sketching-2.png",
            altText: "sketch of stop sign"
        },
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
                    title="Conversation Avenue"
                    description="“Conversation Avenue” is a public installation that encourages users to build connections with one another in a light-hearted yet meaningful way. Sometimes, all that’s needed to cultivate a friendship is a push in the right direction; we hope that our installation can provide that for our community and create fun memories in the process."
                    projectType="COLLABORATORS: NAOMI PLEASURE-PARK, JAMIE LEE, HANNAH HOFTIEZER"
                    duration="9 WEEKS"
                    date="MAR 2021"
                />  

                <div className="d-flex justify-content-center">
                    <iframe className='w-100' title="vimeo-player" src="https://player.vimeo.com/video/688581880?h=0a2b9e741d" height="360" frameborder="0" allowfullscreen></iframe>
                </div>

                <SectionHeader text="Participatory Research" />
                <Paragraph text={"This project initially began as an inquiry into how dating apps have worked (or failed to work) among college students during the pandemic. We learned from our research participants that the isolation they were experiencing wasn’t limited to romantic relationships, it extended to platonic ones as well."} />
                <TwoColumnImageLayout project="ConversationAvenue" imageData={researchImages} />

                <Spacer />

                <SectionHeader text="Sketching" />
                <Paragraph text={"After coming up with over 50 ideas for how to address our desired topic, we settled on the idea of an interactive street sign that people could receive conversational prompts from. We settled on a few key elements: A large, unconventional main sign to catch people’s attention, A series of stickers that people could write on and tag the sign, answering the prompt “What do you want people to know about you?”, An interactive button that would provide audio prompts upon being pushed"} />
                <TwoColumnImageLayout project="ConversationAvenue" imageData={sketchingImages} />
                <Spacer />

                <SectionHeader text="Moodboard" />
                <Paragraph text={"After coming up with over 50 ideas for how to address our desired topic, we settled on the idea of an interactive street sign that people could receive conversational prompts from. We settled on a few key elements: A large, unconventional main sign to catch people’s attention, A series of stickers that people could write on and tag the sign, answering the prompt “What do you want people to know about you?”, An interactive button that would provide audio prompts upon being pushed"} />
                <TwoColumnImageLayout project="ConversationAvenue" imageData={sketchingImages} />
                <Spacer />

            </div>

            <MainSplash />
        </div>
    )
}