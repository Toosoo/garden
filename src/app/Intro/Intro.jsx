import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Intro({ ready }) {
  const introRef = useRef();



  useEffect(() => {
    const text = SplitType.create(".title", { types: "chars" });
    gsap.set(".title .char", { opacity: 0 });
    
      const ctx = gsap.context((context) => {
        gsap.to(".title .char", {
          opacity: 1,
          stagger: 0.2,
        });
        gsap.to(".loadTitle", {
          opacity: 0,
        });
      }, introRef);
      return () => ctx.revert();
    
  }, [ready]);

  const introAnim = () => {
    if (ready) {
      gsap.to(introRef.current, { keyframes: [{ opacity: 0 }, { display: "none" }] });
    }
  };

  return (
    <div ref={introRef} className=" absolute inset-0 z-[99999] flex justify-center items-center bg-gradient-to-b from-[#88A4C1] to-[#CFD8DC]">
      <button
        onClick={introAnim}
        className=" relative flex justify-center items-center rounded-full text-4xl tracking-[2px] w-60 h-60 text-white uppercase after:absolute after:inset-0 after:rounded-full after:animate-pluse after:border-2   before:absolute before:inset-0 before:rounded-full before:border-gray-300 before:border before:animate-pluse hover:before:scale-90 hover:after:scale-105 before:ease-in-out  before:duration-700 after:ease-in-out after:duration-700">
        <span className="title">start</span>
        <span className="loadTitle  absolute">loading</span>
      </button>
      <span className="absolute bottom-5 text-2xl">
        this is just a demo
      </span>
    </div>
  );
}
