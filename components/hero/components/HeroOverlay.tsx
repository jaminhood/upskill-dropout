import hero_bg from "@/assets/hero-bg.jpg"
import Image from "next/image"

const HeroOverlay = () => {
 return (
  <div className="absolute top-0 left-0 w-full h-full -z-10 before:absolute before:top-0 before:content-[''] before:bg-zinc-950 before:w-full before:h-full before:opacity-80">
   <Image src={hero_bg} alt="" className="w-full h-full object-cover" />
  </div>
 )
}

export default HeroOverlay
