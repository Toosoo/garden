import React, { useRef } from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";

export function Boy(props) {
  const { nodes, materials } = useGLTF("/src/assets/glbs/boy.glb");
  const [glassMC] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);
  return (
    <group {...props} dispose={null} scale={.1}  position={[0, 0, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
       
        >
            <meshMatcapMaterial matcap={glassMC}/>
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
         
        />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/glbs/boy.glb");
