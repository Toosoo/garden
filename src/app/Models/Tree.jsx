import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tree(props) {
  const { nodes } = useGLTF("/glbs/tree2.glb");
  const glassMatcap = useTexture("/glass.png");

  return (
 
    <group {...props} dispose={null} scale={0.13}>
      <mesh geometry={nodes.Object_4.geometry}>
        <meshMatcapMaterial matcap={glassMatcap} />
      </mesh>

      <mesh geometry={nodes.Object_5.geometry}>
        <meshMatcapMaterial matcap={glassMatcap} />
      </mesh>


    </group>
     
  );
}

useGLTF.preload("/glbs/tree2.glb");
