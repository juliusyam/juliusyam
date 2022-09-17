import type { NextPage } from 'next'
import JuliusYam, {JuliusYamLanding} from '../components/JuliusYam';
import Image from "next/image";
import ReactFullpage from '@fullpage/react-fullpage';
import {useState} from "react";

const Home: NextPage = () => {
  // const [fullpages, setfullpages] = useState([...originalPages]);

  const fullpages = [{ text: "Section 1" }, { text: "Section 2" }, { text: "Section 3" }];

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
               <JuliusYamLanding/>
             </div>
            {fullpages.map(({ text }) => (
              <div key={text} className="section">
                <h1>{text}</h1>
              </div>
            ))}
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
    <section className="p-20 flex justify-end items-center relative">
      <h2 className="font-ocr text-jy-cyan text-2xl text-right mt-32">Web, Mobile, UX, Graphic Design</h2>

      <h5 className="font-ocr text-gray-400 text-1xl text-right bottom-20 right-20 absolute w-80">
        Copyright © 2022 by Julius Yam. All Rights Reserved
      </h5>
    </section>
  )
}

export default Home
