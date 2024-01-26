import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF, Float } from '@react-three/drei'
import { useMotionValue, useSpring, useTransform } from "framer-motion"
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

export default function FloatingShapes() {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    
    const smoothMouse = {
        x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
        y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
    }
    
    const manageMouse = e => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth
        const y = clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y);
    }
    
    useEffect( () => {
        window.addEventListener("mousemove", manageMouse)
        return () => window.removeEventListener("mousemove", manageMouse)
    }, [])

    // Adjust the zoom factor based on the screen size so we can see the name
    const zoom = window.innerWidth < 768 ? 5 : 10


    return (
        <Canvas style={{background: "#FFFFFF"}} orthographic camera={{position: [0, 0, 100], zoom: zoom}}>
            <Model mouse={smoothMouse} />
            <Environment preset="studio"/>
        </Canvas>
    )
}


function Model({mouse}) {

  const { nodes } = useGLTF('/img/floating-shapes/homepagesmallsize.glb')

  return (
    <group>
      {/* {Object.keys(nodes).length !== 0 && <Mesh node={nodes.Codatest} multiplier={8} mouse={mouse} />} */}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.Default021} multiplier={8} mouse={mouse} />}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.Default023} multiplier={8} mouse={mouse} />}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.final_join} multiplier={8} mouse={mouse} />}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.industrialboottest} multiplier={8} mouse={mouse} />}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.stitchloaferstest} multiplier={8} mouse={mouse} />}
      {Object.keys(nodes).length !== 0 && <Mesh node={nodes.Text} multiplier={0} mouse={mouse} mainText={true}/>}
    </group>
  );
}
  
useGLTF.preload("/img/floating-shapes/homepagesmallsize.glb");

function Mesh({node, multiplier, mouse, isActive, mainText}) {
    const { geometry, material, position, scale, rotation } = node;

    // const [currentColorIndex, setCurrentColorIndex] = useState(0)

    const a = multiplier / 2;
    const rotationX = useTransform(mouse.x, [0,1], [rotation.x - a, rotation.x + a]);
    const rotationY = useTransform(mouse.y, [0,1], [rotation.y - a, rotation.y + a]);
    const positionX = useTransform(mouse.x, [0,1], [position.x - multiplier * 2, position.x + multiplier * 2]);
    const positionY = useTransform(mouse.y, [0,1], [position.y + multiplier * 2, position.y - multiplier * 2])

    let initialPosition = new THREE.Vector3().copy(position);

    if (mainText) {
      initialPosition.set(-200, -200, 0);
    }

    // console.log(initialPosition)

    const [customMaterial, setCustomMaterial] = useState(material.clone())

    // List of Liv's colors
    const livColors = [0x002FA7, 0x000000, 0x01796f, 0xDFFF00, 0xFF0000, 0x568259, 0xF2542D, 0xC1DF1F, 0x5E2BFF, 0x131200, 0xEDAE49, 0xF90093, 0xD00000, 0x05299E, 0x89FC00]

    // Check if changesColor is true and update color every 5 seconds otherwise makes the mesh transparent
    useEffect(() => {
      // can't use state so have to use a varible
      var currentColorIndex = 0

      if (mainText) {
        const tempMaterial = customMaterial.clone()
        tempMaterial.color = new THREE.Color(livColors[livColors.length - 1]) // start at the last
        setCustomMaterial(tempMaterial);
        const interval = setInterval(() => {
          // console.log("currentcolorIndex"+currentColorIndex)
          const otherTempMaterial = customMaterial.clone()
          otherTempMaterial.color = new THREE.Color(livColors[currentColorIndex])
          setCustomMaterial(otherTempMaterial);
          if (currentColorIndex === livColors.length - 1) {
            currentColorIndex = 0
          } else {
            currentColorIndex = currentColorIndex + 1
          }
        }, 1000);
        return () => clearInterval(interval);
      } else {
        const tempMaterial = customMaterial.clone()
        tempMaterial.color = new THREE.Color(0xCCCCCC)
        tempMaterial.transparent = true; // Make the material transparent
        tempMaterial.opacity = 0.7; // Set the opacity (0 = fully transparent, 1 = fully opaque)
        setCustomMaterial(tempMaterial);
      }
  }, []);

    const getRandomMultiplier = () => {
      return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
    };

    if (mainText) {
      return (
        <Float>
            <motion.mesh
            castShadow={true}
            receiveShadow={true}
            geometry={geometry}
            material={customMaterial}
            position={[position.x, position.y+5, position.z]}
            rotation={[20, 0, 0]}
            scale={scale}
            transition={{type: "spring", stiffness: 75, damping: 100, mass: 3}}
            />
        </Float>
      )
    } else {
      return (
        <Float>
            <motion.mesh
            castShadow={true}
            receiveShadow={true}
            geometry={geometry}
            material={customMaterial}
            position={[position.x, position.y, position.z]}
            rotation={[10, 10, 10]}
            scale={scale}
            rotation-y={rotationX}
            rotation-x={rotationY}
            position-x={positionX}
            position-y={positionY}
            animate={{ rotateZ: isActive ? rotation.z + getRandomMultiplier() : null }}
            transition={{type: "spring", stiffness: 75, damping: 100, mass: 3}}
            />
        </Float>
      )
    }

}