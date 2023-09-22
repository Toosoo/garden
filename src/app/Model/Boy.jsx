
import { useGLTF, useMatcapTexture } from "@react-three/drei";

export function Boy(props) {
  const { nodes, materials } = useGLTF("/glbs/boy.glb");
  const [boyMC] = useMatcapTexture("5ECBA4_BCFAE7_92EED0_A1F4DC", 64);
  return (
    <group {...props} dispose={null} scale={0.08} position={[0.6, .15, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <mesh geometry={nodes.Object_2.geometry}>
        <meshMatcapMaterial matcap={boyMC} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glbs/boy.glb");
