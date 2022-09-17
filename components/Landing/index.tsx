import Image from "next/image";
import JuliusYam from "../JuliusYam";

export function LandingInitialSlide() {

  return (
    <div className="section relative h-screen">
      <div className="grid grid-cols-2 h-screen">
        <LandingImageGrid/>
        <LandingText/>
      </div>
    </div>
  )
}

function LandingImageGrid() {
  return (
    <section className="flex justify-end items-end">
      <Image src="/img/profile.png" layout="fixed" width="800" height="710" objectFit="cover" />
    </section>
  )
}

function LandingText() {
  return (
    <section className="p-20 grid content-center align-center relative">
      <div>
        <JuliusYam textAlign="text-right" fontSize="text-3xl md:text-5xl lg:text-8xl text-right" />
        <h2 className="font-ocr text-jy-cyan text-2xl text-right">Web, Mobile, UX, Graphic Design</h2>
      </div>

      <h5 className="font-ocr text-gray-400 text-1xl text-right bottom-20 right-20 absolute w-80">
        Copyright © 2022 by Julius Yam. All Rights Reserved
      </h5>
    </section>
  )
}