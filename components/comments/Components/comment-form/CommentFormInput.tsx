import { FC } from "react"

const CommentFormInput: FC<InputTypes> = (props) => {
 const { label, id, type, value, handleInput } = props

 if (type === `comment`) {
  return (
   <div className="relative py-2">
    <textarea className="form-input h-40" placeholder="" value={value} onInput={handleInput} id={id} name={id} />
    <label htmlFor={id} className="form-label">
     {label}:
    </label>
   </div>
  )
 }

 return (
  <div className="relative py-2">
   <input type={type} className="form-input" placeholder="" value={value} onInput={handleInput} id={id} name={id} />
   <label htmlFor={id} className="form-label">
    {label}:
   </label>
  </div>
 )
}

export default CommentFormInput
