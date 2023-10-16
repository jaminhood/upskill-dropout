import { FC } from "react"
import { BiCheckDouble } from "react-icons/bi"
import { useState } from "react"
import { FaCopy } from "react-icons/fa"

const CodeBlockHeader: FC<CodeBlockHeaderTypes> = (props) => {
 const { title, codeString } = props
 const [copy, setCopy] = useState(false)

 const handleCopy = () => {
  navigator.clipboard.writeText(codeString)
  setCopy(true)
  setTimeout(() => setCopy(false), 1000)
 }

 return (
  <div className="flex justify-between items-center p-2 mb-2 text-white border-b border-zinc-400">
   <h4 className="text-base">{title}</h4>
   {copy ? (
    <div className="flex gap-2 items-center cursor-pointer">
     <span>
      <BiCheckDouble size={15} />
     </span>
     <span>Copied</span>
    </div>
   ) : (
    <div className="flex gap-2 items-center cursor-pointer" onClick={handleCopy}>
     <span>
      <FaCopy size={15} />
     </span>
     <span>Copy</span>
    </div>
   )}
  </div>
 )
}

export default CodeBlockHeader
