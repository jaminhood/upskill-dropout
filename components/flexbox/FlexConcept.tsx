import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const FlexConcept = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flex-item {
      flex: 1;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`

 return (
  <ContentBox title="Flex Concepts" codeString={codeString} codeTitle="index.html" codeLang="html">
   <List>
    <li>
     <strong>Container and Items:</strong> In a Flexbox layout, you have a container element that you want to arrange its child elements (items) within.
    </li>
    <li>
     <strong>Display Property:</strong> To create a flex container, you need to set its {`'display'`} property to {`'flex'`} or {`'inline-flex'`} as seen in the example below.
    </li>
    <li>
     <strong>Flex Direction:</strong> The {`'flex-direction'`} property determines the main axis along which the items are placed. It can be set to one of the following values:
     <List>
      <li>
       <strong>row (Default):</strong> Items are placed along the horizontal axis.
      </li>
      <li>
       <strong>row-reverse:</strong> Items are placed along the horizontal axis in reverse order.
      </li>
      <li>
       <strong>column:</strong> Items are placed along the vertical axis.
      </li>
      <li>
       <strong>column-reverse:</strong> Items are placed along the vertical axis in reverse order.
      </li>
     </List>
    </li>
    <li>
     <strong>Justify Content:</strong> The {`'justify-content'`} property defines how items are distributed along the main axis. Common values include:
     <List>
      <li>
       <strong>flex-start (default):</strong> Items are aligned to the start of the main axis.
      </li>
      <li>
       <strong>flex-end:</strong> Items are aligned to the end of the main axis.
      </li>
      <li>
       <strong>center:</strong> Items are centered along the main axis.
      </li>
      <li>
       <strong>space-between:</strong> Items are evenly distributed with equal space between them.
      </li>
      <li>
       <strong>space-around:</strong> Items are evenly distributed with equal space around them.
      </li>
     </List>
    </li>
    <li>
     <strong>Align Items and Align Content:</strong> The {`'align-items'`} property controls the alignment of items along the cross-axis (perpendicular to the main axis), while {`'align-content'`}{" "}
     controls the alignment of multiple lines of items if there are multiple rows or columns. Common values include {`'flex-start'`}, {`'flex-end'`}, {`'center'`}, {`'stretch'`}, etc.
    </li>
    <li>
     <strong>Flex Items Properties:</strong>
     <List>
      <li>
       <strong>flex-grow:</strong> Determines how much a flex item can grow relative to other items.
      </li>
      <li>
       <strong>flex-shrink:</strong> Determines how much a flex item can shrink relative to other items.
      </li>
      <li>
       <strong>flex-basis:</strong> Specifies the initial size of a flex item before it grows or shrinks.
      </li>
      <li>
       <strong>flex:</strong> A shorthand property for {`'flex-grow'`}, {`'flex-shrink'`}, and {`'flex-basis'`} combined.
      </li>
     </List>
    </li>
    <li>
     <strong>Ordering:</strong> You can control the {`'order'`} in which flex items appear on the screen using the order property. Items with a lower {`'order'`} value appear first, and items with the
     same {`'order'`} value follow in the {`'order'`} they appear in the source code.
    </li>
    <li>
     <strong>Flex Wrap:</strong> The {`'flex-wrap'`} property determines whether flex items should wrap to a new line if they {`don't`} fit within the {`container's`} width. You can set it to values
     like {`'nowrap'`} (default), {`'wrap'`}, or {`'wrap-reverse'`}.
    </li>
    <li>
     <strong>Alignment within Flex Items:</strong> You can control how content is aligned within individual flex items using properties like {`'text-align'`} (for horizontal alignment) and{" "}
     {`'align-self'`} (for vertical alignment).
    </li>
    <li>
     <strong>Spacing:</strong> You can add space between flex items using properties like {`'margin'`} and {`'padding'`}. Additionally, you can control the spacing between flex lines (rows or columns)
     using the {`'gap'`} property.
    </li>
    <li>
     <strong>Alignment of Last Line:</strong> The {`'align-content'`} property can also be used to control the alignment of the last line of flex items if they wrap onto a new line.
    </li>
   </List>
  </ContentBox>
 )
}

export default FlexConcept
