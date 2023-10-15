import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const Positionings = () => {
 const staticString = `.static-box {
  position: static;
}
`

 const relativeString = `.relative-box {
  position: relative;
  top: 20px;
  left: 10px;
}
`

 const absoluteString = `.container {
  position: relative;
}

.absolute-box {
  position: absolute;
  top: 50px;
  left: 50px;
}
`

 const fixedString = `.fixed-box {
  position: fixed;
  top: 10px;
  right: 10px;
}
`

 return (
  <>
   <Heading title="CSS Positionings" />
   <Paragraph>
    CSS (Cascading Style Sheets) provides several options for positioning elements on a web page. Understanding the different position values and how they work is essential for creating complex
    layouts. There are four main values for the position property in CSS: <strong>static</strong>, <strong>relative</strong>, <strong>absolute</strong>, and <strong>fixed</strong>. {`Let's`} explore
    each of them and provide sample code for better understanding.
   </Paragraph>
   <Paragraph>
    <strong>Static</strong>
   </Paragraph>
   <List>
    <li>This is the default position value for all elements.</li>
    <li>Elements with a {`'position: static;'`} are positioned in their normal flow in the order they appear in the HTML.</li>
    <li>
     The {`'top'`}, {`'right'`}, {`'bottom'`}, and {`'left'`} properties have no effect on static elements.
    </li>
   </List>
   <CodeBlock title="style.css" codeString={staticString} lang="css" />
   <Paragraph>
    <strong>Relative</strong>
   </Paragraph>
   <List>
    <li>Elements with {`'position: relative;'`} are positioned relative to their normal position in the document flow.</li>
    <li>
     You can use {`'top'`}, {`'right'`}, {`'bottom'`}, and {`'left'`} properties to offset the element from its original position.
    </li>
   </List>
   <CodeBlock title="style.css" codeString={relativeString} lang="css" />
   <Paragraph>
    <strong>Absolute</strong>
   </Paragraph>
   <List>
    <li>Elements with {`'position: absolute;'`} are removed from the normal document flow and positioned relative to their nearest positioned ancestor.</li>
    <li>
     If no ancestor has a positioned property (<strong>relative</strong>, <strong>absolute</strong>, or <strong>fixed</strong>), the element is positioned relative to the initial containing block,
     which is usually the viewport.
    </li>
    <li>
     You can use {`'top'`}, {`'right'`}, {`'bottom'`}, and {`'left'`} properties to precisely control the element's position.
    </li>
   </List>
   <CodeBlock title="style.css" codeString={absoluteString} lang="css" />
   <Paragraph>
    <strong>Fixed</strong>
   </Paragraph>
   <List>
    <li>Elements with {`'position: fixed;'`} are positioned relative to the viewport and do not move when the page is scrolled.</li>
    <li>
     The {`'top'`}, {`'right'`}, {`'bottom'`}, and {`'left'`} properties to specify the element's position on the viewport.
    </li>
   </List>
   <CodeBlock title="style.css" codeString={fixedString} lang="css" />
  </>
 )
}

export default Positionings
