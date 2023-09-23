import { FC } from "react"

const TagDesign: FC<HeadingTypes> = (props) => {
 const { title } = props
 return <span className="px-2 py-1 text-[.7rem] rounded-lg text-zinc-50 bg-accent">{`<${title}>`}</span>
}

export default TagDesign
