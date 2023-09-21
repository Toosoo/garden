import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/garden3.glb");
  const [matcap] = useMatcapTexture('04989A_0CE3E4_04D2D5_04C7C8',64)
  const [glassMC] = useMatcapTexture('2E763A_78A0B7_B3D1CF_14F209',64)
  const [brushedMC] = useMatcapTexture('2E2E2D_7D7C76_A3A39F_949C94',64)

  return (
    <group ref={group} {...props} dispose={null} scale={0.07} rotation-y={Math.PI * .5}>
      <group name="Scene">
       
        
        <group name="RootNode001" scale={0.005}>
          <group name="Cubo129" position={[0, 379.489, 0]} rotation={[-Math.PI / 2, 0, -0.247]} scale={[100, 100, 110]}>
            <mesh
              name="Cubo129_N00_000_Hair_00_HAIR_(Instance)_0"
              geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0"].geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Cubo129_N00_000_Hair_00_HAIR_(Instance)_0001"
              geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0001"].geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Cubo129_N00_000_Hair_00_HAIR_(Instance)_0002"
              geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0002"].geometry}
              material={materials["Material.011"]}
            />
            <mesh
              name="Cubo129_N00_000_Hair_00_HAIR_(Instance)_0003"
              geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0003"].geometry}
              material={materials["Material.011"]}
            />
          </group>
  
        <group name="C��rculo003" position={[52.939, 43.245, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={[12682.225, 12682.216, 12682.216]}>
          <RigidBody type="fixed" colliders='trimesh'>
            <mesh
              name="C��rculo003_Material011_0"
              geometry={nodes["C��rculo003_Material011_0"].geometry}
              material={materials["Material.011"]}
              scale={1.011}
              />
        </RigidBody>
          </group>

        </group>
        
        <group name="boy" position={[0.49, 3.61, 7.31]} rotation={[-Math.PI / 2, 0, 0.227]}>
          <mesh name="Object_2001" geometry={nodes.Object_2001.geometry}>
            <meshMatcapMaterial matcap={matcap} />
          </mesh>
          <mesh name="Object_3" geometry={nodes.Object_3.geometry}>
          <meshMatcapMaterial matcap={matcap} />
          </mesh>
        </group>

      </group>
    </group>
  );
}

useGLTF.preload("/garden3.glb");
