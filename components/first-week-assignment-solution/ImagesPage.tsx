import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const ImagesPage = () => {
 const codeString = `<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Images Page</title>
 </head>
 <body>
  <nav>
   <a href="./index.html">Form Page</a>
  </nav>
  <main>
   <h1>Images Page</h1>
   <section>
    <div>
     <img width="100" height="100" src="./images/one.jpg" alt="" />
     <img width="100" height="100" src="./images/two.jpg" alt="" />
     <img width="100" height="100" src="./images/three.jpg" alt="" />
     <img width="100" height="100" src="./images/four.jpg" alt="" />
     <img width="100" height="100" src="./images/five.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/one.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/two.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/three.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/four.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/five.jpg" alt="" />
    </div>
    <div>
     <img width="100" height="100" src="./images/one.jpg" alt="" />
     <img width="100" height="100" src="./images/two.jpg" alt="" />
     <img width="100" height="100" src="./images/three.jpg" alt="" />
     <img width="100" height="100" src="./images/four.jpg" alt="" />
     <img width="100" height="100" src="./images/five.jpg" alt="" />
    </div>
   </section>
  </main>
 </body>
</html>`

 return (
  <ContentBox title="images.html" codeString={codeString} codeTitle="images.html" codeLang="html">
   <Paragraph>
    The images.html page here is the page that houses the entire images in this web application. this page is supposed to contain a navigation link back to the index.html page, a main content
    containing a heading tag, a section, and some div tags containing the <TagDesign title="img" /> tags.
   </Paragraph>
   <Paragraph>
    I would be using HTML 5 semantic tags for the entire process, tags like the <TagDesign title="nav" /> tag, the <TagDesign title="main" /> tag and the <TagDesign title="section" /> tag.
   </Paragraph>
   <Paragraph>
    <strong>Note:</strong> All the images are supposed to be housed inside an images folder in the root directory of your application i.e the directory where your main <strong>index.html</strong> file
    is located.
   </Paragraph>
  </ContentBox>
 )
}

export default ImagesPage
