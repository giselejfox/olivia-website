import Navbar from "../Navbar"
import HTMLFlipBook from "react-pageflip";

import { SlickSlider } from "../project-sections/ImageCarousel";


export default function Coda() {

    return (
        <div>
            <div style={{background:"white"}}>
                <div id="top"></div>
                <Navbar />
                <div className="d-flex w-100 justify-content-center">
                    <MyBook />
                </div>
                <div className="container">
                    <SlickSlider />
                </div>
            </div>
        </div>
    )

}

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