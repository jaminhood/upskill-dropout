import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const LessonBox: FC<LessonBoxTypes> = ({ lesson }) => {
  return (
    <div className="text-center">
      <Link href={lesson.link}>
        <Image src={lesson.img} alt={lesson.title} className="h-48 w-full object-cover" />
        <div className="py-4">
          <h4 className="text-base md:text-xl font-bold">{lesson.title}</h4>
        </div>
      </Link>
    </div>
  )
}

export default LessonBox
