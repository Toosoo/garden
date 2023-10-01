import { Float, useGLTF, useTexture } from "@react-three/drei";

export function Email(props) {
  const { nodes, materials } = useGLTF("/glbs/email.glb");
  const basicMatcap = useTexture("/basic.png");

  return (
    <Float speed={4}>
      <group {...props} dispose={null} position={[-0.5, 0, 0]} scale={0.13} rotation={[-Math.PI * 0.5, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry}>
          <meshMatcapMaterial matcap={basicMatcap} />
        </mesh>
      </group>
    </Float>
  );
}

useGLTF.preload("/glbs/email.glb");
