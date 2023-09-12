import "./App.css";
import { Suspense, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGLTF, useAnimations, OrbitControls, Sky, SpotLight, PositionalAudio, Sparkles, useProgress, Html } from "@react-three/drei";
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
  const garden = useGLTF("/garden2.glb");

  useEffect(() => {
    const ctx = gsap.context(() => {});

    return () => ctx.revert();
  }, []);

  useFrame((_, delta) => {
    garden.scene.rotation.y += delta * 0.05;
  });

  return (
    <Canvas camera={{
      fov:60,
      near:.1,
      far:50,
    }}>
      <Suspense fallback={null}>

      <Perf position="top-left" />
      <ambientLight intensity={2} />
      <PositionalAudio autoplay loop url="/day.mp3" distance={5} />
      {/* <Sparkles scale={3} size={2} opacity={1} color={'gold'} /> */}
      {/* <OrbitControls /> */}

      {/* <Sky  distance={200} rayleigh={5.5} turbidity={80} inclination={.5} mieDirectionalG={.8}  /> */}
      <Sky ref={skyRef} rayleigh={rayleigh} turbidity={turbidity} inclination={inclination} mieDirectionalG={mieDirectionalG} mieCoefficient={mieCoefficient} />

      {/* <SpotLight ref={lightRef} position={[-2, 5, 0]} penumbra={1} distance={7} angle={0.1} attenuation={10} anglePower={10} intensity={0} color={rayColor} /> */}
      <group position={[0, -1, 0]}>
        <primitive object={garden.scene} scale={0.04} />
      </group>


     
      </Suspense>


    </Canvas>
  );
}
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


useGLTF.preload("/garden2.glb");
export default App;
