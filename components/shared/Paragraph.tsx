import { FC } from "react"

const Paragraph: FC<ChildrenTypes> = (props) => {
 return <p className="text-[.9rem] leading-loose mb-4">{props.children}</p>
}

export default Paragraph
