import React, { useRef } from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";

export function Boy(props) {
  const { nodes, materials } = useGLTF("/src/assets/glbs/boy.glb");
  const [boyMC] = useMatcapTexture("515151_DCDCDC_B7B7B7_9B9B9B", 64);
  return (
    <group {...props} dispose={null} scale={0.1} position={[0.7, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <mesh geometry={nodes.Object_2.geometry}>
        <meshMatcapMaterial matcap={boyMC} />
      </mesh>
      <mesh geometry={nodes.Object_3.geometry}>
        <meshMatcapMaterial matcap={boyMC} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/src/assets/glbs/boy.glb");
