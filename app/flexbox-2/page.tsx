import hero_bg from "@/assets/flexbox_cont_hero.jpeg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/flexbox_cont_memes.jpeg"
import FlexboxContIntro from "@/components/flexbox-2/FlexboxContIntro"
import FlexboxOrder from "@/components/flexbox-2/FlexboxOrder"

export default function Flexbox2() {
  return (
    <>
      <Hero img={hero_bg} title="FlexBox Continuation" />
      <Main>
        <FlexboxContIntro />
        <FlexboxOrder />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
