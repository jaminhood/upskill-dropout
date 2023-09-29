import hero_bg from "@/assets/hero-bg.jpg"
import Hero from "@/components/hero"
import Anchor from "@/components/introduction-to-html/Anchor"
import Boilerplate from "@/components/introduction-to-html/Boilerplate"
import Headings from "@/components/introduction-to-html/Headings"
import IDE from "@/components/introduction-to-html/IDE"
import ImageTag from "@/components/introduction-to-html/ImageTag"
import Intro from "@/components/introduction-to-html/Intro"
import Lists from "@/components/introduction-to-html/Lists"
import ParagraphTag from "@/components/introduction-to-html/ParagraphTag"
import Tags from "@/components/introduction-to-html/Tags"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/assignment-meme-1.jpeg"
import SolutionOneIntro from "@/components/first-week-assignment-solution/SolutionOneIntro"
import IndexPage from "@/components/first-week-assignment-solution/IndexPage"
import ImagesPage from "@/components/first-week-assignment-solution/ImagesPage"

export default function IntroductionToHTML() {
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
