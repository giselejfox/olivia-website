import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const TwoSpheresDragging = () => {
    const camera = useMemo(() => new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000), []);
    const renderer = useMemo(() => new THREE.WebGLRenderer(), []);
    const spheresGroup = useRef();
    const isDragging = useRef(false);
  
    useEffect(() => {
      // Set up renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Set up scene
      const scene = new THREE.Scene();
  
      // Set up spheres
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      const sphereMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const sphereMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  
      const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
      const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
  
      scene.add(sphere1);
      scene.add(sphere2);
  
      // Set initial positions
      sphere1.position.x = -2;
      sphere2.position.x = 2;
  
      // Set up mouse
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
  
      const onMouseDown = (event) => {
        isDragging.current = true;
      };
  
      const onMouseUp = () => {
        isDragging.current = false;
      };
  
      const onMouseMove = (event) => {
        // Update the mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
        if (isDragging.current) {
          // Update the raycaster
          raycaster.setFromCamera(mouse, camera);
  
          // Move spheres towards the mouse only on x and y axes
          const intersects1 = raycaster.intersectObject(sphere1);
          const intersects2 = raycaster.intersectObject(sphere2);
  
          if (intersects1.length > 0) {
            const targetPosition1 = intersects1[0].point;
            sphere1.position.x = targetPosition1.x;
            sphere1.position.y = targetPosition1.y;
          }
  
          if (intersects2.length > 0) {
            const targetPosition2 = intersects2[0].point;
            sphere2.position.x = targetPosition2.x;
            sphere2.position.y = targetPosition2.y;
          }
        }
      };
  
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Check for collisions and update positions accordingly
        const distance = sphere1.position.distanceTo(sphere2.position);
        if (distance < 2) {
          const direction = new THREE.Vector3().subVectors(sphere1.position, sphere2.position).normalize();
          const pushAmount = 2 - distance;
  
          sphere1.position.add(direction.clone().multiplyScalar(pushAmount * 0.5));
          sphere2.position.sub(direction.clone().multiplyScalar(pushAmount * 0.5));
        }
  
        renderer.render(scene, camera);
      };
  
      // Set up camera position
      camera.position.z = 5;
  
      // Add spheres to a group for rotation
      spheresGroup.current = new THREE.Group();
      spheresGroup.current.add(sphere1);
      spheresGroup.current.add(sphere2);
      scene.add(spheresGroup.current);
  
      // Start animation loop
      animate();
  
      // Clean up on component unmount
      return () => {
        document.body.removeChild(renderer.domElement);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, [renderer, camera]);
  
    return <div style={{ width: '100%', height: '100%' }} />;
  };

export default function Spur() {
    return (
        <div>
            <h1>I'm here</h1>
            {/* <ThreeDComponent /> */}
            <TwoSpheresDragging />
        </div>
    )
}