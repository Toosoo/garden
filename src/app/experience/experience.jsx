import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGLTF, useAnimations, OrbitControls, Sky, SpotLight, PositionalAudio, Sparkles, useProgress, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useFrame, Canvas } from "@react-three/fiber";

function Three({setReady}) {
  const { posX, posY, posZ, rayleigh, turbidity, mieDirectionalG, mieCoefficient, rayColor } = useControls({
    rayleigh: 0.5,
    turbidity: 10,
    mieDirectionalG: 0.8,
    mieCoefficient: 0.05,
    rayColor: "#fff",
    posX: -0.8,
    posY: 0.3,
    posZ: -0.5,
  });
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [reversed, setReversed] = useState(true);
  const tl = useRef();
  const skyRef = useRef();
  const sparklesRef = useRef();
  const garden = useGLTF("/garden2.glb");

  useEffect(() => {
    setReady(true)
    const ctx = gsap.context((context) => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline({ defaults: {  ease: "power2.inOut" } })
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
    tl.current.reversed(reversed);
  }, [reversed]);
  useFrame((_, delta) => {
    garden.scene.rotation.y += delta * 0.05;
  });

  return (
    <>
      <Html wrapperClass="switch" >
        <button
          className=" switcher relative flex justify-between items-center border rounded-full text-white  w-[110px] h-[50px] px-[13px]"
          onClick={() => setReversed(!reversed)}>
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
      <ambientLight intensity={2} />
      <PositionalAudio autoplay loop url="/day.mp3" distance={5} />
      <Sparkles ref={sparklesRef} scale={2} size={2} color={"gold"} />
      <OrbitControls />
      <Sky
        ref={skyRef}
        sunPosition={[-0.8, 0.3, -0.5]} // 1,0,0 for dark
        turbidity={10} // 60 for dark
        mieCoefficient={0.005} // .05 for dark
      />

      {/* <SpotLight ref={lightRef} position={[-2, 5, 0]} penumbra={1} distance={7} angle={0.1} attenuation={10} anglePower={10} intensity={0} color={rayColor} /> */}
      <group position={[0, -1, 0]}>
        <primitive object={garden.scene} scale={0.04} />
      </group>
    </>
  );
}

export default function Experience({setReady}) {
  return (
    <Canvas camera={{ fov: 60, near: 0.1, far: 50 }}>
      <Three setReady={setReady} />
    </Canvas>
  );
}

useGLTF.preload("/garden2.glb");
