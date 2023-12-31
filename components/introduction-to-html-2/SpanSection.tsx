import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const SpanSection = () => {
 const codeString = `<p>This is a <span style="color: blue">blue</span> word.</p>`

 return (
  <ContentBox
   title="Span"
   codeString={codeString}
   codeTitle="span.html"
   codeLang="html">
   <Paragraph>
    The <TagDesign title="span" /> element is an inline-level container or tag
    that is used to apply styles, manipulate, or group inline elements within a
    larger block of text or content. Unlike block-level elements like{" "}
    <TagDesign title="div" /> that create distinct blocks of content, the{" "}
    <TagDesign title="span" /> element is used for smaller, inline-level changes
    or groupings within text.
   </Paragraph>
   <Paragraph>
    {`Here's`} a basic example of how the <TagDesign title="span" /> element can
    be used:
   </Paragraph>
  </ContentBox>
 )
}

export default SpanSection
