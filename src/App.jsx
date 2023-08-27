import "./App.css";
import { useEffect, useState } from "react";
import { SphereGeometry } from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations, OrbitControls, Environment, Clone } from "@react-three/drei";
import { Perf } from "r3f-perf";
function App() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bee.glb");
  const { actions, names, ref } = useAnimations(animations);
  useEffect(() => {
   
    actions["Bee|BeeAction"].play();
  }, []);
  return (
    <>
      <OrbitControls />
      <color attach='background' args={['#FFC7EA']} />
      <Environment preset="city" />
      <Perf position="top-left" />
      <group  rotation={[Math.PI * 1.5, 0, 0]} scale={.5} dispose={null}>
        <skinnedMesh  geometry={nodes.Object_28.geometry} material={materials.Color} skeleton={nodes.Object_28.skeleton} />
        <primitive object={nodes._rootJoint} ref={ref} />
      </group>
     
    </>
  );
}

useGLTF.preload("/bee.glb");
export default App;
