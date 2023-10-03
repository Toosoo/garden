import { Suspense, useState } from "react";
import "./App.css";
import Experience from "./app/experience/experience";
import Intro from "./app/Intro/Intro";
import { Canvas } from "@react-three/fiber";


function App() {
  const [ready, setReady] = useState(false);
  const [start, setStart] = useState(false);

  return (
    <>
      <Intro setReady={setReady} ready={ready} setStart={setStart} start={start} />  
      <Canvas camera={{ near: 0.1, far: 50, position: [0, 0, 7], rotation: [0, 0, 0] }}>
      <Suspense>
        <Experience setReady={setReady} start={start} ready={ready} />
      </Suspense>
      </Canvas>
      
    </>
  );
}

export default App;
