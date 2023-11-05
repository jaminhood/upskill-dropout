import hero_bg from "@/assets/essentials_hero.jpeg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/essentials__memes.webp"
import Positionings from "@/components/essentials/Positionings"
import ZIndex from "@/components/essentials/ZIndex"
import BeforeAndAfter from "@/components/essentials/BeforeAndAfter"

export default function Essentials() {
  return (
    <>
      <Hero img={hero_bg} title="CSS Essentials" />
      <Main>
        <Positionings />
        <ZIndex />
        <BeforeAndAfter />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
