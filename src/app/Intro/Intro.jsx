import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
export default function Intro({children}) {
  const [ready, setReady] = useState(false);
  
  useLayoutEffect(() => {
    
  }, []);
  return (
    <div className="w-full h-full absolute top-0 z-50 flex justify-center items-center bg-gradient-to-b from-[#88A4C1] to-[#CFD8DC]">
      <button className="relative rounded-full w-40 h-40 text-white capitalize text-xl font-medium before:absolute before:inset-0 before:rounded-full  before:animate-spin-slow before:border-b-2 before:border-l-2">
        {!ready ? "loading" : "Start"}
      </button>
    </div>
  );
}

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), []);
  return null;
}
