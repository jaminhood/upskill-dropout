import { FC } from "react"
import Section from "../shared/Section"
import HeroContent from "./components/HeroContent"
import HeroOverlay from "./components/HeroOverlay"

const Hero: FC<HeroTypes> = (props) => {
 return (
  <Section cls="h-[80vh]">
   <HeroOverlay img={props.img} />
   <HeroContent title={props.title} />
  </Section>
 )
}

export default Hero
