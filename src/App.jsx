import "./App.css";
import { useEffect, useState } from "react";
import { SphereGeometry } from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations, OrbitControls, Environment, Clone, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
function App() {
  const { nodes, materials, animations } = useGLTF("/bee.glb");
  const grass = useGLTF("/grass.glb");
  const { actions, names, ref } = useAnimations(animations);
  useEffect(() => {
    actions["Bee|BeeAction"].play();
  }, []);
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      <Sky distance={4500} />
      <Perf position="top-left" />

      <group>
        <primitive object={grass.scene} position={[0, -30, 0]} />
        <group rotation={[Math.PI * 1.5, 0, 0]} scale={0.5} dispose={null}>
          <skinnedMesh geometry={nodes.Object_28.geometry} material={materials.Color} skeleton={nodes.Object_28.skeleton} />
          <primitive object={nodes._rootJoint} ref={ref} />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/bee.glb");
export default App;
