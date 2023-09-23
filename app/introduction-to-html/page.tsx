import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Anchor from "@/components/introduction-to-html/Anchor"
import Boilerplate from "@/components/introduction-to-html/Boilerplate"
import Headings from "@/components/introduction-to-html/Headings"
import IDE from "@/components/introduction-to-html/IDE"
import ImageTag from "@/components/introduction-to-html/ImageTag"
import Intro from "@/components/introduction-to-html/Intro"
import Lists from "@/components/introduction-to-html/Lists"
import Meme from "@/components/introduction-to-html/Meme"
import ParagraphTag from "@/components/introduction-to-html/ParagraphTag"
import Tags from "@/components/introduction-to-html/Tags"
import Main from "@/components/main"

export default function IntroductionToHTML() {
 return (
  <>
   <Header />
   <Hero />
   <Main>
    <Intro />
    <IDE />
    <Tags />
    <Boilerplate />
    <Headings />
    <ParagraphTag />
    <Anchor />
    <Lists />
    <ImageTag />
    <Meme />
   </Main>
   <Footer />
  </>
 )
}
