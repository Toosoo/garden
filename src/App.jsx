import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import Experience from "./app/experience/experience";
import Intro from "./app/Intro/Intro";

function App() {

  const [ready, setReady] = useState(false);

  return (
    <>
    {/* <Intro setReady={setReady} ready={ready}/> */}
    <Suspense>
    <Experience setReady={setReady} />
    </Suspense>
    </>
     

  );
}


export default App;
