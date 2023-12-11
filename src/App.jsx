import { Suspense, useRef, useState } from "react";
import "./App.css";
import Experience from "./app/experience/experience";
import Intro from "./app/Intro/Intro";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from "@gsap/react";

function App() {
  const [ready, setReady] = useState(false);
  const canvasRef = useRef()
  const [introTL,setIntroTL] = useState(gsap.timeline({defaults:{ease:'back'}}));
  // {defaults:{ease:'back'}}
   useGSAP(()=>{

    // setIntroTL(gsap.timeline({defaults:{ease:'back'}}))
  

    ScrollTrigger.create({
      animation:introTL,
      trigger:'#root',
      start:'top top',
      end:ScrollTrigger.maxScroll(window),
      pin:true,
      // pinSpacing:false,
      scrub:1
    })

  },{})

  return (
    <>
      {/* <Intro setReady={setReady} ready={ready} />   */}

      
      <Canvas camera={{ near: 0.1, far: 50, position: [0, 0, 7], rotation: [0, 0, 0] }} ref={canvasRef}>
      <Suspense>
        <Experience setReady={setReady}  ready={ready} introTL={introTL} />
      </Suspense>
      </Canvas>
      
    </>
  );
}

export default App;
