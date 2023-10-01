
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/glbs/tree.glb");
  const [glassMC] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);
  const [brushedMC] = useMatcapTexture("2B2828_7B796F_534F4A_616464", 64);
  return (
    
    <group {...props} dispose={null} scale={0.13}>
      <mesh geometry={nodes.Object_4.geometry}>
        <meshMatcapMaterial matcap={glassMC} />
      </mesh>

      <mesh geometry={nodes.Object_5.geometry}>
        <meshMatcapMaterial matcap={brushedMC} />
      </mesh>
 
    </group>
  );
}

useGLTF.preload("/glbs/tree.glb");
