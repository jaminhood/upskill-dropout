import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const Tags = () => {
 const openingTag = `<tagname attribute="value">`
 const closingTag = `</tagname>`

 return (
  <>
   <Heading title="HTML Tags" />
   <Paragraph>
    HTML tags are the fundamental building blocks of Hypertext Markup Language
    (HTML). They are used to structure and format the content of a web page.
    HTML tags are enclosed in angle brackets {`(<and>)`}, and they come in
    pairs: an opening tag and a closing tag. The opening tag contains the tag
    name, and sometimes additional attributes, while the closing tag has the
    same tag name preceded by a forward slash (/). {`Here's`} a breakdown of
    HTML tags:
   </Paragraph>
   <Paragraph>
    <strong>Opening Tag:</strong> The opening tag marks the beginning of an HTML
    element. It specifies what type of element it is and can contain attributes
    to provide additional information about the element. For example:
   </Paragraph>
   <CodeBlock title="opening tag" codeString={openingTag} lang="html" />
   <Paragraph>
    <strong>Closing Tag:</strong> The closing tag marks the end of an HTML
    element. It has the same tag name as the opening tag, preceded by a forward
    slash (/). For example:
   </Paragraph>
   <CodeBlock title="closing tag" codeString={closingTag} lang="html" />
   <Paragraph>
    <strong>Content:</strong> The content of the HTML element is the text or
    other HTML elements enclosed between the opening and closing tags.
   </Paragraph>
  </>
 )
}

export default Tags
