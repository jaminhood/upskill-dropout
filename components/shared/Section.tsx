import { FC } from "react"
import Container from "./Container"

const Section: FC<SectionTypes> = (props) => {
 return (
  <section id={props.id ? props.id : ``} className={`border-b border-gray-700 ${props.cls} w-full relative z-0`}>
   <Container>{props.children}</Container>
  </section>
 )
}

export default Section
