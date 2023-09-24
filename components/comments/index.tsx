import { comments } from "@/constants/comments"
import CommentBox from "./Components/comment-box"
import CommentForm from "./Components/comment-form"

const Comments = () => {
 return (
  <>
   <CommentForm />
   {comments.map((data) => (
    <CommentBox data={data} key={data.id} />
   ))}
  </>
 )
}

export default Comments
