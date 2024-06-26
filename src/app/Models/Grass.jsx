import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export function Grass(props) {
  const { nodes, materials } = useGLTF("/glbs/grass.glb");
  const grassRef = useRef()

  useEffect(()=>{
    props.introTL.from(grassRef.current.position,{
      y:-12,
      duration:1
    },'<')
  },[])

  return (
    <group {...props} dispose={null} scale={0.00032} ref={grassRef}>
         <RigidBody type="fixed" colliders="trimesh">
        <mesh position={[0, -400, 0]} material={materials.N00_000_Hair_00_HAIR_Instance}>
          <cylinderGeometry args={[12400, 11000, 1100, 100]} />
        </mesh>
      </RigidBody>
      <mesh
        geometry={nodes["Cubo129_N00_000_Hair_00_HAIR_(Instance)_0001"].geometry}
        material={materials.N00_000_Hair_00_HAIR_Instance}
        position={[52.939, 288.238, -0.003]}
        rotation={[-Math.PI / 2, 0, -0.247]}
        scale={[97, 97, 90]}
      />  
    </group>
  )

}

useGLTF.preload("/glbs/grass.glb");