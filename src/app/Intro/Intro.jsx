import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
export default function Intro({ ready, setReady }) {
  const introRef = useRef();

  useEffect(() => {
    const text = SplitType.create(".title", { types: "chars" });
    gsap.set(".title .char", { opacity: 0 });
    if (ready) {
      const ctx = gsap.context((context) => {
        gsap.to(".title .char", {
          opacity: 1,
          stagger: 0.2,
        });
      }, introRef);
      return () => ctx.revert();
    }
  }, [ready]);

  return (
    <div ref={introRef} className=" absolute inset-0 z-[99999] flex justify-center items-center bg-gradient-to-b from-[#88A4C1] to-[#CFD8DC]">
      <button
        onClick={() => gsap.to(introRef.current, { opacity: 0, yPercent: -100 })}
        className="relative rounded-full w-60 h-60 text-white capitalize after:absolute after:inset-0 after:rounded-full after:animate-pluse after:border-2   before:absolute before:inset-0 before:rounded-full before:border-gray-300 before:border before:animate-pluse hover:before:scale-90 hover:after:scale-105 before:ease-in-out  before:duration-700 after:ease-in-out after:duration-700">
        <span className="title tracking-[5px]">start</span>
      </button>
    </div>
  );
}
