import hero_bg from "@/assets/intro-to-js-hero.png"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/intro-to-javascript-memes.webp"
import IntroToJS from "@/components/introduction-to-javascript/IntroToJS"
import WhatMakesItDifferent from "@/components/introduction-to-javascript/WhatMakesItDifferent"
import AsANewbie from "@/components/introduction-to-javascript/AsANewbie"
import Variables from "@/components/introduction-to-javascript/Variables"
import DataTypes from "@/components/introduction-to-javascript/DataTypes"
import ArithmeticOperators from "@/components/introduction-to-javascript/ArithmeticOperators"

export default function IntroductionToJavaScript() {
  return (
    <>
      <Hero img={hero_bg} title="Introduction To JavaScript" />
      <Main>
        <IntroToJS />
        <WhatMakesItDifferent />
        <AsANewbie />
        <Variables />
        <DataTypes />
        <ArithmeticOperators />
        <Meme img={meme_Img} />
        {/* <Comments /> */}
      </Main>
    </>
  )
}
