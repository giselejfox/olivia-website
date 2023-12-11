import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"

export default function Beam() {

    const researchImages1 = [
        {
            imageTitle: "man-on-board.jpg",
            altText: "man standing on a balance board at his desk"
        },
        {
            imageTitle: "feet-on-board.jpg",
            altText: "boots standing on a balance board"  
        }
    ]
    
    const researchImages2 = [
        {
            imageTitle: "Benefits-of-Balance-Board-for-Physical--Mental-Health_3da1e39cd1b.jpg",
            altText: "two people at desks, one on a balance board"
        },
        {
            imageTitle: "collage-other-balance-boards.jpg",
            altText: "people using balance boards in multiple stances"  
        }
    ]

    return(
        <div>
            <div style={{background:"white"}}>

                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="Beam"
                    description="A balance board and lamp."
                    projectType="INDIVIDUAL PROJECT"
                    duration="10 WEEKS"
                    date="DEC - MAR 2022"
                /> 

                <FullWidthImage project="Beam" imageName="beamonfloor3.jpg" altText="Man standing on a balance beam and another balance beams showing workout stats to the right" />

                <SectionHeader text="RESEARCH" />
                <FullWidthImage project="Beam" imageName="icons.jpg" />
                <Paragraph text={"Balance boards have several health benefits including increasing coordination, strengthening leg muscles, helping injury recovery, and improving posture. However, users can’t easily track their time balancing, it’s difficult to track progress over time, boards are difficult to store when not in use, aesthetics rarely blend well with home interiors, and it can be difficult to come up with new workout ideas. These pain points were seen as opportunities to enhance the user experience of balance boards using new technology and innovative design."} />
                <TwoColumnImageLayout project="Beam" imageData={researchImages1} />
                <TwoColumnImageLayout project="Beam" imageData={researchImages2} />

                <SectionHeader text="INSPIRATION" />
                <Paragraph text="Sustainable — Minimal — Elegant — Convertible" />
                <FullWidthImage project="Beam" imageName="collage-other-inspiration.jpg" altText="collage of colorful arched hallways, terazzo materials, and smart mirrors"/>

                <SectionHeader text="IDEATION SKETCHING" />
                <FullWidthImage project="Beam" imageName="sketching.jpg" altText="collage of balance beam sketches"/>

                <SectionHeader text="CONCEPT RENDERS" />
                <FullWidthImage project="Beam" imageName="beamrestingonfloor.13.jpg" altText="View beam on the floor" />
                <Spacer />
                <Paragraph text={"Storing balance boards is often challenging given they are used frequently and are an irregular, fairly large form. Beam eliminates this issue by turning into a lamp with adjustable colors when not in use, making it aesthetically pleasing to keep out."} />
                <FullWidthImage project="Beam" imageName="Beamlightlivingroom.jpg" altText="beam in a living room at dusk" />
                <Spacer />
                <Paragraph text={"Beam utilizes smart technology to provide on enhanced experience. A mini projector with the ability to adjust angles is embedded on the top of Beam's base alongside surface sensing technology. This projector displays the inter­face on the board, which slides into the base and is stabilized by magnets embedded in the base and the board's frame. Users can navigate the inter­face using the touch bar. Workout statistics are stored in Beam's interface that can be navigated using the touch bar on the top of the base. Users can track progress including their average time and success rate for a workout for specific days, weeks, and months."} />
                <Spacer />
                <p>VIDEO WILL GO HERE</p>
                <Spacer />
                <Paragraph text={"Beam offers users ideas for different exercises and workout routines, including but not limited to balancing time trials, planks, squats, mountain climbers, tricep dips, and controlled board movements. Beam allows users to set an amount of time for their workout of choice. When balancing, a focal point is projected on the floor or the wall which aids the user in balancing. The amount of time that has passed is displayed as the progress circles surrounding the focal point are slowly filled. "} />
                <p>SLIDESHOW WILL GO HERE</p>

            </div>

            <MainSplash />
        </div>
    )
}