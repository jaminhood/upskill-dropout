import meme_Img from "@/assets/html-meme-1.jpg"
import Image from "next/image"

const Meme = () => {
 return (
  <>
   <Image src={meme_Img} className="w-full object-cover my-4" alt="" />
  </>
 )
}

export default Meme
