"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px,0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-3
          w-3
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500
          shadow-[0_0_18px_#3b82f6]
        "
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-blue-500/70
          backdrop-blur-sm
        "
      />
    </>
  );
}