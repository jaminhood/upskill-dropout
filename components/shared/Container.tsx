import { FC } from "react"

const Container: FC<ChildrenTypes> = (props) => {
 return <div className="w-full max-w-6xl px-4 mx-auto">{props.children}</div>
}

export default Container
