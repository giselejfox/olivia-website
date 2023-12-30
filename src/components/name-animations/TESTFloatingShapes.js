import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'

export default function TESTFloatingShapes() {
    // const mouse = {
    //     x: useMotionValue(0),
    //     y: useMotionValue(0)
    // }
    
    // const smoothMouse = {
    //     x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    //     y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
    // }
    
    // const manageMouse = e => {
    //     const { innerWidth, innerHeight } = window;
    //     const { clientX, clientY } = e;
    //     const x = clientX / innerWidth
    //     const y = clientY / innerHeight
    //     mouse.x.set(x);
    //     mouse.y.set(y);
    // }
    
    // useEffect( () => {
    //     window.addEventListener("mousemove", manageMouse)
    //     return () => window.removeEventListener("mousemove", manageMouse)
    // }, [])

    return (
        <Canvas style={{background: "#FFFFFF"}} orthographic camera={{position: [0, 0, 100], zoom: 12}}>
            <Model />
            <Environment preset="studio"/>
        </Canvas>
    )
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/img/floating-shapes/homepagesmallsize.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.industrialboottest.geometry}
        material={nodes.industrialboottest.material}
        position={[43.939, -46.654, 7.939]}
        rotation={[1.663, 1.054, -1.651]}
        scale={11.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Codatest.geometry}
        material={nodes.Codatest.material}
        position={[-36.396, 22.365, -3.335]}
        rotation={[1.625, -0.55, 0.302]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.final_join.geometry}
        material={nodes.final_join.material}
        position={[7.028, 36.101, 36.336]}
        rotation={[2.872, 0.977, 2.952]}
        scale={1.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Default021.geometry}
        material={nodes.Default021.material}
        position={[-7.726, -73.692, -73.079]}
        rotation={[-0.443, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Default023.geometry}
        material={nodes.Default023.material}
        position={[34.316, -7.738, 17.956]}
        rotation={[0, 0, 0.339]}
        scale={0.238}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitchloaferstest.geometry}
        material={nodes.stitchloaferstest.material}
        position={[-53.633, -29.575, -8.338]}
        rotation={[-1.463, -0.526, -0.795]}
        scale={1.363}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[0, 0, 13.141]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={17.531}
      />
    </group>
  );
}

useGLTF.preload("/img/floating-shapes/homepagesmallsize.glb");