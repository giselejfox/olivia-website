import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"
import { ImageCarousel } from "../project-sections/ImageCarousel"

export default function Kit() {

    const researchImages1 = [
        {
            imageTitle: "AverageShoevsKit.png",
            altText: "Diagram of average shoe"
        },
        {
            imageTitle: "AverageShoevsKit2.png",
            altText: "Diagram of Kit"  
        }
    ]
    
    const researchImages2 = [
        {
            imageTitle: "kit3dprints.jpg",
            altText: "two people at desks, one on a balance board"
        },
        {
            imageTitle: "kitprocessupper.jpg",
            altText: "people using balance boards in multiple stances"  
        }
    ]

    const endRenders = [
        {
            imageTitle: "design+callouts.jpg",
            altText: "diagram showing different parts of the balance board"  
        },      
        {
            imageTitle: "beamtouchbar.jpg",
            altText: "someone touching the top of the balance board"  
        }
    ]

    return(
        <div>
            <div style={{background:"white", zIndex: 2}}>

                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="KIT"
                    description="KIT is a modular shoe system created to address the
                    footwear industry’s sustainability crisis. Balancing
                    self‑expression with environmental responsibility, the
                    three‑part system can be quickly separated to swap out
                    styles, making repair and recycling much simpler.
                    Highly functional without sacrificing style, KIT helps save
                    space in your closet and in our landfills."
                    projectType="COLLABORATORS: SARAH KLASSEN, NAOMI PLEASURE-PARK"
                    duration="10 WEEKS"
                    date="MAR-JUN 2024"
                /> 

                <FullWidthImage project="Kit" imageName="kitParts.jpg" altText="Man standing on a balance beam and another balance beams showing workout stats to the right" />

                <SectionHeader text="EXHIBIT" />
                <FullWidthImage project="Kit" imageName="kitexhibit.jpeg" altText="collage of balance beam sketches"/>

                <SectionHeader text="SYSTEM" />
               
                <TwoColumnImageLayout project="Kit" imageData={researchImages1} />
                <Paragraph text={"Each KIT includes our signature sole and the upper style of your choosing. It’s all held together by our flexible cage that’s easy to remove and swap out when you need. It’s just that simple."} />
               
                <FullWidthImage project="Kit" imageName="KIT_ReturnSystem.png" altText="collage of balance beam sketches"/>


                

                <SectionHeader text="PROCESS" />
                <FullWidthImage project="Kit" imageName="kitsketch.jpg" altText="kit sketches"/>

                <TwoColumnImageLayout project="Kit" imageData={researchImages2} />
                
              
               
                <Spacer />
                <Navbar />

            </div>
            {/* <MainSplash2D /> */}
        </div>
    )
}