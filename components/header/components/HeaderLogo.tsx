import logo from "@/assets/logo-dark.png"
import Image from "next/image"
import Link from "next/link"

const HeaderLogo = () => {
 return (
  <div>
   <Link href="/">
    <Image src={logo} className="h-[80px] w-full object-cover" alt="" />
   </Link>
  </div>
 )
}

export default HeaderLogo
