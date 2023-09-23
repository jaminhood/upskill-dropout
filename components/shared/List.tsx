import { FC } from "react"

const List: FC<ChildrenTypes> = (props) => {
 return <ul className="pl-4 list-disc text-[.9rem] leading-loose flex flex-col gap-2">{props.children}</ul>
}

export default List
