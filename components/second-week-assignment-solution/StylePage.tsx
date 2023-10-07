import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const StylePage = () => {
 const codeString = `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: aliceblue;
}

.container-box {
    padding: 30px 40px;
    width: 700px;
    height: 450px;
    margin: 60px auto;
    box-shadow: 3px 3px 30px 20px rgba(0, 0, 250, 0.2);
    border-radius: 30px;
}
.container-box h1 {
    font-size: 3rem;
    text-align: center;
    color: blue;
}

.container-box p {
    text-align: center;
    font-size: 1.8rem;
    color: rgba(0, 0, 250, 0.4);
}

.phonie-input-wrappper {
    margin-top: 90px;
}
.phonie-input-wrappper input {
    display: block;
    margin: 0 auto;
    width: 370px;
    height: 50px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
    color: blue;
    margin-bottom: 10px;
}
.phonie-input-wrappper input::placeholder {
    color: blue;
}
.phonie-input-wrappper p * {
    display: block;
}
.phonie-input-wrappper p small {
    font-size: 0.6rem;
}


.reveal-btn {
    color: white;
    background-color: blue;
    border: none;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    width: 370px;
    height: 55px;
    font-size: 1.2rem;
    border-radius: 20px;
}`

 const universalString = `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}`

 const bodyString = `body {
    background-color: aliceblue;
}`

 const containerString = `.container-box {
    padding: 30px 40px;
    width: 700px;
    height: 450px;
    margin: 60px auto;
    box-shadow: 3px 3px 30px 20px rgba(0, 0, 250, 0.2);
    border-radius: 30px;
}`

 const h1String = `.container-box h1 {
    font-size: 3rem;
    text-align: center;
    color: blue;
}

.container-box p {
    text-align: center;
    font-size: 1.8rem;
    color: rgba(0, 0, 250, 0.4);
}`

 const inputWrapperString = `.phonie-input-wrappper input {
    display: block;
    margin: 0 auto;
    width: 370px;
    height: 50px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
    color: blue;
    margin-bottom: 10px;
}
.phonie-input-wrappper input::placeholder {
    color: blue;
}`

 const allInputString = `.phonie-input-wrappper p * {
    display: block;
}`

 return (
  <ContentBox title="style.css" codeString={codeString} codeTitle="style.css" codeLang="css">
   <Paragraph>This page presents styling to the HTML document, where we will closely examine each style block and the rationale behind its implementation.</Paragraph>
   <CodeBlock title="*" codeString={universalString} lang="css" />
   <Paragraph>
    This is called the universal selector and it acts as a form of reset to this web document by removing some default stylings attached to each element by the browser. This removes the default margin
    (Which is used to give spaces outside of the container), padding (Which also provices spacing but this time within the container itself), and the box sizing property which was reset to border box
    (Sums up the box margin and padding values and then subtract the result from the main container it ia attached to and in this case, the entire document).
   </Paragraph>
   <CodeBlock title="body" codeString={bodyString} lang="css" />
   <Paragraph>
    This is called an element selector, this element is the body element and it targets the body tag present in the HTML element. Which obviously means that every styling that is applied to this body
    element selector automatically affects the body tag in the HTML document. Here the body element was assigned a background color of {`'aliceblue'`} which replaces the default white color of the
    page.
   </Paragraph>
   <CodeBlock title=".container-box" codeString={containerString} lang="css" />
   <Paragraph>
    This is called a class selector, this class selector targets the container which has an attribute of {`'class'`} and a value of {`container-box`} present in the HTML element. Which obviously means
    that every styling that is applied to this class selector automatically affects the container having the {`'class'`} as {`container-box`} in the HTML document. Here this class selector was
    assigned a padding which gave it some spacing within the container itself (spaces between the content and the container edge), a width and a height which obviously gave it some form of distance in
    the x and y axis, margin gave it some spacing outside of the container and the auto applied here simply means it should force it to the available space both on the left and right sides of the
    container, the box shadow gave it a shadow effect while the border radius is used to make the container rounded on all sides.
   </Paragraph>
   <CodeBlock title=".container-box h1, .container-box p" codeString={h1String} lang="css" />
   <Paragraph>
    This operation is called targeting an element selecotr within a class selector, this element selector targets all the elements of this element selector which are contained in the container which
    has an attribute of {`'class'`} and a value of {`container-box`} present in the HTML element. Which obviously means that every styling that is applied to this element selector automatically
    affects the elements selector present in the container having the {`'class'`} as {`container-box`} in the HTML document. Here this element selector was assigned a font size which made the content
    of the element a little bigger than it was originally, a text align center which brought the content to the center of the webpage, and a color which gave it a unique color.
   </Paragraph>
   <CodeBlock title=".phonie-input-wrappper input" codeString={inputWrapperString} lang="css" />
   <Paragraph>
    This {`'phonie-input-wrappper'`} input element is also an element selector contained in a class selector, Here this element selector was assigned some unfamiliar styles like a display of block
    which changed it from the default display of inline thereby forcing it to occupy the entire web view, a border none which removes the entire border of the element, an outline none which forces the
    outline on focus of the element to be hidden. We also have a pseudo selector as well here {`'::placeholder`} which targets the placeholder of the input elemnt and here we used this selecotr to
    change the color op the placeholder of the input element.
   </Paragraph>
   <CodeBlock title=".phonie-input-wrappper p *" codeString={allInputString} lang="css" />
   <Paragraph>
    This selector selects all elements (both inline and block) within the <TagDesign title="p" /> tag of the {`'phonie-input-wrappper'`} container and assigns a common style to them, here we assigned
    the style of display block which automatically forces all elements within this tag to be a block element.
   </Paragraph>
  </ContentBox>
 )
}

export default StylePage
