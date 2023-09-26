import { FC } from "react"
import Heading from "./Heading"
import CodeBlock from "../code-block"

const ContentBox: FC<ContentBoxTypes> = (props) => {
 return (
  <article>
   <Heading title={props.title} />
   {props.children}
   <CodeBlock
    title={props.codeTitle}
    codeString={props.codeString}
    lang={props.codeLang}
   />
  </article>
 )
}

export default ContentBox
