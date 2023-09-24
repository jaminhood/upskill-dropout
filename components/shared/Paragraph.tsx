import { FC } from "react"

const Paragraph: FC<ChildrenTypes & LensTypes> = (props) => {
 return <p className={`text-[.9rem] leading-loose mb-4 ${props.cls}`}>{props.children}</p>
}

export default Paragraph
