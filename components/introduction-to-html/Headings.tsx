import h1_tag from "@/assets/h1-tag.png"
import h2_tag from "@/assets/h2-tag.png"
import h3_tag from "@/assets/h3-tag.png"
import h4_tag from "@/assets/h4-tag.png"
import h5_tag from "@/assets/h5-tag.png"
import h6_tag from "@/assets/h6-tag.png"
import TagDesign from "@/components/shared/TagDesign"
import Image from "next/image"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const Headings = () => {
 return (
  <>
   <Heading title="HTML Heading Tags" />
   <Paragraph>
    HTML heading tags are used to define headings and subheadings within a web page. Headings provide structure and hierarchy to the content, making it easier for both users and search engines to
    understand the organization of the page. HTML provides six levels of heading tags, ranging from <TagDesign title="h1" /> (the highest level) to <TagDesign title="h6" /> (the lowest level).{" "}
    {`Here's`} an overview of the HTML heading tags:
   </Paragraph>
   <Paragraph>
    <strong>
     <TagDesign title="h1" /> Tag:
    </strong>{" "}
    Represents the highest level of heading and is typically used for the main title of the page. There should be only one <TagDesign title="h1" /> per page, and it should convey the primary topic or
    purpose of the content.
   </Paragraph>
   <Image src={h1_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     <TagDesign title="h2" /> Tag:
    </strong>{" "}
    Represents a level of heading below <TagDesign title="h1" />. It is used for major section titles or subtitles that are directly related to the main topic of the page.
   </Paragraph>
   <Image src={h2_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     <TagDesign title="h3" /> Tag:
    </strong>{" "}
    Represents a lower level of heading, typically used for subsections within a major section.
   </Paragraph>
   <Image src={h3_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     <TagDesign title="h4" /> Tag:
    </strong>{" "}
    Represents a further subheading within an <TagDesign title="h3" /> section, and so on.
   </Paragraph>
   <Image src={h4_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     <TagDesign title="h5" /> Tag:
    </strong>{" "}
    Used for sub-subsections within an <TagDesign title="h4" /> section or as necessary for a more detailed structure.
   </Paragraph>
   <Image src={h5_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>
     <TagDesign title="h6" /> Tag:
    </strong>{" "}
    Represents the lowest level of heading and is used for minor subsections or details within the content.
   </Paragraph>
   <Image src={h6_tag} className="w-full object-cover mb-4" alt="" />
  </>
 )
}

export default Headings
