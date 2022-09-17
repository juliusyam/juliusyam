import type { NextPage } from 'next'
import JuliusYam  from '../components/JuliusYam';
import Image from "next/image";
import ReactFullpage from '@fullpage/react-fullpage';
import {LandingSlideContainer} from "../components/LandingSlideContainer";

const Home: NextPage = () => {

  return (
    <ReactFullpage
      navigation
      licenseKey={ process.env.NEXT_PUBLIC_FULL_PAGE_KEY }
      render={() => (
          <ReactFullpage.Wrapper>
             <div className="section relative h-screen">
               <div className="grid grid-cols-2 h-screen">
                 <LandingImageGrid/>
                 <LandingText/>
               </div>
             </div>
            <LandingSlideContainer slideNumber="01" title="Who am I?">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="02" title="My believe">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="03" title="My experience">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="04" title="Previous projects">
              <h1>content goes here</h1>
            </LandingSlideContainer>

            <LandingSlideContainer slideNumber="05" title="Contact me">
              <h1>content goes here</h1>
            </LandingSlideContainer>
          </ReactFullpage.Wrapper>
        )
      }
    />
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

export default Home
