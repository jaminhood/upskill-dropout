import hero_bg from "@/assets/hero-bg.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/assignment-meme-1.jpeg"
import SolutionOneIntro from "@/components/first-week-assignment-solution/SolutionOneIntro"
import IndexPage from "@/components/first-week-assignment-solution/IndexPage"
import ImagesPage from "@/components/first-week-assignment-solution/ImagesPage"

export default function FirstWeekAssignmentSolution() {
  return (
    <>
      <Hero img={hero_bg} title="First Week's Assignment Solution" />
      <Main>
        <SolutionOneIntro />
        <IndexPage />
        <ImagesPage />
        <Meme img={meme_Img} />
      </Main>
    </>
  )
}
