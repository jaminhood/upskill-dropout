import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const PropertyValue = () => {
 const mainString = `h1 {
    color: red;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}`

 const exampleString = `color: blue;`

 return (
  <ContentBox title="{property: value;}" codeTitle="style.css" codeString={mainString} codeLang="css">
   <Paragraph>
    In CSS, a property-value pair is a fundamental component used to define how HTML elements should be styled. It consists of two parts: a property and a corresponding value. Together, they determine
    how a specific aspect of an {`element's`} presentation should appear. {`Here's`} an explanation of each part:
   </Paragraph>
   <Paragraph>
    <strong>Property: </strong> The property is the attribute or characteristic of an HTML element that you want to style. It represents what aspect of the element you want to change. Common examples
    of properties include:
   </Paragraph>
   <List>
    <li>
     <strong>color:</strong> Specifies the text color.
    </li>
    <li>
     <strong>font-size:</strong> Determines the size of the text.
    </li>
    <li>
     <strong>background-color:</strong> Sets the background color of an element.
    </li>
    <li>
     <strong>border:</strong> Defines the {`element's`} border properties (e.g., border width, style, and color).
    </li>
    <li>
     <strong>margin:</strong> Controls the spacing outside an element.
    </li>
    <li>
     <strong>padding:</strong> Controls the spacing inside an element.
    </li>
    <li>
     <strong>text-align:</strong> Specifies the alignment of text within an element.
    </li>
   </List>
   <Paragraph>Properties are written in lowercase and are followed by a colon {`':'`} in CSS.</Paragraph>
   <Paragraph>
    <strong>Value: </strong> The value is the specific setting or value you assign to the property. It defines how the property should behave or appear. Values can be numeric values, text values,
    colors, or a combination of these, depending on the property. The values are followed by a semicolon {`';'`} to separate multiple property-value pairs.
   </Paragraph>
   <List>
    <li>
     For example, for the <strong>color</strong> property, you might set the value to a color name like <strong>red</strong>, a hexadecimal color code like <strong>#FF0000</strong>, or an RGB color
     like <strong>rgb(255, 0, 0)</strong>.
    </li>
   </List>
   <Paragraph>{`Here's`} an example of a CSS property-value pair:</Paragraph>
   <CodeBlock title="style.css" codeString={exampleString} lang="css" />
   <Paragraph>
    In this example, <strong>color</strong> is the property, and <strong>blue</strong> is the value. This CSS rule would change the text color of the selected elements to blue.
   </Paragraph>
   <Paragraph>You can apply multiple property-value pairs within a CSS rule to style elements comprehensively. For instance:</Paragraph>
  </ContentBox>
 )
}

export default PropertyValue
