import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"

const IndexPage = () => {
 const codeString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phonie</title>
    <Link rel="stylesheet" href="./style.css"></Link>
</head>
<body>
    <div class="container-box" id="main-container">
        <div class="paragraphs-container">
            <h1>Phonie</h1>
            <p>Identify your telecoms</p>
        </div>
        <div class="phonie-input-wrappper ">
            <input type="text" placeholder="Enter phone number">
            <p>
                <span>Phonie</span>
                <small>Identify your telecoms</small>
            </p>
        </div>
        <button class="reveal-btn">
            Reveal Provider
        </button>
         
    </div>

</body>
</html>`

 const containerString = `<div class="container-box" id="main-container"></div>`

 const paragraphsContainerString = `<div class="paragraphs-container"></div>`

 const h1String = `<h1>Phonie</h1>`

 const pString = `<p>Identify your telecoms</p>`

 const inputWrapperString = `<div class="phonie-input-wrappper "></div>`

 const inputString = `<input type="text" placeholder="Enter phone number">`

 const spanString = `<span>Phonie</span>`

 const smallString = `<small>Identify your telecoms</small>`

 const buttonString = `<button class="reveal-btn">Reveal Provider</button>`

 return (
  <ContentBox title="index.html" codeString={codeString} codeTitle="index.html" codeLang="html">
   <Paragraph>This page presents the comprehensive structure of the entire webpage, where we will closely examine each element and the rationale behind its implementation.</Paragraph>
   <CodeBlock title="container-box" codeString={containerString} lang="html" />
   <Paragraph>
    This main container which has both a {`'class'`} and an {`'id'`} is used to house the entire content of the Phonie telecoms form content.
   </Paragraph>
   <CodeBlock title="paragraphs-container" codeString={paragraphsContainerString} lang="html" />
   <Paragraph>
    This paragraphs container having just a single {`'class'`} is used to seperate the heading and the paragraph of the form from the other contents of the Phonie telecoms form container.
   </Paragraph>
   <CodeBlock title="h1" codeString={h1String} lang="html" />
   <Paragraph>
    This H1 heading tag is used to provide the title of the form content and in this case: <strong>Phonie</strong>.
   </Paragraph>
   <CodeBlock title="p" codeString={pString} lang="html" />
   <Paragraph>
    This p tag is used to provide the sub heading of the form content and in this case: <strong>Identify your telecoms</strong>.
   </Paragraph>
   <CodeBlock title="phonie-input-wrappper" codeString={inputWrapperString} lang="html" />
   <Paragraph>
    This {`'phonie-input-wrappper'`} container having just a single {`'class'`} is also used to seperate the input elements and siblings from other contents of the Phonie telecoms form container.
   </Paragraph>
   <CodeBlock title="input" codeString={inputString} lang="html" />
   <Paragraph>
    This input tag is used to provide a text area where a user can insert text contents on the webpage, we have a number of input types we use in html but in this case, we are using the{" "}
    <strong>text</strong> input type.
   </Paragraph>
   <CodeBlock title="span" codeString={spanString} lang="html" />
   <Paragraph>This span tag is used to provide some extra information on the form.</Paragraph>
   <CodeBlock title="small" codeString={smallString} lang="html" />
   <Paragraph>This small tag does the same job as the span tag but is also used to define text that should be displayed in a smaller font size relative to the surrounding text.</Paragraph>
   <CodeBlock title="button" codeString={buttonString} lang="html" />
   <Paragraph>This button tag serves as a call to action (CTA) element which performs an operation after it must have been clicked.</Paragraph>
  </ContentBox>
 )
}

export default IndexPage
