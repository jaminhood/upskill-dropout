import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const CommentsSection = () => {
 const codeString = `<!-- This is a comment -->`

 return (
  <ContentBox
   title="Comments"
   codeString={codeString}
   codeTitle="comment.html"
   codeLang="html">
   <Paragraph>
    In HTML (Hypertext Markup Language), comments are elements that are used to
    add notes or annotations within the code that are not displayed in the web
    browser when a web page is rendered. Comments are primarily used for
    documentation purposes or to temporarily remove a portion of code without
    deleting it entirely. They are a way for web developers to add explanations,
    reminders, or other information for themselves or for others who might be
    working on the same codebase.
   </Paragraph>
   <Paragraph>
    You can place comments anywhere within your HTML code, including within the{" "}
    <TagDesign title="head" /> and <TagDesign title="body" /> sections of your
    document.
   </Paragraph>
   <Paragraph>
    HTML comments are written using the {`<!--`} and {`-->`} tags, and
    everything between these tags is treated as a comment and is ignored by web
    browsers. {`Here's`} the basic syntax:
   </Paragraph>
  </ContentBox>
 )
}

export default CommentsSection
