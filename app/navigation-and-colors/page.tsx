import hero_bg from "@/assets/navigation-color-hero.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/navigation-colors.jpg"
import Colors from "@/components/navigation-and-colors/Colors"
import Navigation from "@/components/navigation-and-colors/Navigation"

export default function NavigationAndColors() {
  return (
    <>
      <Hero img={hero_bg} title="Navigation & Colors" />
      <Main>
        <Colors />
        <Navigation />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
