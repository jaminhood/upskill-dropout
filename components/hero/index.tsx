import { FC } from "react"
import Section from "../shared/Section"
import HeroContent from "./components/HeroContent"
import HeroOverlay from "./components/HeroOverlay"

const Hero: FC<HeroTypes> = (props) => {
 return (
  <Section cls="md:h-[80vh] pt-[80px] pb-[25vh] md:p-0">
   <HeroOverlay img={props.img} />
   <HeroContent title={props.title} />
  </Section>
 )
}

export default Hero
