import { FC } from "react"
import Container from "../shared/Container"
import Section from "../shared/Section"

const Main: FC<ChildrenTypes> = (props) => {
 return (
  <Section cls="text-zinc-950">
   <Container>
    <div className="p-8 md:max-w-2xl -mt-[5vh] md:-mt-[20vh] bg-zinc-50 md:mx-auto">{props.children}</div>
   </Container>
  </Section>
 )
}

export default Main
