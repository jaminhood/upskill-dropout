import hero_bg from "@/assets/responsive__hero.jpeg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/responsive__memes.jpeg"
import ResponsivenessIntroduction from "@/components/responsiveness/ResponsivenessIntroduction"
import BreakPoints from "@/components/responsiveness/BreakPoints"
import MediaQueries from "@/components/responsiveness/MediaQueries"
import FlexBoxInResponsiveDesign from "@/components/responsiveness/FlexBoxInResponsiveDesign"

export default function Responsiveness() {
  return (
    <>
      <Hero img={hero_bg} title="Responsive Designs" />
      <Main>
        <ResponsivenessIntroduction />
        <BreakPoints />
        <MediaQueries />
        <FlexBoxInResponsiveDesign />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
