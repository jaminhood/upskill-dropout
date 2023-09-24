import Image from "next/image"
import { FC } from "react"

const Meme: FC<HeroOverlayTypes> = (props) => {
 return <Image src={props.img} className="w-full object-cover my-4" alt="" />
}

export default Meme
