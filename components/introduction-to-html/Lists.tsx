import dl_tag from "@/assets/dl.png"
import ol_tag from "@/assets/ol.png"
import ul_tag from "@/assets/ul.png"
import TagDesign from "@/components/shared/TagDesign"
import Image from "next/image"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const Lists = () => {
 return (
  <>
   <Heading title="HTML List Tag" />
   <Paragraph>
    HTML provides several ways to create lists on web pages. Lists are used to organize and present information in a structured and easy-to-read format. There are three main types of lists in HTML:
   </Paragraph>
   <Paragraph>
    <strong>
     Ordered List <TagDesign title="ol" />:
    </strong>{" "}
    Ordered lists are used to create numbered lists, where each item is sequentially numbered. You can use the <TagDesign title="li" /> (list item) tag to define individual list items. {`Here's`} an
    example:
   </Paragraph>
   <Image src={ol_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     Unordered Lists <TagDesign title="ul" />:
    </strong>{" "}
    Unordered lists are used to create bulleted lists, where each item is preceded by a bullet point. Like ordered lists, you use the <TagDesign title="li" /> tag for list items. {`Here's`} an
    example:
   </Paragraph>
   <Image src={ul_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     Description Lists <TagDesign title="dl" />:
    </strong>{" "}
    Description lists are used to create lists where each item consists of a term (the {`"dt"`} or {`"definition term"`}) followed by a description (the {`"dd"`} or {`"definition description"`}).{" "}
    {`Here's`} an example:
   </Paragraph>
   <Image src={dl_tag} className="w-full object-cover mb-4" alt="" />
  </>
 )
}

export default Lists
