import "./App.css";
import { Suspense, useEffect, useState } from "react";
import React, { useRef } from "react";
import { useGLTF, useAnimations, OrbitControls, Environment, Clone, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
function App() {
  const { 
    rayleigh, 
    turbidity, 
    inclination, 
    mieDirectionalG, 
    mieCoefficient } = useControls({
       rayleigh: {
        value:0.5,
        
       }, 
       turbidity: 10, 
       inclination: 0.6, 
       mieDirectionalG: 0.8, 
       mieCoefficient: 0.005 
      });

  const { nodes, materials, animations } = useGLTF("/bee.glb");
  const garden = useGLTF("/garden.glb");
  const { actions, names, ref } = useAnimations(animations);
  useEffect(() => {
    actions["Bee|BeeAction"].play();
  }, []);
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      <Sky distance={1000} rayleigh={rayleigh} turbidity={turbidity} inclination={inclination} mieDirectionalG={mieDirectionalG} mieCoefficient={mieCoefficient} />
      <Perf position="top-left" />

      <Suspense>
        <group position={[0, -1, 0]}>
          <primitive object={garden.scene} scale={0.04} />
          <group rotation={[Math.PI * 1.5, 0, 0]} scale={1} dispose={null} position={[0, 30, 10]}>
            <skinnedMesh geometry={nodes.Object_28.geometry} material={materials.Color} skeleton={nodes.Object_28.skeleton} />
            <primitive object={nodes._rootJoint} ref={ref} />
          </group>
        </group>
      </Suspense>
    </>
  );
}

useGLTF.preload("/bee.glb");
export default App;
