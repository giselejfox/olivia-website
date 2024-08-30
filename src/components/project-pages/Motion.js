import Navbar from "../Navbar"

import ProjectHeader from "../project-sections/ProjectHeader"
import SectionHeader from "../project-sections/SectionHeader"
import FullWidthImage from "../project-sections/FullWidthImage"
import Spacer from "../project-sections/Spacer"
import TwoColumnImageLayout from "../project-sections/TwoColumnImageLayout"
import Paragraph from "../project-sections/Paragraph"
import { ImageCarousel } from "../project-sections/ImageCarousel"

export default function Motion() {

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

    const wallImages = [
        {
            imageTitle: "remadefront.jpg",
            altText: "sketched of kettle variations"
        },
        {
            imageTitle: "remadewallwithperson.jpg",
            altText: "paper prototype kettle variations"  
        }
    ]
    
    const personImages = [
        {
            imageTitle: "remadeonfront.jpg",
            altText: "sketched of kettle variations"
        },
        {
            imageTitle: "remadeonback.jpg",
            altText: "paper prototype kettle variations"  
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

    const collectionImages = [      
        {
            imageTitle: "mediumbagcollection.jpg",
            altText: "diagram showing different parts of the balance board"  
        },    
        {
            imageTitle: "remademotionlargepile.jpg",
            altText: "diagram showing different parts of the balance board"  
        },  
        {
            imageTitle: "remademotionsmallbags.jpg",
            altText: "diagram showing different parts of the balance board"  
        },
        {
            imageTitle: "mediumbag1.jpg",
            altText: "someone touching the top of the balance board"  
        },
        {
            imageTitle: "remadeclipdetail.jpg",
            altText: "someone touching the top of the balance board"  
        }
    ]

    return(
        <div>
            <div style={{background:"white", zIndex: 2}}>

                <div id="top"></div>

                <Navbar />

                <ProjectHeader
                    title="MOTION"
                    description="MOTION is the second edition of the REMADE BY UW DESIGN project, which focuses on upcycling. This limited edition collection of bags comes in three sizes, with two adjustable and removable straps. The bags are crafted from used retail banners and industrial printing offcuts, connecting waste from the beginning and end of the retail banner cycle into a single product."
                    projectType="COLLABORATOR: SOPHIA ZENG, ADVISOR: KAREN CHENG"
                    duration="10 WEEKS"
                    date="MAR-JUN 2024"
                /> 

                <FullWidthImage project="Motion" imageName="motionequation.gif" altText="A image showing industrial textile waste added to waste retail banners equals different bags" />
                
                <SectionHeader text='COLLECTION' />
                <ImageCarousel project="Motion" imageData={collectionImages} />

                <SectionHeader text="SHOP" />
                <Paragraph text={"The project’s display in the ‘Shop the Show’ section of the 2024 UW Design Show at the Jacob Lawrence Gallery, where bags were available for sale."} />
               
                <TwoColumnImageLayout project="Motion" imageData={wallImages} />
                
                <SectionHeader text="CONTEXT" />
                <TwoColumnImageLayout project="Motion" imageData={personImages} />
                
                <Spacer />
                <Navbar />

            </div>
            {/* <MainSplash2D /> */}
        </div>
    )
}