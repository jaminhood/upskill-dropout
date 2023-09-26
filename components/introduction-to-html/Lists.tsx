import TagDesign from "@/components/shared/TagDesign"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const Lists = () => {
 const olTags = `<ol>
 <li>First item</li>
 <li>Second item</li>
 <li>Third item</li>
</ol>`

 const ulTags = `<ul>
 <li>Red</li>
 <li>Green</li>
 <li>Blue</li>
</ul>`

 const dlTags = `<dl>
 <dt>HTML</dt>
 <dd>HyperText Markup Language</dd>
 <dt>CSS</dt>
 <dd>Cascading Style Sheets</dd>
</dl>`

 return (
  <>
   <Heading title="HTML List Tag" />
   <Paragraph>
    HTML provides several ways to create lists on web pages. Lists are used to
    organize and present information in a structured and easy-to-read format.
    There are three main types of lists in HTML:
   </Paragraph>
   <Paragraph>
    <strong>
     Ordered List <TagDesign title="ol" />:
    </strong>{" "}
    Ordered lists are used to create numbered lists, where each item is
    sequentially numbered. You can use the <TagDesign title="li" /> (list item)
    tag to define individual list items. {`Here's`} an example:
   </Paragraph>
   <CodeBlock title="ol tag" codeString={olTags} lang="html" />
   <Paragraph>
    <strong>
     Unordered Lists <TagDesign title="ul" />:
    </strong>{" "}
    Unordered lists are used to create bulleted lists, where each item is
    preceded by a bullet point. Like ordered lists, you use the{" "}
    <TagDesign title="li" /> tag for list items. {`Here's`} an example:
   </Paragraph>
   <CodeBlock title="ul tag" codeString={ulTags} lang="html" />
   <Paragraph>
    <strong>
     Description Lists <TagDesign title="dl" />:
    </strong>{" "}
    Description lists are used to create lists where each item consists of a
    term (the {`"dt"`} or {`"definition term"`}) followed by a description (the{" "}
    {`"dd"`} or {`"definition description"`}). {`Here's`} an example:
   </Paragraph>
   <CodeBlock title="dl tag" codeString={dlTags} lang="html" />
  </>
 )
}

export default Lists
