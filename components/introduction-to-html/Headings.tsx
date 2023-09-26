import TagDesign from "@/components/shared/TagDesign"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const Headings = () => {
 const h1Code = `<h1>Main Title</h1>`

 const h2Code = `<h2>Section Title</h2>`

 const h3Code = `<h3>Subsection Title</h3>`

 const h4Code = `<h4>Sub-subsection Title</h4>`

 const h5Code = `<h5>Sub-sub-subsection Title</h5>`

 const h6Code = `<h6>Minor Detail</h6>`

 return (
  <>
   <Heading title="HTML Heading Tags" />
   <Paragraph>
    HTML heading tags are used to define headings and subheadings within a web
    page. Headings provide structure and hierarchy to the content, making it
    easier for both users and search engines to understand the organization of
    the page. HTML provides six levels of heading tags, ranging from{" "}
    <TagDesign title="h1" /> (the highest level) to <TagDesign title="h6" />{" "}
    (the lowest level). {`Here's`} an overview of the HTML heading tags:
   </Paragraph>
   <Paragraph>
    <strong>
     <TagDesign title="h1" /> Tag:
    </strong>{" "}
    Represents the highest level of heading and is typically used for the main
    title of the page. There should be only one <TagDesign title="h1" /> per
    page, and it should convey the primary topic or purpose of the content.
   </Paragraph>
   <CodeBlock title="h1 tag" codeString={h1Code} lang="html" />
   <Paragraph>
    <strong>
     <TagDesign title="h2" /> Tag:
    </strong>{" "}
    Represents a level of heading below <TagDesign title="h1" />. It is used for
    major section titles or subtitles that are directly related to the main
    topic of the page.
   </Paragraph>
   <CodeBlock title="h2 tag" codeString={h2Code} lang="html" />
   <Paragraph>
    <strong>
     <TagDesign title="h3" /> Tag:
    </strong>{" "}
    Represents a lower level of heading, typically used for subsections within a
    major section.
   </Paragraph>
   <CodeBlock title="h3 tag" codeString={h3Code} lang="html" />
   <Paragraph>
    <strong>
     <TagDesign title="h4" /> Tag:
    </strong>{" "}
    Represents a further subheading within an <TagDesign title="h3" /> section,
    and so on.
   </Paragraph>
   <CodeBlock title="h4 tag" codeString={h4Code} lang="html" />
   <Paragraph>
    <strong>
     <TagDesign title="h5" /> Tag:
    </strong>{" "}
    Used for sub-subsections within an <TagDesign title="h4" /> section or as
    necessary for a more detailed structure.
   </Paragraph>
   <CodeBlock title="h5 tag" codeString={h5Code} lang="html" />
   <Paragraph>
    <strong>
     <TagDesign title="h6" /> Tag:
    </strong>{" "}
    Represents the lowest level of heading and is used for minor subsections or
    details within the content.
   </Paragraph>
   <CodeBlock title="h6 tag" codeString={h6Code} lang="html" />
  </>
 )
}

export default Headings
