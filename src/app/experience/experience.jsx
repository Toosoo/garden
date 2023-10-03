import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGLTF, OrbitControls, Sky, Sparkles, Html, KeyboardControls, useProgress } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame, Canvas } from "@react-three/fiber";
import Text from "../Text/Text";
import { Physics, RigidBody } from "@react-three/rapier";
import dayURL from "/sounds/day.mp3";
import NightURL from "/sounds/night.mp3";
import { Grass } from "../Models/Grass";
import { Insta } from "../Models/Insta";
import { Email } from "../Models/Email";
import { Tree } from "../Models/Tree";
import { Boy } from "../Models/Boy";
import Ball from "../Ball/Ball";

function Loading({setReady}){
  const { active } = useProgress()
  useEffect(()=>{

    active ? null : setReady(true)
    console.log(active)
  },[active])
}  

function Three({ready}) {
  const [dayTime, setDayTime] = useState(false);
  const tl = useRef();
  let musicTL = useRef();
  const skyRef = useRef();
  const sparklesRef = useRef();
  const dotRef = useRef();
  const [music, setMusic] = useState(true);

  const dayMusic = new Audio(dayURL);
  dayMusic.loop = true;
  const nightMusic = new Audio(NightURL);
  nightMusic.loop = true;

  
  


  useEffect(() => {
    if(ready) {
      const ctx = gsap.context((context) => {
        tl.current && tl.current.progress(0).kill();
        tl.current = gsap
          .timeline({ defaults: { duration: 1, ease: "sine" } })
          .from(dotRef.current, {
            left: "58%",
            backgroundImage: "linear-gradient(#777,#3a3a3a)",
          },0)
          .from(
            skyRef.current.material.uniforms.sunPosition.value,
            {
              x: 1,
              y: 0,
              z: 0,
            },
            "<"
          )
          .from(
            skyRef.current.material.uniforms.turbidity,
            {
              value: 60,
            },
            "<"
          )
          .from(
            skyRef.current.material.uniforms.mieCoefficient,
            {
              value: 0.05,
            },
            "<"
          )
          .to(sparklesRef.current.material,{
              visible: false,
            },'<');
      });
      return () => ctx.revert();
    }
  }, [ready]);

  useEffect(() => {
    ready ?  tl.current.reversed(dayTime) : null
  }, [dayTime]);


  const musicSwitch = () => {
    setMusic(!music)
    musicTL.current && musicTL.current.progress(0).kill()
    if(music) {
      dayMusic.play()
      musicTL.current = gsap.timeline() 
      .to(".sound-charts path:nth-child(odd)", {
        scale: 0.5,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
        transformOrigin: "center",
      }).to(
        ".sound-charts path:nth-child(even)",
        {
          scale: 0.5,
          delay: 0.3,
          yoyo: true,
          repeat: -1,
          transformOrigin: "center",
        },
        "<"
      );
    }  else {
      dayMusic.pause()
    }
  };

  return (
    <>
      <Html wrapperClass="switch" className="flex  items-center w-full">
        <button
          className=" switcher relative flex justify-between items-center border mx-auto rounded-full text-white  w-[110px] h-[50px] px-[13px]"
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
          <span ref={dotRef} className="dot absolute left-[4%] w-10 h-10 rounded-full bg-black z-[-1]  shadow-md"></span>
        </button>

        <button className="playButton absolute right-10" onClick={musicSwitch}>
          <svg className="sound-charts" width="40" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4234 34.0292L12.4234 39.9708" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M24.5766 21.3358L24.5767 52.9343" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M37 12.4234L37 61.5766" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M49.4234 21.3358L49.4234 52.9343" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M61.5766 34.0292L61.5766 39.9708" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </Html>
      <Perf position="top-left" />

      <OrbitControls makeDefault minDistance={6} maxDistance={7} autoRotate={false} minPolarAngle={1.45} maxPolarAngle={1.45} />
    
      <Sparkles ref={sparklesRef} scale={5} size={3} color={"gold"} position={[0, 1, 0]} />

      <Sky
        ref={skyRef}
        sunPosition={[-0.8, 0.3, -0.5]} // 1,0,0 for dark
        turbidity={10} // 60 for dark
        mieCoefficient={0.005} // .05 for dark
      />
       
      <group  position={[0, -1.4, 0]}>
        <Tree />
        <Boy /> 
        <Grass />
      </group>

      {/* <group  position={[-3.5, -0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Insta />
        <Email />
      </group> */}

      <group  position={[0, 0, 1]}>
        <Ball />
      </group>

     
      <group  position={[0, -1.3, 3.6]}>
        <Text />
      </group>
    </>
  );
}

export default function Experience({setReady,ready}) {
  return (
    <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
    ]}>
        <Loading setReady={setReady} />
        <Physics>
          <Three ready={ready} />
        </Physics>
    </KeyboardControls>
  );
}
