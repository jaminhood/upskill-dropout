import Link from "next/link"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const SolutionTwoIntro = () => {
 return (
  <>
   <Heading title="Assignment Two" />
   <Paragraph>
    Our second assignment was designed to assess our proficiency in applying the {`'box-shadow'`} CSS property, removing default styled input borders and outlines, and styling input placeholders,
    among other tasks. If you are still encountering difficulties comprehending these concepts, rest assured that we are here to provide assistance and support. We previously discussed about the{" "}
    <Link href="/things-to-know-before-assignment-2" className="text-primary font-montserrat-bold">
     stuffs you need to know before the second assignment assignment
    </Link>
    . Here {`we'd`} be looking at the structure of the solution and would try to explain.
   </Paragraph>
   <Paragraph>below are links to the source code of the assinment solution:</Paragraph>
   <div className="flex gap-4 items-center mb-4">
    <span className="px-2 py-1 text-[.7rem] rounded-lg font-montserrat-bold text-zinc-950 bg-zinc-400">
     <a href="https://replit.com/@TIMOTHYAchonu/Phonie#index.html" target="_blank">
      Replit
     </a>
    </span>
   </div>
  </>
 )
}

export default SolutionTwoIntro
