import hero_bg from "@/assets/intro-to-css.jpg"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"
import meme_Img from "@/assets/css-meme-1.jpg"
import CSSIntro from "@/components/introduction-to-css/CSSIntro"
import InlineCSS from "@/components/introduction-to-css/InlineCSS"
import InternalCSS from "@/components/introduction-to-css/InternalCSS"
import ExternalCSS from "@/components/introduction-to-css/ExternalCSS"
import CSSSelector from "@/components/introduction-to-css/CSSSelector"
import PropertyValue from "@/components/introduction-to-css/PropertyValue"

export default function IntroductionToCSS() {
 document.title = "Introduction To CSS - UpSkill Dropout"

 return (
  <>
   <Hero img={hero_bg} title="Introduction to CSS" />
   <Main>
    <CSSIntro />
    <InlineCSS />
    <InternalCSS />
    <ExternalCSS />
    <CSSSelector />
    <PropertyValue />
    <Meme img={meme_Img} />
   </Main>
  </>
 )
}
