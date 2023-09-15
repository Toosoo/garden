import { lazy } from "react";

import "./App.css";
import Experience from "./app/experience/experience";
import LoadScreen from "./app/LoadScreen/LoadScreen";
// const Experience = lazy(()=>import("./app/experience/experience"))
function App() {
 

  return (
    // <LoadScreen>
    // </LoadScreen>
    <Experience/>

  );
}


export default App;
