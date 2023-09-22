
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Grass(props) {
  const { nodes, materials } = useGLTF("/glbs/grass.glb");
  return (
    <group {...props} dispose={null} scale={0.00035}>
     
     <RigidBody type="fixed">

        <group position={[52.939, 43.245, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={[12682.223, 12682.222, 12682.222]}>
          <mesh
            geometry={nodes["C��rculo003_Material011_0"].geometry}
            material={materials.N00_000_Hair_00_HAIR_Instance}
            scale={1.013}
            />
        </group>
            </RigidBody>

        <mesh
          geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0001"].geometry}
          material={materials.N00_000_Hair_00_HAIR_Instance}
          position={[52.939, 288.238, -0.003]}
          rotation={[-Math.PI / 2, 0, -0.247]}
          scale={[100, 100, 120]}
        />
   
    </group>
  );
}

useGLTF.preload("/glbs/grass.glb");
