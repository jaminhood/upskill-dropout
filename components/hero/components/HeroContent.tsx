import Container from "@/components/shared/Container"
import { FC } from "react"

const HeroContent: FC<HeroContentTypes> = (props) => {
 return (
  <Container>
   <div className="md:h-[70vh] min-h-[40vh] flex justify-center items-center">
    <div className="max-w-xl text-center text-zinc-50">
     <h1 className="text-5xl md:text-7xl font-montserrat-regular">{props.title}</h1>
    </div>
   </div>
  </Container>
 )
}

export default HeroContent
