import { FC } from "react"

const TagDesign: FC<HeadingTypes> = (props) => {
 const { title } = props
 return <span className="px-2 py-1 text-[.7rem] rounded-lg font-montserrat-bold text-zinc-950 bg-zinc-400">{`<${title}>`}</span>
}

export default TagDesign
