import { Canvas } from '@react-three/fiber'
import Navbar from "./Navbar";
import * as THREE from 'three';
import React, { useRef, useEffect, Suspense } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { AboutMeFigure01 } from "./Aboutmefigure-01";
// import { AboutMeFigure02 } from "./Aboutmefigure-02";
import { Model } from "./Aboutmefigure1"
import { Box, OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { AboutMeFigure01 } from './Aboutmefigure-01';



export default function About() {


    return (
        <div>
            <Navbar />
            <div className="container">
            <model-viewer src="img/aboutmefigure.glb" camera-controls tone-mapping="commerce" poster="poster.webp" shadow-intensity="1"></model-viewer>  
            </div>
        </div>

    )
}