import Link from "next/link"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const FlexboxContIntro = () => {
 return (
  <>
   <Heading title="Flexbox Continuation" />
   <Paragraph>
    By now we should already have a clear understanding on what flexbox is and how it works. If {`you're`} still finding it difficult to grasp {`I'd`} advice you to go through the video of the flexbox
    class again and also go through{" "}
    <Link href="/flexbox" className="text-primary font-montserrat-bold">
     the summary of what flexbox is and how {`it's`} being applied.
    </Link>
    . So today we would try to understand how the <strong>order</strong> property works with flexbox in css.
   </Paragraph>
  </>
 )
}

export default FlexboxContIntro
