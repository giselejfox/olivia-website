

import MainSplash from "../MainSplash"
import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Carousel from "../project-sections/Carousel"

export default function Well() {


    const carouselData = [
        {
            imageTitle: "kettleUser.jpg",
            altText: "picture of earl grey who likes tea"
        },
        {
            imageTitle: "kettle-task-analysis-1-4.jpeg",
            altText: "series of pictures showing earl grey pouring tea"  
        }
    ]

    return(
        <div>
            <ProjectHeader
                title="Well"
                description="An electric kettle designed for making the perfect cup of tea."
                projectType="INDIVIDUAL PROJECT"
                duration="5 WEEKS"
                date="NOV - DEC 2022"
            /> 
            <FullWidthImage project="Well" imageName="blackkettlesideboiling.jpg" altText="side view of a black kettle boiling"/>
            <div className="small-spacer"></div>
            <Carousel project="Well" imageData={carouselData} />
            <Navbar />
            <MainSplash />
        </div>
    )
}