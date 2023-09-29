import { useRef } from "react";
import { Float, useGLTF, useMatcapTexture, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Egy() {
  
  const texture =  useTexture('/flag.jpg')
 
  return (
    <Float>
      <mesh rotation={[0,Math.PI * .5,0]}>
        <planeGeometry args={[.3,.2]}/>
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  );
}


