import Container from "../shared/Container"
import HeaderLogo from "./components/HeaderLogo"

const Header = () => {
 return (
  <header className="h-[80px] absolute top-0 left-0 w-full bg-transparent z-50 flex justify-center items-center">
   <Container>
    <div className="flex">
     <HeaderLogo />
    </div>
   </Container>
  </header>
 )
}

export default Header
