import p_inline_tag from "@/assets/p-inline-tag.png"
import p_tag from "@/assets/p-tag.png"
import TagDesign from "@/components/shared/TagDesign"
import Image from "next/image"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const ParagraphTag = () => {
 const pCode = `<p>This is a paragraph of text.</p>`

 const pInlineCode = `<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text. You can also include links like <a href="#">this</a>.</p>`

 return (
  <>
   <Heading title="HTML Paragraph Tag" />
   <Paragraph>
    The HTML <TagDesign title="p" /> tag is used to define paragraphs or blocks
    of text in a web page. It represents a logical division or section of text,
    and browsers typically render the content inside <TagDesign title="p" />{" "}
    tags with a space above and below, visually separating it from surrounding
    text. {`Here's`} how you use the <TagDesign title="p" /> tag:
   </Paragraph>
   <CodeBlock title="p tag" codeString={pCode} lang="html" />
   <Paragraph>
    You can include any text or HTML elements within a <TagDesign title="p" />{" "}
    tag to create a paragraph. For example:
   </Paragraph>
   <CodeBlock
    title="inline elements in p tag"
    codeString={pInlineCode}
    lang="html"
   />
  </>
 )
}

export default ParagraphTag
