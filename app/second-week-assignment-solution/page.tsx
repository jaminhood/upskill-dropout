import hero_bg from "@/assets/second-assignment-hero.webp"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/assignment-meme-1.jpeg"
import ImagesPage from "@/components/first-week-assignment-solution/ImagesPage"
import SolutionTwoIntro from "@/components/second-week-assignment-solution/SolutionTwoIntro"
import IndexPage from "@/components/second-week-assignment-solution/IndexPage"

export default function FirstWeekAssignmentSolution() {
 return (
  <>
   <Hero img={hero_bg} title="Second Assignment Solution" />
   <Main>
    <SolutionTwoIntro />
    <IndexPage />
    <ImagesPage />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
