import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF, Float, Html } from '@react-three/drei'
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

    return (
        <Canvas style={{background: "#FFFFFF"}} orthographic camera={{position: [0, 0, 100], zoom: 12}}>
            <Model mouse={smoothMouse}/>
            <Environment preset="studio"/>
        </Canvas>
    )
}


function Model() {

  const { nodes } = useGLTF("/img/floating-shapes/homepagesmallsize.glb");

  return (
    <Float>
      <group>
        <Mesh node={nodes.Codatest} />
        <Mesh node={nodes.Default021} />
        <Mesh node={nodes.Default023} />
        <Mesh node={nodes.final_join} />
        <Mesh node={nodes.industrialboottest} />
        <Mesh node={nodes.stitchloaferstest} />
        <Mesh node={nodes.Text} />
      </group>
    </Float>
 
  );

}

function Mesh({node}) {

  const { geometry, material, position, scale, rotation } = node;

  return (
    <motion.mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
    />
  )

}





// function Model({mouse}) {
//     const [activeShape, setActiveShape] = useState(1);
  
//     useEffect( () => {
//       setTimeout( () => {
//         if(activeShape === 7){
//           setActiveShape(1)
//         }
//         else{
//           setActiveShape(activeShape + 1)
//         }
//       }, 2000)
//     }, [activeShape])
  
//     const { nodes } = useGLTF("/img/floating-shapes/homepagesmallsize.glb");
//     console.log("Main Nodes")
//     console.log(nodes)

//     return (
//         <group>
//           <Mesh node={nodes.Codatest} multiplier={10} mouse={mouse} isActive={activeShape === 1}/>
//           <Mesh node={nodes.Default021} multiplier={15} mouse={mouse} isActive={activeShape === 2}/>
//           <Mesh node={nodes.Default023} multiplier={15} mouse={mouse} isActive={activeShape === 3}/>
//           <Mesh node={nodes.final_join} multiplier={15} mouse={mouse} isActive={activeShape === 4}/>
//           <Mesh node={nodes.industrialboottest} multiplier={15} mouse={mouse} isActive={activeShape === 5}/>
//           <Mesh node={nodes.stitchloaferstest} multiplier={15} mouse={mouse} isActive={activeShape === 6}/>
//           <Mesh node={nodes.Text} multiplier={15} mouse={mouse} isActive={activeShape === 7} mainText={true}/>
//         </group>
//     );
// }
  
// useGLTF.preload("/img/floating-shapes/homepagesmallsize.glb");

// function Mesh({node, multiplier, mouse, isActive, mainText}) {
//     const { geometry, material, position, scale, rotation } = node;
//     const a = multiplier / 2;
//     const rotationX = useTransform(mouse.x, [0,1], [rotation.x - a, rotation.x + a]);
//     const rotationY = useTransform(mouse.y, [0,1], [rotation.y - a, rotation.y + a]);
//     const positionX = useTransform(mouse.x, [0,1], [position.x - multiplier * 2, position.x + multiplier * 2]);
//     const positionY = useTransform(mouse.y, [0,1], [position.y + multiplier * 2, position.y - multiplier * 2])

//     let initialPosition = new THREE.Vector3().copy(position);

//     if (mainText) {
//       initialPosition.set(-200, -200, 0);
//     }

//     // console.log(initialPosition)

//     const [customMaterial, setCustomMaterial] = useState(material.clone())

//     // Check if changesColor is true and update color every 5 seconds otherwise makes the mesh transparent
//     useEffect(() => {
//       if (mainText) {
//         const tempMaterial = customMaterial.clone()
//         tempMaterial.color = new THREE.Color(Math.random(), Math.random(), Math.random())
//         setCustomMaterial(tempMaterial);
//         const interval = setInterval(() => {
//           const otherTempMaterial = customMaterial.clone()
//           otherTempMaterial.color = new THREE.Color(Math.random(), Math.random(), Math.random())
//           setCustomMaterial(otherTempMaterial);
//         }, 2500);
//         return () => clearInterval(interval);
//       } else {
//         const tempMaterial = customMaterial.clone()
//         tempMaterial.color = new THREE.Color(0xCCCCCC)
//         tempMaterial.transparent = true; // Make the material transparent
//         tempMaterial.opacity = 0.7; // Set the opacity (0 = fully transparent, 1 = fully opaque)
//         setCustomMaterial(tempMaterial);
//       }
//   }, []);

//     const getRandomMultiplier = () => {
//       return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
//     };

//     return (
//         <Float>
//             <motion.mesh
//             castShadow={true}
//             receiveShadow={true}
//             geometry={geometry}
//             material={customMaterial}
//             position={[position.x, position.y, position.z]}
//             rotation={[10, 10, 10]}
//             scale={scale}
//             rotation-y={rotationX}
//             rotation-x={rotationY}
//             position-x={positionX}
//             position-y={positionY}
//             animate={{ rotateZ: isActive ? rotation.z + getRandomMultiplier() : null }}
//             transition={{type: "spring", stiffness: 75, damping: 100, mass: 3}}
//             />
//         </Float>
//     )
// }