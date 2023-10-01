import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const InternalCSS = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>
    <style>
        /* Internal CSS rules */
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        
        h1 {
            color: #333;
        }
        
        p {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph with some text.</p>
</body>
</html>
`

 return (
  <ContentBox title="Internal CSS" codeString={codeString} codeTitle="Internal CSS" codeLang="html">
   <Paragraph>
    Internal CSS, also known as embedded CSS, is a method of including CSS styling rules directly within an HTML document. Instead of defining styles in an external CSS file or using inline CSS within
    individual HTML elements, internal CSS is placed within a <TagDesign title="style" /> element in the HTML {`document's`} <TagDesign title="head" /> section.
   </Paragraph>
   <Paragraph>
    In the example provided, the <TagDesign title="style" /> element within the <TagDesign title="head" /> section contains CSS rules that apply to elements within the HTML document. These styles are
    defined within the HTML file itself and will be applied to the elements on that specific page. Internal CSS is a middle-ground option between inline CSS and external CSS files.
   </Paragraph>
   <Paragraph>Advantages of using internal CSS:</Paragraph>
   <List>
    <li>
     <strong>Scope:</strong> Styles defined using internal CSS are scoped to the specific HTML document where they are declared. They {`won't`} affect styles on other web pages or elements outside of
     the document.
    </li>
    <li>
     <strong>Separation of Concerns:</strong> While not as separated as external CSS files, internal CSS still separates styling information from the HTML content, making it easier to maintain and
     update.
    </li>
    <li>
     <strong>Quick Prototyping:</strong> Internal CSS is useful for quickly prototyping a web {`page's`} style within a single HTML file, especially for small projects or one-off pages.
    </li>
   </List>
  </ContentBox>
 )
}

export default InternalCSS
