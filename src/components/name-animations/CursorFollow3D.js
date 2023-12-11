import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { STLLoader } from 'three/addons/loaders/STLLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Box, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';

function GLTFModel({ group }) {
  const modelPath = 'img/3D+Shoe+Sketch+by+Archie+RefImage+Copy@08122023-195607.glb';

  const loader = useMemo(() => new GLTFLoader(), []);

  useEffect(() => {
    const loadModel = async () => {
      const gltf = await loader.loadAsync(modelPath);
      const clonedScene = gltf.scene.clone();
      group.current.add(clonedScene);

      // Adjust the scale factor as needed
      clonedScene.scale.set(1.5, 1.5, 1.5);

      // Rotate the model 180 degrees along the x-axis
      clonedScene.rotation.x = Math.PI; // Math.PI represents 180 degrees
      clonedScene.rotation.z = Math.PI; // 180 degrees around the z-axis)
    };

    loadModel();
  }, [loader, modelPath, group]);

  useFrame(() => {
    // Add any animation or frame-specific logic here
  });

  return <group ref={group} />;
}

export default function CursorFollow3D() {
  const group = useRef();
  const prevMousePosition = useRef({ x: 0, y: 0 });

  const updateShoeRotation = (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

    gsap.to(group.current.rotation, {
      x: mouseY,
      y: mouseX,
      duration: 0.3, // Adjust the duration as needed
      ease: 'quad.inOut', // Use any easing function you prefer
    });
    
    prevMousePosition.current = { x: mouseX, y: mouseY };
  };

  const handleWheel = (event) => {
    event.preventDefault();
    // Prevent zooming in and out
  };

  return (
    <div className="canvas-container" onWheel={handleWheel}>
      <Canvas style={{ background: 'white' }} onMouseMove={updateShoeRotation}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <GLTFModel group={group}/>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="heading-container">
        <h1 className='main-name-3D-backdrop d-flex flex-column align-items-center'>
          <span>OLIVIA</span>
          <span>OOMEN</span> 
        </h1>
      </div>
    </div>
  );
};


// function STLModel({ group }) {
  
//   // Load the STL model
//   const loader = new STLLoader();
//   // const loader = new GLTFLoader();
//   const modelPath = 'img/ShoeModel.stl';

//   // FOR THE SHOE
//   loader.load(modelPath, (geometry) => {
//     const material = new THREE.MeshNormalMaterial({
//       transparent: true,
//       opacity: 0.7, // Adjust the opacity as needed
//     });
//     const mesh = new THREE.Mesh(geometry, material);

//     // Scale down the model
//     mesh.scale.set(0.2, 0.2, 0.2); // Adjust the scale factor as needed

//     group.current.add(mesh);

//   });

//   return <group ref={group} />;
// }