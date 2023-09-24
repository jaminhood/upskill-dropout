import Image from "next/image"
import { FC } from "react"

const HeroOverlay: FC<HeroOverlayTypes> = (props) => {
 return (
  <div className="absolute top-0 left-0 w-full h-full -z-10 before:absolute before:top-0 before:content-[''] before:bg-zinc-950 before:w-full before:h-full before:opacity-80">
   <Image src={props.img} alt="" className="w-full h-full object-cover" />
  </div>
 )
}

export default HeroOverlay
