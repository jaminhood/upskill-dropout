import hero_bg from "@/assets/intro-to-js-2.jpeg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/intro-to-js-memes.jpg"
import Comparison from "@/components/introduction-to-javascript-2/Comparison"
import Conditionals from "@/components/introduction-to-javascript-2/Conditionals"
import Logicals from "@/components/introduction-to-javascript-2/Logicals"
import Switch from "@/components/introduction-to-javascript-2/Switch"

export default function IntroductionToJavaScript2() {
  return (
    <>
      <Hero img={hero_bg} title="Introduction To JavaScript 2" />
      <Main>
        <Comparison />
        <Conditionals />
        <Logicals />
        <Switch />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
