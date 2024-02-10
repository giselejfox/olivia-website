import Navbar from "../Navbar"
import MainSplash from "../MainSplash";
import Spacer from "../project-sections/Spacer";
import HTMLFlipBook from "react-pageflip";

import { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei'

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
                    {/* <SlickSlider /> */}
                </div>
                <SpinScrollModel />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
            </div>
            <MainSplash />
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