"use client"

import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import CodeBlockHeader from "./components/CodeBlockHeader"
import { FC } from "react"

const CodeBlock: FC<CodeBlockTypes> = (props) => {
 return (
  <div className="p-4 my-4 bg-[#282C34] overflow-hidden rounded-md">
   <CodeBlockHeader title={props.title} codeString={props.codeString} />
   <SyntaxHighlighter
    language={props.lang}
    style={atomOneDark}
    customStyle={{ lineHeight: 2.5, fontSize: `.8rem` }}>
    {props.codeString}
   </SyntaxHighlighter>
  </div>
 )
}

export default CodeBlock
