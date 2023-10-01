import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const SolutionOneIntro = () => {
 return (
  <>
   <Heading title="Assignment Introduction" />
   <Paragraph>
    Since {`we've`} had the chance to go over most of the basics of HTML and some cf its common tags. An assignment was assigned to us in other to test our knowledge about HTML. The deadline was
    yesterday the 28<sup>th</sup> of September, 2023 and so I taught of dropping the solution to the assignment here so we can go over it.
   </Paragraph>
   <Paragraph>
    <strong>Note:</strong> the assignment was supposed to be submitted using <strong>replit</strong> (An online coding platform).
   </Paragraph>
   <Paragraph>below are links to the source code of the assinment solution:</Paragraph>
   <div className="flex gap-4 items-center mb-4">
    <span className="px-2 py-1 text-[.7rem] rounded-lg font-montserrat-bold text-zinc-950 bg-zinc-400">
     <a href="https://github.com/jaminhood/first-upskill-assignment/" target="_blank">
      Github
     </a>
    </span>
    <span className="px-2 py-1 text-[.7rem] rounded-lg font-montserrat-bold text-zinc-950 bg-zinc-400">
     <a href="https://replit.com/@princeobj5/Benjamin-Ovu#index.html" target="_blank">
      Replit
     </a>
    </span>
   </div>
  </>
 )
}

export default SolutionOneIntro
