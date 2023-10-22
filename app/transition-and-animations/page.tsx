import hero_bg from "@/assets/transition-and-animation-hero.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/transition-and-animation-meme.jpg"
import Transitions from "@/components/transition-and-animations/Transitions"
import Transform from "@/components/transition-and-animations/Transform"
import Animaiton from "@/components/transition-and-animations/Animaiton"
import FixedHeight from "@/components/transition-and-animations/FixedHeight"
import RemEmPx from "@/components/transition-and-animations/RemEmPx"

export default function TransitionAndAnimations() {
 return (
  <>
   <Hero img={hero_bg} title="Transitions, Transforms and Animations" />
   <Main>
    <Transitions />
    <Transform />
    <Animaiton />
    <FixedHeight />
    <RemEmPx />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
