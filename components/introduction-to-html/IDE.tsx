import vscode from "@/assets/vs-code.png"
import Image from "next/image"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const IDE = () => {
 return (
  <>
   <Heading title="IDE {Integrated Development Environment}" />
   <Paragraph>
    An IDE, or Integrated Development Environment, is a software application that provides a comprehensive set of tools and features to streamline and simplify the process of software development. It
    is a centralized environment where developers can write, edit, test, and debug their code. IDEs are commonly used in various programming languages and development environments to enhance
    productivity and efficiency.
   </Paragraph>
   <Paragraph>
    Popular examples of IDEs include Visual Studio (for various programming languages), Visual Studio Code (a lightweight code editor with IDE-like features), IntelliJ IDEA (for Java), Eclipse (for
    various languages), PyCharm (for Python), and Xcode (for iOS and macOS development).
   </Paragraph>
   <Paragraph>
    Developers often choose an IDE based on their programming language or technology stack of choice, as different IDEs are optimized for specific environments and offer different sets of features.
    But for this class we would be using my favourite IDE which is Visual Studio Code or VS Code. Although you can still use any other IDE as well but I simply prefer this one
   </Paragraph>
   <Image src={vscode} className="w-full object-cover mb-4" alt="" />
  </>
 )
}

export default IDE
