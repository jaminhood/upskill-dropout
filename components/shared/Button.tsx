"use client"

import { FC } from "react"

const Button: FC<ButtonTypes> = (props) => {
 const { handleClick, text, cls } = props

 return (
  <button onClick={handleClick} className={`py-3 px-10 text-[.9rem] bg-primary text-zinc-50 font-montserrat-bold rounded-md cursor-pointer ${cls}`}>
   {text}
  </button>
 )
}

export default Button
