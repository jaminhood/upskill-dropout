import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const InputBorderAndOutline = () => {
 const codeString = `/* Remove the border */
input {
    border: none;
}

/* Remove the outline (typically applied when the input is focused) */
input:focus {
    outline: none;
}`

 return (
  <ContentBox title="Input Border and Outline" codeString={codeString} codeTitle="style.css" codeLang="css">
   <Paragraph>
    To remove the border and outline of an HTML <TagDesign title="input" /> element, you can use CSS to override the default styles applied by the browser. {`Here's`} how you can do it:
   </Paragraph>
   <Paragraph>In the CSS code below:</Paragraph>
   <List>
    <li>
     <strong>border: none;:</strong> This CSS rule removes the border around all <TagDesign title="input" /> elements by setting the border property to none. This eliminates the visible border of the
     input field.
    </li>
    <li>
     <strong>{`input:focus { outline: none; }`}:</strong> This CSS rule removes the outline that appears when the input element is focused (clicked on or selected). The <strong>:focus</strong>{" "}
     pseudo-class targets the input when it is in focus, and the {`'outline'`} property set to {`'none'`} removes the outline.
    </li>
   </List>
  </ContentBox>
 )
}

export default InputBorderAndOutline
