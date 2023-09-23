import logo from "@/assets/logo.png"
import Image from "next/image"

export default function Home() {
 return (
  <main className="flex min-h-screen items-center justify-center">
   <Image src={logo} alt="" />
  </main>
 )
}
