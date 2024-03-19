import Navbar from "../Navbar"
import MainSplash from "../MainSplash";
import Spacer from "../project-sections/Spacer";
import ProjectHeader from "../project-sections/ProjectHeader"
import HTMLFlipBook from "react-pageflip";
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Paragraph from "../project-sections/Paragraph"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"

import { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei'

export default function Coda() {

    const researchImages2 = [
        {
            imageTitle: "codaEmpathy.jpg",
            altText: "two people at desks, one on a balance board"
        },
        {
            imageTitle: "codaPersona.jpg",
            altText: "people using balance boards in multiple stances"  
        }
    ]

    return (
        <div>
            <div style={{background:"white"}}>
                <div id="top"></div>
                <Navbar />

                <ProjectHeader
                    title="CODA"
                    description="An eco-concious wristband and app capturing shared memories, extending the event experience beyond the music festival"
                    projectType="COLLABORATORS: SAM RIERA"
                    duration="11 WEEKS"
                    date="2023"
                />      

                <div className="vh-100 d-flex justify-content-center">
                    <iframe width="100%" height="90%" src="https://www.youtube-nocookie.com/embed/PlbtC0DTJlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <SectionHeader text="RESEARCH" />
                <Paragraph text={"To approach designing a new product for the live music environment, we interviewed concert professionals, musicians, and concertgoers. Hearing their concert habits, opinions on sustainability and merchandise, and personal goals at live music events built a foundational understanding of the problem space. These interviews were often looked back on while designing. (Turn pages below)"} />

                <div className="d-flex w-100 justify-content-center">
                    <MyBook />
                </div>
                <Spacer />
                <SectionHeader text="USER MAPPING" />
                <TwoColumnImageLayout project="Coda" imageData={researchImages2} />
                <Spacer />
                <SectionHeader text="MOODBOARD" />
                <Paragraph text={"Compostable — Natural — Textured - Organic"} />
                <FullWidthImage project="Coda" imageName="codaMood.jpg" altText="mood board" />
                
                <SectionHeader text="IDEATION" />
                <FullWidthImage project="Coda" imageName="codaSketches.jpg" altText="collage of sketches" />
                <Spacer />

                <SectionHeader text="MATERIAL EXPLORATION" />
                <Paragraph text={"Since the beginning materials mattered. We focused on minimizing the product's footprint and planning an intentional lifecycle. We conducted physical experiments to figure out which material was best. We gathered drink waste material from surrounding cafes and breweries to test. All materials had to be biodegradable in order to not leave a lasting mark on the planet and promote sustainable thinking. We ended up choosing a hardened fiber pulp, beeswax, cotton, and a combination of coffee grounds and natural thickening agents as our materials to work with. "} />
                <Paragraph text={"We experimented with various methods for creating a wristband with a singular piece of fabric. Since we wanted the wristband to unfold into a banana, we were focused on utilizing twisting to create a cord-like texture that would compress the fabric. We also experimented with natural dye processes and researched screen-printing with coffee."} />
               
                <FullWidthImage project="Coda" imageName="codaFabric.jpg" altText="collage of fabric images" />
                <Spacer />
                <Paragraph text={"Coffee grounds were mixed in a recipe to create a material with a similar strength to reinforced concrete. The beads were polished with a coating of beeswax."} />
                <FullWidthImage project="Coda" imageName="codaCoffee.jpg" altText="collage of fabric images" />
                
                <Spacer />
                <Paragraph text={"To create the earplugs, both biofoam and beeswax were experimented with. The beeswax and cotton combination was more durable and allows users to shape their earplugs custom to their ears. We created a mold and paper pulp to create a shell for the earplugs, creating a removable bead."} />
                <FullWidthImage project="Coda" imageName="codaEarplugs.jpg" altText="collage of fabric images" />
                
                <Spacer />
                <Paragraph text={"Rough Material Prototype"} />
                <FullWidthImage project="Coda" imageName="codaPrototype.jpg" altText="collage of fabric images" />
                
                
                <SectionHeader text="FINAL SOLUTION" />
                <FullWidthImage project="Coda" imageName="codaCallout.jpg" altText="collage of fabric images" />
                
                <Spacer />
                <Paragraph text={"Removable earplugs protect concertgoer's ears."} />
                <FullWidthImage project="Coda" imageName="codaEarplugscontext.jpg" altText="collage of fabric images" />
                
                <Spacer />
                <Paragraph text={"Personalized wristband code links to the app."} />
                <FullWidthImage project="Coda" imageName="codaInterface.jpg" altText="collage of fabric images" />
                
                <Spacer />
                <Paragraph text={"At home, the wristband untwists into a scarf and the coffee beads dissolve when soaked in water."} />
                <FullWidthImage project="Coda" imageName="codaTransform.jpg" altText="collage of fabric images" />
                
                <Spacer />

                <Navbar />

                <div className="container">
                    {/* <SlickSlider /> */}
                </div>
                {/* <SpinScrollModel />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer /> */}
            </div>
            {/* <MainSplash /> */}
        </div>
    )
}

function SpinScrollModel() {
    return(
        <div className="d-flex flex-column justify-content-between align-items-center pb-5" style={{height: "60rem"}}>
            <Canvas className="canvas" style={{height: "48rem", width: "48rem", background: "#FFFFFF"}} camera={{position: [0, 0, 100]}}>
                <Environment preset="studio"/>
                <Box />
            </Canvas>
            <div className="scroll-and-pin-end"></div>
        </div>
    )
}

function Box() {
  
    const meshRef = useRef();
    
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: true,
          trigger: ".canvas",
          start: "50% 50%",
          endTrigger: ".scroll-and-pin-end",
          end: "bottom 50%",
        },
      });
  
      tl.to(meshRef.current.rotation, {
        x: 5,
        y: 5
      });
  
    })

    const { nodes } = useGLTF('/img/floating-shapes/homepagesmallsize.glb')

    console.log(nodes.Codatest.geometry)
  
    return (
        <mesh 
            ref={meshRef} 
            geometry={nodes.Codatest.geometry} 
            material={nodes.Codatest.material} 
            scale={[2, 2, 2]} 
            rotation={[2, .5, 0]}
        />
    );
};



function MyBook() {

    return (
      <HTMLFlipBook width={395} height={448}>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/covercodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/covercodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/aishacodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/aishacodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/aricodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/aricodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/giselecodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/giselecodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/gracecodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/gracecodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/gulsimacodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/gulsimacodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/hannahcodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/hannahcodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/iancodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/iancodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/jonahcodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/jonahcodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/luciacodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/luciacodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/nojacodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/nojacodazineindividualimages_02.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/sarahcodazineindividualimages_01.jpg" alt="test" /></div>
        <div className="demoPage"><img style={{height:"448px"}} src="img/Coda/sarahcodazineindividualimages_02.jpg" alt="test" /></div>
      </HTMLFlipBook>
    );
  }