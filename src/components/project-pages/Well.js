import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import { ImageCarousel } from "../project-sections/ImageCarousel"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"

export default function Well() {

    const researchImages = [
        {
            imageTitle: "kettleUser.jpg",
            altText: "picture of earl grey who likes tea"
        },
        {
            imageTitle: "kettle-task-analysis-1-4.jpeg",
            altText: "series of pictures showing earl grey pouring tea"  
        },
        {
            imageTitle: "kettle-task-analysis-5-8.jpeg",
            altText: "series of pictures showing earl grey pouring tea"
        },
        {
            imageTitle: "electrickettle-05.jpg",
            altText: "competetive landscape matrix"  
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
            <div style={{background:"white"}}>

                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="Well"
                    description="An electric kettle designed for making the perfect cup of tea."
                    projectType="INDIVIDUAL PROJECT"
                    duration="5 WEEKS"
                    date="NOV - DEC 2022"
                /> 

                <FullWidthImage project="Well" imageName="blackkettlesideboiling.jpg" altText="Side view of a black kettle boiling"/>

                <SectionHeader text="RESEARCH" />
                <ImageCarousel project="Well" imageData={researchImages} />

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
            </div>

            {/* <MainSplash /> */}
        </div>
    )
}