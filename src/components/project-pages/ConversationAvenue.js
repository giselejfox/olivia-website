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
import ThreeColumnImageLayout from '../project-sections/ThreeColumnImageLayout';

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
    
    const fabricationImages = [
        {
            imageTitle: "ca-fabrication-1.png",
            altText: "Graphics of the stop sign"
        },
        {
            imageTitle: "ca-fabrication-2.png",
            altText: "Vinyl being printed"
        },
        {
            imageTitle: "ca-fabrication-3.png",
            altText: "3d cutting the elements"
        }
    ]

    const publicInstallationImages = [
        {
            imageTitle: "ca-pi-2.jpeg",
            altText: "graphic of the the final sing"
        },
        {
            imageTitle: "ca-pi-3.jpeg",
            altText: "a woman standing near a sign"
        },
        {
            imageTitle: "ca-pi-4.jpeg",
            altText: "closeup of the finalized sign"
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

                <SectionHeader text="PARTICIPATORY RESEARCH" />
                <Paragraph text={"This project initially began as an inquiry into how dating apps have worked (or failed to work) among college students during the pandemic. We learned from our research participants that the isolation they were experiencing wasn’t limited to romantic relationships, it extended to platonic ones as well."} />
                <TwoColumnImageLayout project="ConversationAvenue" imageData={researchImages} />

                <Spacer />

                <SectionHeader text="SKETCHING" />
                <Paragraph text={"After coming up with over 50 ideas for how to address our desired topic, we settled on the idea of an interactive street sign that people could receive conversational prompts from. We settled on a few key elements: A large, unconventional main sign to catch people’s attention, A series of stickers that people could write on and tag the sign, answering the prompt “What do you want people to know about you?”, An interactive button that would provide audio prompts upon being pushed"} />
                <TwoColumnImageLayout project="ConversationAvenue" imageData={sketchingImages} />
                <Spacer />

                <SectionHeader text="MOODBOARD" />
                <Paragraph text={"We were largely inspired by visual forms that communicate an individual’s presence in a public space, such as street art and interactive art exhibits. We also considered the traditional format of street signs and the bold visual language of the icons used."} />
                <FullWidthImage project="ConversationAvenue" imageName={"ca-moodboard.jpeg"} altText={"stopsign moodboard"} />
                
                <SectionHeader text="STORYBOARD" />
                <FullWidthImage project="ConversationAvenue" imageName={"ca-storyboard.jpeg"} altText={"stopsign storyboard"} />
                
                <SectionHeader text="FABRICATION" />
                <ThreeColumnImageLayout project="ConversationAvenue" imageData={fabricationImages} />

                <SectionHeader text="PUBLIC INSTALLATION" />
                <FullWidthImage project="ConversationAvenue" imageName={"ca-pi-1.jpeg"} altText={"a colorful road sign in a park with someone walking nearby"} />
                <Spacer />
                <ThreeColumnImageLayout project="ConversationAvenue" imageData={publicInstallationImages} />
                <Spacer />
                <Spacer />

            </div>

            <MainSplash />
        </div>
    )
}