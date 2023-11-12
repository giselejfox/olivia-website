import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { STLLoader } from 'three/addons/loaders/STLLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


function Model({ group }) {
  
  // Load the STL model
  const loader = new GLTFLoader();
  const glbPath = 'img/Peter.glb';
  // loader.load(glbPath, (geometry) => {
  //   const material = new THREE.MeshNormalMaterial({
  //     // transparent: true,
  //     // opacity: 0.7, // Adjust the opacity as needed
  //   });
  //   const mesh = new THREE.Mesh(geometry, material);

  //   // Scale down the model
  //   // mesh.scale.set(0.2, 0.2, 0.2); // Adjust the scale factor as needed

  //   group.current.add(mesh);

  // });
  loader.load(glbPath, (gltf) => {
    gltf.scene.scale.set(10, 10, 10);
    group.current.add(gltf.scene);
  });

  return <group ref={group} />;

}

export default function CursorFollow3D() {
  const group = useRef();

  const updateShoeRotation = (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
  
    group.current.rotation.x = mouseY * Math.PI * 2; // Adjust the scale factor as needed
    group.current.rotation.y = mouseX * Math.PI * 2; // Adjust the scale factor as needed
  };

  return (
    <Canvas style={{ background: 'white' }} onMouseMove={updateShoeRotation}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model group={group} />
      <OrbitControls />
    </Canvas>
  );
};
