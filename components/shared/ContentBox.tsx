import Image from "next/image"
import { FC } from "react"
import Heading from "./Heading"

const ContentBox: FC<HeroContentTypes & ChildrenTypes & HeroOverlayTypes> = (props) => {
 return (
  <>
   <Heading title={props.title} />
   {props.children}
   <Image src={props.img} className="w-full object-cover mb-4" alt="" />
  </>
 )
}

export default ContentBox
