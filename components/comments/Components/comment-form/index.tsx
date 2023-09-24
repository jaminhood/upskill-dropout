"use client"

import Button from "@/components/shared/Button"
import Heading from "@/components/shared/Heading"
import { useState } from "react"
import CommentFormInput from "./CommentFormInput"

const CommentForm = () => {
 const [formValues, setFormValues] = useState({
  devName: ``,
  comment: ``,
 })

 const handleInput = (e: any) => setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))

 const handleClick = () => {
  console.log(formValues)
 }

 return (
  <div className="py-4">
   <Heading title="Have any addition or questions?" />
   <div className="grid gap-4">
    <CommentFormInput label="Dev Name" id="devName" type="text" value={formValues.devName} handleInput={handleInput} />
    <CommentFormInput label="Comment" id="comment" type="comment" value={formValues.comment} handleInput={handleInput} />
    <Button text="Drop Comment" handleClick={handleClick} />
   </div>
  </div>
 )
}

export default CommentForm
