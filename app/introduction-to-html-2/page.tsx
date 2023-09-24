import hero_bg from "@/assets/intro-2.jpg"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AudioSection from "@/components/introduction-to-html-2/AudioSection"
import CommentsSection from "@/components/introduction-to-html-2/Comments"
import DivSection from "@/components/introduction-to-html-2/DivSection"
import FormSection from "@/components/introduction-to-html-2/FormSection"
import InputSection from "@/components/introduction-to-html-2/InputSection"
import LabelSection from "@/components/introduction-to-html-2/LabelSection"
import SpanSection from "@/components/introduction-to-html-2/SpanSection"
import VideoSection from "@/components/introduction-to-html-2/VideoSection"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/intro-2-meme.jpg"

export default function IntroductionToHTML() {
 return (
  <>
   <Header />
   <Hero title="Introduction To HTML 2" img={hero_bg} />
   <Main>
    <CommentsSection />
    <SpanSection />
    <DivSection />
    <AudioSection />
    <VideoSection />
    <InputSection />
    <LabelSection />
    <FormSection />
    <Meme img={meme_Img} />
   </Main>
   <Footer />
  </>
 )
}
