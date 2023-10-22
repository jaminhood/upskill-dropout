import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const RemEmPx = () => {
 const pxString = `font-size: 16px;
width: 200px;
`

 const emString = `font-size: 1.5em; /* 1.5 times the parent's font size */
margin: 1em; /* Margin size is relative to the font size of the element's parent */
`

 const remString = `font-size: 1.2rem; /* 1.2 times the root font size */
padding: 0.5rem; /* Padding size is relative to the root font size */
`

 return (
  <>
   <Heading title="Difference between rem, em and px" />
   <Paragraph>
    {`'rem'`}, {`'em'`}, and {`'px'`} are units of measurement used in CSS to define the size of text and elements on a web page. Each of these units has its own characteristics and use cases:
   </Paragraph>
   <Paragraph>
    <strong>px (Pixels):</strong>
   </Paragraph>
   <List>
    <li>{`'px'`} is an absolute unit of measurement.</li>
    <li>One pixel is a single dot on the screen, and it does not change in size regardless of the {`'user's'`} screen or zoom settings.</li>
    <li>It provides precise control over the size of elements.</li>
    <li>Commonly used for setting specific sizes for elements or text when a fixed, pixel-perfect layout is required.</li>
    <li>Not inherently scalable or responsive, which can be a disadvantage for different screen sizes and resolutions.</li>
   </List>
   <CodeBlock title="px" codeString={pxString} lang="css" />
   <Paragraph>
    <strong>em:</strong>
   </Paragraph>
   <List>
    <li>{`'em'`} is a relative unit of measurement.</li>
    <li>It is relative to the font size of its parent element. If a parent element has a font size of 16px, 1em is equal to 16px.</li>
    <li>Allows for scalability and responsiveness because it adapts to changes in font size up the DOM tree.</li>
    <li>Useful for creating designs where text and element sizes should adapt proportionally to the user's preferred font size.</li>
   </List>
   <CodeBlock title="em" codeString={emString} lang="css" />
   <Paragraph>
    <strong>rem (Root EM):</strong>
   </Paragraph>
   <List>
    <li>
     {`rem`} is a relative unit of measurement, similar to {`em`}, but it is relative to the font size of the root element (usually the <TagDesign title="html" /> element).
    </li>
    <li>This makes it especially useful for creating designs where elements maintain consistent proportions relative to the base font size, regardless of the nesting of elements.</li>
    <li>Provides better control over the scalability of an entire web page.</li>
   </List>
   <CodeBlock title="rem" codeString={remString} lang="css" />
  </>
 )
}

export default RemEmPx
