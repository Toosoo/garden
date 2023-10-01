
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/glbs/tree.glb");
  const [glassMC] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209");

  return (
    
    <group {...props} dispose={null} scale={0.13}>
      <mesh geometry={nodes.Object_4.geometry}>
        <meshMatcapMaterial matcap={glassMC} />
      </mesh>

      <mesh geometry={nodes.Object_5.geometry}>
        <meshMatcapMaterial matcap={glassMC} />
      </mesh>
 
    </group>
  );
}

useGLTF.preload("/glbs/tree.glb");
