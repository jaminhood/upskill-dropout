import Section from "../shared/Section"
import HeroContent from "./components/HeroContent"
import HeroOverlay from "./components/HeroOverlay"

const Hero = () => {
 return (
  <Section cls="h-[80vh]">
   <HeroOverlay />
   <HeroContent />
  </Section>
 )
}

export default Hero
