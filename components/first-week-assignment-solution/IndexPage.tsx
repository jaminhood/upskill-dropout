import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const IndexPage = () => {
 const codeString = `<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form Page</title>
 </head>
 <body>
  <nav>
   <a href="./images.html">Images Page</a>
  </nav>
  <main>
   <h1>My first HTML Page</h1>
   <form action="">
    <p>A Contact Form</p>
    <br />
    <div>
     <div>
      <label for="name">Name:</label>
     </div>
     <div>
      <input type="text" id="name" />
     </div>
    </div>
    <br />
    <div>
     <div>
      <label for="email">Email:</label>
     </div>
     <div>
      <input type="email" id="email" />
     </div>
    </div>
    <br />
    <div>
     <div>
      <label for="
     </div>
     <div>
      <input type="password" id="password" />
     </div>
    </div>
    <br />
    <div>
     <div>
      <label for="phone">Phone Number:</label>
     </div>
     <div>
      <input type="number" id="phone" />
     </div>
    </div>
    <br />
    <div>
     <div>
      <label for="msg">Message:</label>
     </div>
     <div>
      <textarea id="msg"> </textarea>
     </div>
    </div>
    <br />
    <div>
     <input type="submit" />
    </div>
   </form>
  </main>
 </body>
</html>`

 return (
  <ContentBox title="index.html" codeString={codeString} codeTitle="index.html" codeLang="html">
   <Paragraph>
    In HTML, this index page is the home page of your entire web application i.e your entry point of the web app. for the assignment, this page is supposed to contain a navigation link to an
    images.html page, a main content containing a heading tag, a paragraph, and a form field containing some inputs and labels.
   </Paragraph>
   <Paragraph>
    I would be using HTML 5 semantic tags for the entire process, tags like the <TagDesign title="nav" /> tag and the <TagDesign title="main" /> tag.
   </Paragraph>
  </ContentBox>
 )
}

export default IndexPage
