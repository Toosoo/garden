import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

export function Tree(props) {
  const { nodes } = useGLTF("/glbs/tree2.glb");
  const glassMatcap = useTexture("/glass.png");

  const treeRef = useRef()


  useEffect(()=>{
    treeRef.current.children.forEach((e)=>{
      props.introTL.from(e.scale,{
        x:0,
        y:0,
        z:0,
      },'<80%')
    })

  },[])

  return (
 
    <group {...props} dispose={null} scale={0.13} ref={treeRef}>
      <mesh geometry={nodes.Object_5.geometry}>
        <meshMatcapMaterial matcap={glassMatcap} />
      </mesh>
      <mesh geometry={nodes.Object_4.geometry}>
        <meshMatcapMaterial matcap={glassMatcap} />
      </mesh>



    </group>
     
  );
}

useGLTF.preload("/glbs/tree2.glb");
