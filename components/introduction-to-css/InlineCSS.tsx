import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const InlineCSS = () => {
 const codeString = `<p style="color: blue; font-size: 16px;">This is a blue, 16px text.</p>`

 return (
  <ContentBox title="Inline CSS" codeString={codeString} codeTitle="Inline CSS" codeLang="html">
   <Paragraph>
    Inline CSS refers to the practice of including CSS styles directly within an HTML {`element's`} {`"style"`} attribute. Instead of defining styles in a separate CSS file or within a{" "}
    <TagDesign title="style" /> tag in the HTML {`document's`} head, inline CSS places the styling information directly within the HTML element it applies to.
   </Paragraph>
   <Paragraph>
    In the example provided, the <TagDesign title="p" /> element has inline CSS applied to it. The {`"style"`} attribute contains CSS rules that determine the text color and font size for that
    specific <TagDesign title="p" /> element. This styling will only affect this particular paragraph, not any other elements on the page.
   </Paragraph>
   <Paragraph>While inline CSS can be convenient for making quick, specific style changes to individual elements, {`it's`} generally not recommended for several reasons:</Paragraph>
   <List>
    <li>
     <strong>Lack of Separation:</strong> Inline CSS mixes HTML content with styling information, which can make the HTML code less readable and harder to maintain. It {`doesn't`} follow the
     separation of concerns principle, where HTML should define the structure, and CSS should handle the presentation.
    </li>
    <li>
     <strong>Limited Reusability:</strong> Inline styles are not reusable across multiple elements. If you want the same style applied to multiple elements, {`you'd`} need to duplicate the same inline
     CSS for each element, leading to code redundancy.
    </li>
    <li>
     <strong>Difficulty in Managing Styles:</strong> As your web page grows in complexity, managing and updating styles becomes more challenging when they are scattered throughout the HTML code.
    </li>
    <li>
     <strong>Specificity Issues:</strong> Inline styles have high specificity, which means they can override external or internal stylesheet rules, potentially causing unexpected styling conflicts.
    </li>
    <li>
     <strong>Maintenance Challenges:</strong> If you want to make global style changes or update a consistent design across your website, {`it's`} much more efficient to use an external stylesheet or
     a <TagDesign title="style" /> tag in the HTML head.
    </li>
   </List>
  </ContentBox>
 )
}

export default InlineCSS
