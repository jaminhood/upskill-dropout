import hero_bg from "@/assets/functions-in-js.png"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/functions-in-js-memes.jpg"
import FunctionsIntro from "@/components/functions-in-js/FunctionsIntro"
import FunctionDefinition from "@/components/functions-in-js/FunctionDefinition"

export default function Functions() {
  return (
    <>
      <Hero img={hero_bg} title="Functions In JavaScript" />
      <Main>
        <FunctionsIntro />
        <FunctionDefinition />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
