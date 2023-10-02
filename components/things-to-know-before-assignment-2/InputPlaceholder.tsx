import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const InputPlaceholder = () => {
 const codeString = `/* Style the placeholder text for specific input elements */
#myInput::placeholder {
    color: #333; /* Text color */
    font-style: normal; /* Remove italic */
    font-size: 14px; /* Text size */
    font-weight: bold; /* Text weight */
    opacity: 0.7; /* Text opacity */
    /* Add any other styles you want */
}`

 const sampleString = `/* Style the placeholder text for all input elements */
input::placeholder {
    color: #999; /* Change the text color */
    font-style: italic; /* Make the text italic */
    /* Add any other styles you want */
}`

 return (
  <ContentBox title="Input Placeholder" codeString={codeString} codeTitle="style.css" codeLang="css">
   <Paragraph>
    You can style an <TagDesign title="input" /> {`element's`} placeholder text using CSS. The <strong>::placeholder</strong> pseudo-element allows you to apply styles specifically to the placeholder
    text within an input field. {`Here's`} how you can style it:
   </Paragraph>
   <CodeBlock title="style.css" codeString={sampleString} lang="css" />
   <Paragraph>In the above CSS code:</Paragraph>
   <List>
    <li>
     <strong>input::placeholder:</strong> targets the placeholder text within all <TagDesign title="input" /> elements.
    </li>
    <li>
     You can apply various styles to the placeholder text, such as changing the {`'color'`}, {`'font-style'`}, {`'font-size'`}, {`'font-weight'`}, and so on, to achieve the desired visual effect.
    </li>
   </List>
   <Paragraph>
    In the example below, {`we're`} targeting an input element with the <strong>id</strong> of {`"myInput"`} and applying specific styles to its placeholder text.
   </Paragraph>
   <Paragraph>In the second example, an inset shadow is applied, giving the appearance of an inner shadow.</Paragraph>
  </ContentBox>
 )
}

export default InputPlaceholder
