import { lazy } from "react";

import "./App.css";
import Experience from "./app/experience/experience";
import LoadScreen from "./app/Intro/Intro";
// const Experience = lazy(()=>import("./app/experience/experience"))
function App() {
 

  return (
     <LoadScreen>
    <Experience/>
     </LoadScreen>

  );
}


export default App;
