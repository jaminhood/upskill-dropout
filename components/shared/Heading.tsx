import { FC } from "react"

const Heading: FC<HeadingTypes> = (props) => {
  const { title, accentTitle } = props
  return (
    <div className="flex justify-center md:justify-start text-center md:text-left mb-4">
      {title && <h3 className="text-base md:text-xl font-montserrat-bold text-primary">{title}</h3>}
      {accentTitle && <h3 className="text-sm md:text-lg font-montserrat-bold text-primary">{accentTitle}</h3>}
    </div>
  )
}

export default Heading
