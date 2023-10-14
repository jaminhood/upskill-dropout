import hero_bg from "@/assets/second-assignment-hero.webp"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/second-assignment-meme.png"
import SolutionTwoIntro from "@/components/second-week-assignment-solution/SolutionTwoIntro"
import IndexPage from "@/components/second-week-assignment-solution/IndexPage"
import StylePage from "@/components/second-week-assignment-solution/StylePage"

export default function SecondWeekAssignmentSolution() {
 document.title = "Second Week Assignment Solution - UpSkill Dropout"

 return (
  <>
   <Hero img={hero_bg} title="Second Assignment Solution" />
   <Main>
    <SolutionTwoIntro />
    <IndexPage />
    <StylePage />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
