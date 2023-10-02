import { Suspense, useState } from "react";
import "./App.css";
import Experience from "./app/experience/experience";
import Intro from "./app/Intro/Intro";

function App() {
  const [ready, setReady] = useState(false);
  const [start, setStart] = useState(false);

  return (
    <>
      {/* <Intro setReady={setReady} ready={ready} setStart={setStart} start={start} />   */}
      <Suspense>
        <Experience setReady={setReady} start={start} ready={ready} />
      </Suspense>
    </>
  );
}

export default App;
