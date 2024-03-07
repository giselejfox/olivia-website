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
                <Paragraph text={"Edgy — Lux — Western Glam - Modern Cowboy"} />
                <FullWidthImage project="Spur" imageName="spurMood.jpg" altText="collage of western inspired wear" />

                <Spacer />

                <SectionHeader text="SKETCHING & AI GENERATION" />
                <Paragraph text={"To experiment with different forms and details, I utilized sketching and Ai generation. I created digital sketches on Procreate that I input into Ai generating programs including KREA and Vizcom. Using the combination of Ai and sketching allowed me to explore concepts at a high fidelity with rapid pace. From my initial sketches and visuals, I knew I wanted to design a boot that could be unzipped with an internal knitted sock, allowing for two different visual appearances. Additionally, I wanted to allow for modular accessories."} />
                <FullWidthImage project="Spur" imageName="spurAi.jpg" altText="collage of sketches and boot images" />


                <SectionHeader text="CAD / VR MODELING" />
                <Paragraph text={"Once I selected an overall direction, I used Gravity Sketch and Rhino to create three dimensional forms. When using Gravity Sketch, I was especially focused on further iterating the attachments that could be added onto the boot’s elastic band."} />
                <FullWidthImage project="Spur" imageName="spurVr.jpg" altText="collage of 3D models in VR" />

                <FullWidthImage project="Spur" imageName="spurRender1.jpg" altText="black modular cowboy boot on a white background" />

                <FullWidthImage project="Spur" imageName="spurRender2.jpg" altText="closeup of a black modular cowboy boot on a white background" />

                <Spacer />

            </div>

            {/* <MainSplash /> */}
        </div>
    )
}


