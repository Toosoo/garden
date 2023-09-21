import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGLTF, OrbitControls, Sky, PositionalAudio, Sparkles, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame, Canvas } from "@react-three/fiber";
import Text from "../Text/Text";
import { Physics, RigidBody } from "@react-three/rapier";
import { Tree } from "../Model/Tree";
import { Boy } from "../Model/Boy";
import { Grass } from "../Model/Grass";



function Three({ setReady }) {
  const [dayTime, setDayTime] = useState(true);
  const tl = useRef();
  const cameraRef = useRef();
  const skyRef = useRef();
  const sparklesRef = useRef();
  const dayAudio = useRef();
  const nightAudio = useRef();

  useEffect(() => {
    dayAudio.current.play();
    setReady(true);
    const ctx = gsap.context((context) => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline({ defaults: { duration: 0.7, ease: "sine" } })
        .to(".dot", {
          left: "58%",
          backgroundImage: "linear-gradient(#777,#3a3a3a)",
        })
        .to(
          skyRef.current.material.uniforms.sunPosition.value,
          {
            x: 1,
            y: 0,
            z: 0,
          },
          "<"
        )
        .to(
          skyRef.current.material.uniforms.turbidity,
          {
            value: 60,
          },
          "<"
        )
        .to(
          skyRef.current.material.uniforms.mieCoefficient,
          {
            value: 0.05,
          },
          "<"
        )
        .from(
          sparklesRef.current.material,
          {
            visible: false,
          },
          "<50%"
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(dayTime);
  }, [dayTime]);



  return (
    <>
      <Html wrapperClass="switch">
        <button
          className=" switcher relative flex justify-between items-center border rounded-full text-white  w-[110px] h-[50px] px-[13px]"
          onClick={() => setDayTime(!dayTime)}>
          <svg className="day" xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"></path>
          </svg>
          <svg className="night" xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"></path>
          </svg>
          <span className="dot absolute left-[4%] w-10 h-10 rounded-full bg-black z-[-1]  shadow-md"></span>
        </button>
      </Html>
      <Perf position="top-left" />
      <ambientLight intensity={2}/>
      <OrbitControls makeDefault minDistance={6} maxDistance={7} autoRotate={false} minPolarAngle={1.45} maxPolarAngle={1.45} />

      <PositionalAudio loop url="/day.mp3" distance={3} ref={dayAudio} />
      <PositionalAudio loop url="/night.mp3" distance={3} ref={nightAudio} />
      <Sparkles ref={sparklesRef} scale={4} size={3} color={"gold"} />

      <Sky
        ref={skyRef}
        sunPosition={[-0.8, 0.3, -0.5]} // 1,0,0 for dark
        turbidity={10} // 60 for dark
        mieCoefficient={0.005} // .05 for dark
      />
      
      <group position={[0, -1, 0]}>
        <Tree/>
        <Boy />
        <Grass/>
      </group>
      <group position={[0, -0.9, 0]}>
        <Text />
      </group> 
    </>
  );
}

export default function Experience({ setReady }) {
  return (
    <Canvas camera={{near:.1,far:50,position:[0, 0, 7],rotation:[0,0,0]}}>
      <Physics>
        
        <Three setReady={setReady} />
      </Physics>
    </Canvas>
  );
}


