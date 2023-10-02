import hero_bg from "@/assets/know-before-box-shadow.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/css-meme-2.jpg"
import ThingsToKnowIntro from "@/components/things-to-know-before-assignment-2/ThingsToKnowIntro"
import InputPlaceholder from "@/components/things-to-know-before-assignment-2/InputPlaceholder"
import InputBorderAndOutline from "@/components/things-to-know-before-assignment-2/InputBorderAndOutline"
import BoxShadow from "@/components/things-to-know-before-assignment-2/BoxShadow"

export default function IntroductionToHTML() {
 return (
  <>
   <Hero img={hero_bg} title="Things To Know Before The Second Assignment" />
   <Main>
    <ThingsToKnowIntro />
    <BoxShadow />
    <InputBorderAndOutline />
    <InputPlaceholder />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
