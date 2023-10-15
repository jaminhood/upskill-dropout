import hero_bg from "@/assets/flexbox-bg.jpeg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/flexbox-meme.jpeg"
import FlexboxIntro from "@/components/flexbox/FlexboxIntro"
import FlexConcept from "@/components/flexbox/FlexConcept"

export default function Flexbox() {
 return (
  <>
   <Hero img={hero_bg} title="FlexBox" />
   <Main>
    <FlexboxIntro />
    <FlexConcept />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
