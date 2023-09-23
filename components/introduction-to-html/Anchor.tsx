import anchor_tag from "@/assets/anchor.png"
import TagDesign from "@/components/shared/TagDesign"
import Image from "next/image"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Anchor = () => {
 return (
  <>
   <Heading title="HTML Anchor Tag" />
   <Paragraph>
    The HTML <TagDesign title="a" /> tag, which stands for {`"anchor"`} is used to create hyperlinks within web pages. Hyperlinks are clickable elements that allow users to navigate to other web
    pages, resources, or locations on the same page. {`Here's`} how you use the <TagDesign title="a" /> tag:
   </Paragraph>
   <Image src={anchor_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>In this example:</Paragraph>
   <List>
    <li>
     <strong>href</strong> (Hypertext Reference) is an attribute that specifies the destination URL or resource to which the link points. It can be an absolute URL (starting with {`"http://"`} or
     {`"https://"`}), a relative URL, or other types of links (e.g., email links, phone number links).
    </li>
    <li>
     The text {`"Visit Example.com"`} or {`"Visit About Page"`} enclosed within the <TagDesign title="a" /> tags is the clickable link text that users see. This text is what the user clicks on to
     follow the link.
    </li>
   </List>
  </>
 )
}

export default Anchor
