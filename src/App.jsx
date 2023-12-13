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
 
   useGSAP(()=>{
    ScrollTrigger.create({
      animation:introTL,
      trigger:'#root > div',
      start:'top top',
      end:ScrollTrigger.maxScroll(window),
      pin:true,
      // pinSpacing:false,
      scrub:1
    })

  },{})


  const cursorDown = () => document.querySelector('canvas').style = 'cursor:grabbing';
  const cursorUp = () => document.querySelector('canvas').style = 'cursor:grab';
  

  return (
    <>
      {/* <Intro setReady={setReady} ready={ready} />   */}

      
      <Canvas id="canvas" camera={{ near: 0.01, far: 100, position: [0, 0, 7], rotation: [0, 0, 0] }} ref={canvasRef} onMouseDown={cursorDown} onMouseUp={cursorUp}>
      <Suspense>
        <Experience setReady={setReady}  ready={ready} introTL={introTL} />
      </Suspense>
      </Canvas>
      
    </>
  );
}

export default App;

