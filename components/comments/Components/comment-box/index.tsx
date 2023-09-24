import Paragraph from "@/components/shared/Paragraph"
import { FC } from "react"

const CommentBox: FC<CommentBoxTypes> = (props) => {
 const { comment, sender, date } = props.data

 return (
  <div className="py-4">
   <Paragraph>{comment}</Paragraph>
   <div className="flex gap-4 items-center">
    <span className="w-12 h-12 bg-primary rounded-full text-zinc-50 text-3xl flex justify-center items-center">{sender[0]}</span>
    <div className="flex flex-col justify-between">
     <Paragraph cls="mb-0">
      <strong>{sender}</strong>
     </Paragraph>
     <span className="text-[.7rem] opacity-70">{date}</span>
    </div>
   </div>
  </div>
 )
}

export default CommentBox
