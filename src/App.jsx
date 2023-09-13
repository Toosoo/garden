import { lazy } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
const Experience = lazy(()=>import("./app/experience/experience"))
function App() {
 

  return (
    <Canvas camera={{fov:60,near:.1,far:50,}}>
    <Experience/>
    </Canvas>
  );
}


export default App;
