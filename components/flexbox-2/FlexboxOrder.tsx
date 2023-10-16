import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const FlexboxOrder = () => {
 const htmlString = `<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
</div>
`

 const cssString = `.container {
  display: flex;
}

.item-1 {
  order: 3;
}

.item-2 {
  order: 1;
}

.item-3 {
  order: 2;
}
`

 return (
  <>
   <Heading title="Flexbox 'order' property" />
   <Paragraph>
    In CSS Flexbox, the {`'order'`} property allows you to control the order in which flex items appear within their container, overriding the default order based on the source order in the HTML. The{" "}
    {`'order'`} property is used to reorder flex items without changing the HTML structure, making it a powerful tool for creating flexible and responsive layouts. {`Here's`} a detailed explanation of
    the {`'order'`} property:
   </Paragraph>
   <Paragraph>
    <strong>Understanding the Default Order:</strong>
   </Paragraph>
   <Paragraph>
    By default, flex items are displayed in the order they appear in the HTML source code. This means that the first item in the source order appears at the beginning, the second item appears next,
    and so on. However, you can use the {`'order'`} property to modify this order.
   </Paragraph>
   <Paragraph>
    <strong>The {`'order'`} Property:</strong>
   </Paragraph>
   <List>
    <li>The {`'order'`} property is used to specify the order of a flex item within its container.</li>
    <li>It accepts an integer value, where lower values (negative or positive) bring the item earlier in the order, and higher values bring it later.</li>
    <li>Items with the same {`'order'`} value will be displayed in the order they appear in the source code.</li>
   </List>
   <Paragraph>
    <strong>Example: Changing the Order of Flex Items:</strong>
   </Paragraph>
   <Paragraph>Consider a simple HTML structure with three flex items:</Paragraph>
   <CodeBlock title="index.html" codeString={htmlString} lang="html" />
   <Paragraph>Using CSS, you can change the order of these items:</Paragraph>
   <CodeBlock title="style.css" codeString={cssString} lang="css" />
   <Paragraph>
    In this example, {`we've`} reordered the items within the flex container. Item 1 has an {`'order'`} of 3, so it appears last. Item 2 has an {`'order'`} of 1, making it appear first, and item 3 has
    an {`'order'`} of 2, so it appears in the middle.
   </Paragraph>
   <Paragraph>
    <strong>When to Use {`'order'`}:</strong>
   </Paragraph>
   <List>
    <li>{`'order'`} is particularly useful for creating responsive layouts where the order of items needs to change based on screen size or user interactions.</li>
    <li>It's valuable for reorganizing items in a way that makes sense for various viewports, like rearranging navigation menus or changing the order of content blocks.</li>
    <li>It's essential to use {`'order'`} judiciously, as overusing it can lead to confusion and difficulties in maintaining the code.</li>
   </List>
   <Paragraph>
    <strong>Caveats:</strong>
   </Paragraph>
   <List>
    <li>Be aware that the use of {`'order'`} may affect accessibility and the natural flow of content, so use it with care.</li>
    <li>Reordering flex items with a large value for {`'order'`} can push items outside the visible viewport, which may require additional styling to manage.</li>
   </List>
  </>
 )
}

export default FlexboxOrder
