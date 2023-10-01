
import { useGLTF, useTexture } from "@react-three/drei";

export function Boy(props) {
  const { nodes, materials } = useGLTF("/glbs/boy.glb");
  const basicMatcap = useTexture("/basic.png");
  return (
    <group {...props} dispose={null} scale={0.05} position={[0.4, .15, 0]}  rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <mesh geometry={nodes.Object_2.geometry}>
        <meshMatcapMaterial matcap={basicMatcap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glbs/boy.glb");
