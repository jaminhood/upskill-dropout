import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"

const CSSSelector = () => {
 const universalString = `* {
    /* Styles apply to all elements */
}
`

 const elementString = `p {
    /* Styles apply to all <p> elements */
}
`

 const classString = `.btn {
    /* Styles apply to all elements with class="btn" */
}
`

 const idString = `#header {
    /* Styles apply to the element with id="header" */
}
`

 const descendantString = `ul li {
    /* Styles apply to all <li> elements within <ul> elements */
}
`

 const childString = `ul > li {
    /* Styles apply to <li> elements that are direct children of <ul> elements */
}
`

 const adjacentString = `h2 + p {
    /* Styles apply to <p> elements that directly follow <h2> elements */
}
`

 const siblingString = `h2 ~ p {
    /* Styles apply to all <p> elements that are siblings of <h2> elements */
}
`

 const attributeString = `input[type="text"] {
    /* Styles apply to <input> elements with type="text" */
}
`

 const attributeValueString = `a[href="https://www.example.com"] {
    /* Styles apply to <a> elements with href="https://www.example.com" */
}
`

 const pseudoClassString = `a:hover {
    /* Styles apply to <a> elements when hovered over */
}

li:first-child {
    /* Styles apply to the first <li> element in a list */
}
`

 const pseudoElementString = `p::first-line {
    /* Styles apply to the first line of text in <p> elements */
}

p::first-letter {
    /* Styles apply to the first letter of text in <p> elements */
}
`

 return (
  <>
   <Heading title="CSS Selectors" />
   <Paragraph>
    CSS selectors are patterns used to select and style HTML elements on a web page. There are various types of CSS selectors, each with its own syntax and capabilities. Here are some common types of
    CSS selectors:
   </Paragraph>
   <Paragraph>
    <strong>Universal Selector (*):</strong> This selector matches all elements on the page.
   </Paragraph>
   <CodeBlock title="style.css" codeString={universalString} lang="css" />
   <Paragraph>
    <strong>Type Selector (Element Selector):</strong> It selects elements based on their HTML tag names.
   </Paragraph>
   <CodeBlock title="style.css" codeString={elementString} lang="css" />
   <Paragraph>
    <strong>Class Selector (.):</strong> It selects elements based on their class attribute values.
   </Paragraph>
   <CodeBlock title="style.css" codeString={classString} lang="css" />
   <Paragraph>
    <strong>ID Selector (#):</strong> It selects a single element based on its unique id attribute.
   </Paragraph>
   <CodeBlock title="style.css" codeString={idString} lang="css" />
   <Paragraph>
    <strong>Descendant Selector (Whitespace):</strong> It selects elements that are descendants of a specified element.
   </Paragraph>
   <CodeBlock title="style.css" codeString={descendantString} lang="css" />
   <Paragraph>
    <strong>Child Selector ({`>`}):</strong> It selects elements that are direct children of a specified element.
   </Paragraph>
   <CodeBlock title="style.css" codeString={childString} lang="css" />
   <Paragraph>
    <strong>Adjacent Sibling Selector (+):</strong> It selects an element that is immediately preceded by a specified element.
   </Paragraph>
   <CodeBlock title="style.css" codeString={adjacentString} lang="css" />
   <Paragraph>
    <strong>General Sibling Selector (~):</strong> It selects elements that are siblings of a specified element and share the same parent.
   </Paragraph>
   <CodeBlock title="style.css" codeString={siblingString} lang="css" />
   <Paragraph>
    <strong>Attribute Selector ([attribute]):</strong> It selects elements with a specific attribute.
   </Paragraph>
   <CodeBlock title="style.css" codeString={attributeString} lang="css" />
   <Paragraph>
    <strong>Attribute-Value Selector ({`[attribute="value"]`}):</strong> It selects elements with a specific attribute and attribute value.
   </Paragraph>
   <CodeBlock title="style.css" codeString={attributeValueString} lang="css" />
   <Paragraph>
    <strong>Pseudo-Class Selector (::):</strong> It selects elements based on their state or position.
   </Paragraph>
   <CodeBlock title="style.css" codeString={pseudoClassString} lang="css" />
   <Paragraph>
    <strong>Pseudo-Element Selector (::):</strong> It selects specific parts of an element, such as the first line or first letter of a text element.
   </Paragraph>
   <CodeBlock title="style.css" codeString={pseudoElementString} lang="css" />
  </>
 )
}

export default CSSSelector
