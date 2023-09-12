import "./App.css";
import { Suspense, useEffect, useState } from "react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGLTF, useAnimations, OrbitControls, Environment, Clone, Sky, SpotLight, PositionalAudio } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
function App() {
  const { rayleigh, turbidity, inclination, mieDirectionalG, mieCoefficient, rayColor } = useControls({
    rayleigh: {
      value: 0.5,
    },
    turbidity: 10,
    inclination: 0.6,
    mieDirectionalG: 0.8,
    mieCoefficient: 0.005,
    rayColor: "#fff",
  });

  const skyRef = useRef();
  const lightRef = useRef();
  const garden = useGLTF("/garden.glb");
  let foo = { bar: 0 };

  useEffect(() => {
    console.log(skyRef.current)
    const ctx = gsap.context(() => {


      gsap.to(lightRef.current, {
        intensity: 5,
        duration: 2,
        ease: "power2",
      });
    


    });
   
    return ()=> ctx.revert()
  }, []);


  useFrame((_, delta) => {
    
  })


  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      {/* <Sky  distance={200} rayleigh={5.5} turbidity={80} inclination={.5} mieDirectionalG={.8}  /> */}
      <Sky ref={skyRef} distance={1000} rayleigh={rayleigh} turbidity={turbidity} inclination={inclination} mieDirectionalG={mieDirectionalG} mieCoefficient={mieCoefficient} />
    
      <Perf position="top-left" />
      <SpotLight ref={lightRef} position={[-2, 5, 0]} penumbra={1} distance={7} angle={0.1} attenuation={10} anglePower={10} intensity={0} color={rayColor} />
      <PositionalAudio autoplay loop url="/day.mp3" distance={5} />
  
      <group position={[0, -1, 0]}>
        <primitive object={garden.scene} scale={0.04} />
      </group>
    </>
  );
}

useGLTF.preload("/bee.glb");
export default App;
