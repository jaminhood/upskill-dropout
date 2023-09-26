import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const DivSection = () => {
 const codeString = `<!DOCTYPE html>
<html>
 <head>
  <title>Example Page</title>
 </head>
 <body>
  <div>
   <h1>Welcome to My Website</h1>
  </div>
  <div>
   <p>This is the main content of the page.</p>
   <p>It can contain text, images, and other elements.</p>
  </div>
 </body>
</html>`

 return (
  <ContentBox
   title="Div"
   codeString={codeString}
   codeTitle="div.html"
   codeLang="html">
   <Paragraph>
    The <TagDesign title="div" /> element is a block-level container or tag used
    to group and structure content into sections or divisions on a web page. It
    is one of the most commonly used HTML elements for layout and design
    purposes. The <TagDesign title="div" /> element itself does not have any
    inherent styling or semantic meaning; instead, it serves as a generic
    container that allows you to apply CSS styles, add IDs or classes for
    styling and JavaScript functionality, and structure your web {`page's`}{" "}
    content.
   </Paragraph>
   <Paragraph>
    Key characteristics and uses of the <TagDesign title="div" /> element:
   </Paragraph>
   <List>
    <li>
     <strong>Grouping Content:</strong> You can use <TagDesign title="div" />{" "}
     elements to group related content together. For example, you might use a{" "}
     <TagDesign title="div" /> to contain a set of paragraphs, headings, images,
     or any other HTML elements.
    </li>
    <li>
     <strong>Styling:</strong> By applying CSS styles to{" "}
     <TagDesign title="div" /> elements or selecting them using CSS selectors,
     you can control the layout, positioning, appearance, and behavior of the
     grouped content.
    </li>
    <li>
     <strong>Layout:</strong> <TagDesign title="div" /> elements are often used
     to create layout structures on a web page, such as defining columns, rows,
     sidebars, headers, footers, and other layout components.
    </li>
    <li>
     <strong>JavaScript Manipulation:</strong> You can use JavaScript to
     interact with and manipulate the content within <TagDesign title="div" />{" "}
     elements, adding dynamic behavior to your web page.
    </li>
   </List>
  </ContentBox>
 )
}

export default DivSection
