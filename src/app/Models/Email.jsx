import { Float, useGLTF, useMatcapTexture } from "@react-three/drei";

export function Email(props) {
  const { nodes, materials } = useGLTF("/glbs/email.glb");
  const [basicMatcap] = useMatcapTexture("5ECBA4_BCFAE7_92EED0_A1F4DC", 64);

  return (
    <Float speed={4}>
      <group {...props} dispose={null} position={[-.5,0,0]} scale={.13} rotation={[-Math.PI *.5,0,0]} >
        <mesh geometry={nodes.Object_3.geometry}>
            <meshMatcapMaterial matcap={basicMatcap} />
        </mesh>
      </group>
    </Float>
  );
}

useGLTF.preload("/glbs/email.glb");
