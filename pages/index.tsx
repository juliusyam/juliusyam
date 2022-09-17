import type { NextPage } from 'next'
import JuliusYam, {JuliusYamLanding} from '../components/JuliusYam';
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-2 h-full">
        <LandingImageGrid />
        <LandingText />
      </div>
      <JuliusYamLanding />
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
    <section className="p-20 flex justify-end items-center relative">
      <h2 className="font-ocr text-jy-cyan text-2xl text-right mt-32">Web, Mobile, UX, Graphic Design</h2>

      <h5 className="font-ocr text-gray-400 text-1xl text-right bottom-20 right-20 absolute w-80">
        Copyright © 2022 by Julius Yam. All Rights Reserved
      </h5>
    </section>
  )
}

export default Home
