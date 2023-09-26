import { Float, Html, useGLTF, useMatcapTexture } from "@react-three/drei";

export function Insta(props) {
  const { nodes, materials } = useGLTF("/glbs/insta.glb");
  const [basicMatcap] = useMatcapTexture("5ECBA4_BCFAE7_92EED0_A1F4DC", 64);
  return (
    <Float  speed={3} >
      
      <group {...props} dispose={null} scale={0.03}>
        <mesh geometry={nodes.Instagram_2_Instagram1_0.geometry} >
        <meshMatcapMaterial matcap={basicMatcap} />
            </mesh>
      </group>

      <Html>
        
      </Html>


      
    </Float>
  );
}

useGLTF.preload("/glbs/insta.glb");
