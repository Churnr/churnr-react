import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Problem() {

  const boxRef = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.parent',
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=1000",
    }
  })

  useEffect(() => {
    gsap.set('.parent', { perspective: 2000, autoAlpha: 1 })
    tl.to(boxRef.current, {
      transformOrigin: "0",
      rotationX: 0, z: 0
    })
  })

  return (
    <section id='problem' className='problem'>
      <div className='wrapper'>
        <div className="parent relative min-h-screen">
          <div className="box1 absolute" ref={boxRef}></div>
        </div>
      </div>
    </section>
  )
}