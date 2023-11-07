import hero_bg from "@/assets/objects-and-arrays-hero.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/objects-and-arrays-memes.jpg"
import Arrays from "@/components/objects-and-arrays/Arrays"
import Objects from "@/components/objects-and-arrays/Objects"

export default function ObjectsAndArrays() {
  return (
    <>
      <Hero img={hero_bg} title="Objects And Arrays" />
      <Main>
        <Arrays />
        <Objects />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
