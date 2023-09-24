import { FC } from "react"
import Container from "./Container"

const Section: FC<SectionTypes> = (props) => {
 return (
  <section id={props.id ? props.id : ``} className={`${props.cls} w-full relative z-0`}>
   <Container>{props.children}</Container>
  </section>
 )
}

export default Section
