import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from 'split-type'
export default function Intro({ ready, setReady }) {
  const introRef = useRef()

  useEffect(() => {
    const text = SplitType.create('.title')
    gsap.set('.title .char',{opacity:0})
    if (ready) {
    const ctx = gsap.context(()=>{
        gsap.to('.title .char',{
              opacity:1,
              stagger:.3
        })
      },introRef)
      return () => ctx.revert() 
    }
  }, [ready]);
  return (
    <div ref={introRef} className=" absolute inset-0 z-[99999] flex justify-center items-center bg-gradient-to-b from-[#88A4C1] to-[#CFD8DC]">
      <button className="relative rounded-full w-60 h-60 text-white capitalize before:absolute before:inset-0 before:rounded-full  before:animate-pulse before:border-2 ">
        <span className="title">start</span>
      </button>
    </div>
  );
}
