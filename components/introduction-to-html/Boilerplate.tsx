import TagDesign from "@/components/shared/TagDesign"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const Boilerplate = () => {
 const boilerplateCode = `<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Web Page</title>
 </head>
 <body>
  <header>
   <nav>UpSkill Dropout</nav>
  </header>
  <main>
   <section>UpSkill Dropout</section>
   <section>
    <article>UpSkill Dropout</article>
   </section>
  </main>
  <footer>UpSkill Dropout</footer>
 </body>
</html>`

 const doctypeCode = `<!DOCTYPE html>`

 const htmlCode = `<html></html>`

 const headCode = `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Web Page</title>
 </head>`

 const bodyCode = `<body></body>`

 const semanticCode = ` <body>
  <header>
   <nav>UpSkill Dropout</nav>
  </header>
  <main>
   <section>UpSkill Dropout</section>
   <section>
    <article>UpSkill Dropout</article>
   </section>
  </main>
  <footer>UpSkill Dropout</footer>
 </body>`

 return (
  <>
   <Heading title="HTML Boilerplate" />
   <Paragraph>
    An HTML boilerplate, often referred to as an HTML template or skeleton, is a
    starting point for creating web pages. {`It's`} a basic, standardized
    structure that you can use as a foundation when building web pages. The HTML
    boilerplate includes essential elements and tags that every web page should
    have, and it provides a consistent structure to ensure compatibility and
    proper rendering across different web browsers.
   </Paragraph>
   <Paragraph>{`Here's`} a simple example of an HTML boilerplate:</Paragraph>
   <CodeBlock title="opening tag" codeString={boilerplateCode} lang="html" />
   <Paragraph>
    <strong>{`<!DOCTYPE html>`}:</strong> This declaration defines the document
    type and version of HTML {`you're`} using. In modern web development,{" "}
    {`it's`} common to use HTML5, so {`you'll`} typically see{" "}
    <TagDesign title="!DOCTYPE html" /> at the beginning of your document.
   </Paragraph>
   <CodeBlock title="Doctype tag" codeString={doctypeCode} lang="html" />
   <Paragraph>
    <strong>{`<html>`}:</strong> The opening and closing{" "}
    <TagDesign title="html" /> tags define the root element of your HTML
    document. Everything in your web page is enclosed within these tags.
   </Paragraph>
   <CodeBlock title="HTML tag" codeString={htmlCode} lang="html" />
   <Paragraph>
    <strong>{`<head>`}:</strong> The <TagDesign title="head" /> section contains
    metadata and other non-visible information about the web page. Common
    elements found in the <TagDesign title="head" /> section include:
   </Paragraph>
   <List>
    <li>
     <strong>
      <TagDesign title="meta" /> tags:
     </strong>{" "}
     These provide metadata like character encoding and viewport settings.
    </li>
    <li>
     <strong>
      <TagDesign title="title" /> tag:
     </strong>{" "}
     This sets the title of the web page, which appears in the {`browser's`}{" "}
     title bar or tab.
    </li>
    <li>
     <strong>External resource references:</strong> This is where you link to
     external resources like stylesheets (CSS) and JavaScript files.
    </li>
    <li>
     <strong>Inline styles and scripts:</strong> You can include CSS styles and
     JavaScript code directly within the <TagDesign title="head" /> section.
    </li>
   </List>
   <CodeBlock title="Head tag" codeString={headCode} lang="html" />
   <Paragraph>
    <strong>{`<body>`}:</strong> The <TagDesign title="body" /> section contains
    the visible content of your web page, such as text, images, links, and other
    elements. This is where you structure your {`page's`} layout and present its
    main content.
   </Paragraph>
   <CodeBlock title="Body tag" codeString={bodyCode} lang="html" />
   <Paragraph>
    <strong>Structural HTML elements:</strong>
    Inside the <TagDesign title="body" /> section, you use HTML tags like{" "}
    <TagDesign title="header" />, <TagDesign title="nav" />,{" "}
    <TagDesign title="main" />, <TagDesign title="section" />,{" "}
    <TagDesign title="article" /> , and <TagDesign title="footer" /> to
    semantically structure your page. These elements help convey the meaning and
    organization of different sections of your content to both browsers and
    search engines.
   </Paragraph>
   <CodeBlock title="Semantic tags" codeString={semanticCode} lang="html" />
  </>
 )
}

export default Boilerplate
