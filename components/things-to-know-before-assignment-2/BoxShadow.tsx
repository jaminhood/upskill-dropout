import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const BoxShadow = () => {
 const codeString = `/* Creating a simple outer shadow */
box-shadow: 5px 5px 10px #888888;

/* Creating an inset shadow */
box-shadow: inset 2px 2px 5px #333;

/* Combining multiple shadows */
box-shadow: 3px 3px 5px #888888, -3px -3px 5px #888888;
`

 const sampleString = `box-shadow: h-shadow v-shadow blur spread color inset;`

 return (
  <ContentBox title="Box Shadow" codeString={codeString} codeTitle="style.css" codeLang="css">
   <Paragraph>
    <strong>box-shadow</strong> is a CSS property that allows you to add a shadow effect to an element on a web page. This shadow can create a sense of depth and dimension, making elements appear to
    float above or below the content, depending on the direction and size of the shadow.
   </Paragraph>
   <Paragraph>
    {`Here's`} the basic syntax for the <strong>box-shadow</strong> property:
   </Paragraph>
   <CodeBlock title="style.css" codeString={sampleString} lang="css" />
   <List>
    <li>
     <strong>h-shadow:</strong> This specifies the horizontal offset of the shadow. A positive value moves the shadow to the right, while a negative value moves it to the left.
    </li>
    <li>
     <strong>v-shadow:</strong> This specifies the vertical offset of the shadow. A positive value moves the shadow downward, while a negative value moves it upward.
    </li>
    <li>
     <strong>blur:</strong> This is an optional value that determines the blur radius of the shadow. A larger value creates a more blurred, diffused shadow.
    </li>
    <li>
     <strong>spread:</strong> This is an optional value that specifies the size of the shadow. A positive value increases the size, while a negative value decreases it.
    </li>
    <li>
     <strong>color:</strong> This specifies the color of the shadow. You can use color names, hexadecimal values, RGB values, or other valid color representations.
    </li>
    <li>
     <strong>inset (optional):</strong> If the inset keyword is included, the shadow will be inset, creating an inner shadow effect instead of an outer shadow.
    </li>
   </List>
   <Paragraph>In the first example below, a simple outer shadow is added to the element, creating a shadow that appears to the right and below the element with a slight blur.</Paragraph>
   <Paragraph>In the second example, an inset shadow is applied, giving the appearance of an inner shadow.</Paragraph>
   <Paragraph>
    The third example combines two shadows: one on the right and bottom (creating a raised effect) and another on the left and top (creating a depressed effect). This can be used to simulate a beveled
    or 3D effect.
   </Paragraph>
  </ContentBox>
 )
}

export default BoxShadow
