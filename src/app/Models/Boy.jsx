
import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";

export function Boy(props) {
  const { nodes } = useGLTF("/glbs/boy.glb");
  const basicMatcap = useTexture("/basic.png");
  const boyRef = useRef()

  useEffect(()=>{
   
    props.introTL.from(boyRef.current.scale,{
        x: 0,
        y: 0,
        z: 0,
      },'<30%')
  
    
  },[])
    
  return (
    <group {...props} dispose={null} scale={0.05} position={[0.4, .15, 0]}  rotation={[-Math.PI / 2, 0, Math.PI / 2]} ref={boyRef}>
      <mesh geometry={nodes.Object_2.geometry}>
        <meshMatcapMaterial matcap={basicMatcap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glbs/boy.glb");
