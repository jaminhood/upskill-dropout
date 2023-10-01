import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const ExternalCSS = () => {
 const htmlString = `<!DOCTYPE html>
<html>
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <!-- HTML content here -->
</body>
</html>
`

 const cssString = `/* styles.css */
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
`

 return (
  <>
   <Heading title="External CSS" />
   <Paragraph>
    External CSS, also known as an external stylesheet, is a method of defining CSS styles in a separate file with a {`'.css'`} extension. These CSS files are then linked to HTML documents using the{" "}
    <TagDesign title="link" /> element. External CSS allows you to maintain a clear separation between the structure (HTML) and presentation (CSS) of a web page, which is a fundamental principle of
    web development.
   </Paragraph>
   <Paragraph>{`Here's`} an overview of how external CSS works:</Paragraph>
   <List>
    <li>
     <strong>Create a CSS File:</strong> You create a separate {`'.css'`} file that contains all your CSS rules. For example, you might have a file called {`'styles.css'`}.
    </li>
    <li>
     <strong>Link to HTML:</strong> In your HTML {`document's`} <TagDesign title="head" /> section, you include a <TagDesign title="link" /> element that specifies the path to the external CSS file.
     This link establishes a connection between the HTML document and the CSS file.
    </li>
   </List>
   <CodeBlock title="index.html" codeString={htmlString} lang="html" />
   <List>
    <li>
     <strong>Define CSS Rules:</strong> In the {`'styles.css'`} file, you define CSS rules just as you would with internal or inline CSS. For example:
    </li>
   </List>
   <CodeBlock title="style.css" codeString={cssString} lang="css" />
   <Paragraph>Advantages of using external CSS:</Paragraph>
   <List>
    <li>
     <strong>Separation of Concerns:</strong> External CSS separates the styling information from the HTML content, promoting cleaner and more maintainable code. This separation makes it easier for
     web designers and developers to work on the design independently of the {`page's`} structure and content.
    </li>
    <li>
     <strong>Reusability:</strong> You can reuse the same external CSS file across multiple HTML documents. This is especially valuable for maintaining a consistent design across an entire website.
    </li>
    <li>
     <strong>Efficiency:</strong> External CSS files are cached by the browser after the initial download, which can lead to faster loading times for subsequent pages on the same website. This reduces
     the need for redundant CSS code.
    </li>
    <li>
     <strong>Organization:</strong> CSS rules can be organized into different files and folders, making it easier to manage and scale styles for larger websites.
    </li>
    <li>
     <strong>Collaboration:</strong> Multiple team members can work on the HTML and CSS separately, and their changes can be integrated easily by referencing the same external CSS file.
    </li>
   </List>
  </>
 )
}

export default ExternalCSS
