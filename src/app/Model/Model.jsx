import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/garden3.glb");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   actions["Take 001"].play();
  // }, []);
  return (
    <group ref={group} {...props} dispose={null} scale={0.07}>
      <group name="Scene">
        <group name="cherry_0" scale={2}>
          <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials["Material.002"]} />
          <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials["Material.001"]} />
        </group>
        <group name="RootNode001" scale={0.005}>
          <group name="Cubo129" position={[0, 379.489, 0]} rotation={[-Math.PI / 2, 0, -0.247]} scale={[100, 100, 148.273]}>
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
            <mesh
              name="C��rculo003_Material011_0"
              geometry={nodes["C��rculo003_Material011_0"].geometry}
              material={materials["Material.011"]}
              scale={1.011}
            />
          </group>
        </group>

        {/* <group name="butterflies" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="Object_2">
            <group name="RootNode">
              <group name="group2">
                <group name="Object_34">
                  <group name="Object_84" />
                  <skinnedMesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials.B_6_M} skeleton={nodes.Object_85.skeleton} />
                  <group name="Object_86" />
                  <skinnedMesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.B_6_M} skeleton={nodes.Object_87.skeleton} />
                  <group name="Object_88" />
                  <skinnedMesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials.B_6_M} skeleton={nodes.Object_89.skeleton} />
                  <group name="Object_90" />
                  <skinnedMesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials.B_6_M} skeleton={nodes.Object_91.skeleton} />
                  <group name="Object_92" />
                  <skinnedMesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials.B_6_M} skeleton={nodes.Object_93.skeleton} />
                  <group name="Object_94" />
                  <skinnedMesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials.B_6_M} skeleton={nodes.Object_95.skeleton} />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group> */}

        <group name="boy" position={[0.49, 3.61, 7.31]} rotation={[-Math.PI / 2, 0, 0.227]}>
          <mesh name="Object_2001" geometry={nodes.Object_2001.geometry}>
            <meshStandardMaterial color="#ddd" />
          </mesh>
          <mesh name="Object_3" geometry={nodes.Object_3.geometry}>
            <meshStandardMaterial color="#fff" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/garden3.glb");
