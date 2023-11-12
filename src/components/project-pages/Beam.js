import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import { ImageCarousel, ResponsiveSelectionCarousel} from "../project-sections/ImageCarousel"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"

export default function Beam() {

    const researchImages = [
        {
            imageTitle: "20170111_NewProducts_Lifestyle_Shoot_194.jpg",
            altText: "man standing on a balance board at his desj"
        },
        {
            imageTitle: "balance-board-for-standing-desk.jpg",
            altText: "boots standing on a balance board"  
        },
        {
            imageTitle: "Benefits-of-Balance-Board-for-Physical--Mental-Health_3da1e39cd1b.jpg",
            altText: "two people at their desks either sitting on a balance chair or standing on a balance board"
        },
        {
            imageTitle: "Slide+16_9+-+12.jpg",
            altText: "series of images of people using a balance board and smiling"  
        }
    ]

    const rapidVisImages = [
        {
            imageTitle: "oomen_napkin_sketches.jpeg",
            altText: "sketched of kettle variations"
        },
        {
            imageTitle: "electrickettle-07.jpg",
            altText: "paper prototype kettle variations"  
        }
    ]

    const ideationSketchingImages = [
        {
            imageTitle: "Sketching2.jpeg",
            altText: "Shaded sketches of flat kettle"  
        },
        {
            imageTitle: "Frame12.jpeg",
            altText: "Outline sketches of flat kettle"  
        },
        {
            imageTitle: "kettlevariations-01.jpg",
            altText: "Sketched kettle variations"
        },
        {
            imageTitle: "twistdiagram.jpeg",
            altText: "Various angles of kettle twisting"  
        }
    ]

    return(
        <div>
            <ProjectHeader
                title="Beam"
                description="A balance board and lamp."
                projectType="INDIVIDUAL PROJECT"
                duration="10 WEEKS"
                date="DEC - MAR 2022"
            /> 

            <FullWidthImage project="Beam" imageName="beamonfloor3.jpg" altText="Man standing on a balance beam and another balance beams showing workout stats to the right" />

            <SectionHeader text="HI THERE" />
            <FullWidthImage project="Beam" imageName="Slide+16_9+-+14.jpg" />
            <Paragraph text={"Balance boards have several health benefits including increasing coordination, strengthening leg muscles, helping injury recovery, and improving posture. However, users can’t easily track their time balancing, it’s difficult to track progress over time, boards are difficult to store when not in use, aesthetics rarely blend well with home interiors, and it can be difficult to come up with new workout ideas. These pain points were seen as opportunities to enhance the user experience of balance boards using new technology and innovative design."} />
            <ResponsiveSelectionCarousel project="Beam" imageData={researchImages} />

            <SectionHeader text="INSPIRATION" />
            <FullWidthImage project="Well" imageName="Mood_Boards.jpeg" altText="Collage of images showing sophisticated and colorful interiors and sleek metal kettles"/>

            <SectionHeader text="RAPID VISUALIZATION" />
            <TwoColumnImageLayout project="Well" imageData={rapidVisImages} />

            <SectionHeader text="IDEATION SKETCHING" />
            <TwoColumnImageLayout project="Well" imageData={ideationSketchingImages} />
            <FullWidthImage project="Well" imageName="kettlecablemanagement.19.jpg" altText="View of kettle base" />
            <FullWidthImage project="Well" imageName="kettleexplode.jpg" altText="Expanded view of kettle" />
            <FullWidthImage project="Well" imageName="WellColorLine.jpg" altText="Examples of kettles in different colors" />

            <Navbar />
            <MainSplash />
        </div>
    )
}