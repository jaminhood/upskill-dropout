import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const BeforeAndAfter = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
  <style>
    .custom-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      text-decoration: none;
      position: relative;
    }

    /* Styling the ::before pseudo-element */
    .custom-button::before {
      content: "\f067"; /* Unicode value for a Font Awesome arrow */
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      position: absolute;
      left: -20px;
    }

    /* Styling the ::after pseudo-element */
    .custom-button::after {
      content: " (Click me!)";
      color: #f39c12;
    }
  </style>
</head>
<body>
  <a class="custom-button" href="#">Button Text</a>
</body>
</html>
`

 return (
  <ContentBox title="::before and ::after selectors" codeString={codeString} codeTitle="index.html" codeLang="html">
   <Paragraph>
    In CSS, {`'::before'`} and {`'::after'`} are {`pseudo-elements`} that allow you to insert content before and after the content of an element. These {`pseudo-elements`} are typically used to add
    decorative or structural elements to HTML elements without adding extra HTML markup. {`Here's`} what you need to know about {`'::before'`} and {`'::after'`}, along with sample code:
   </Paragraph>
   <List>
    <li>
     <strong>::before Pseudo-Element:</strong>
     <List>
      <li>
       The {`'::before'`} {`pseudo-element`} inserts content before the content of the selected element.
      </li>
      <li>It is often used for decorative elements like icons, text, or generated content.</li>
      <li>You can style it with CSS properties just like any other element.</li>
     </List>
    </li>
    <li>
     <strong>::after Pseudo-Element:</strong>
     <List>
      <li>
       The {`'::after'`} {`pseudo-element`} inserts content after the content of the selected element.
      </li>
      <li>It is used in a similar way as {`'::before'`} for adding decorative or structural elements.</li>
     </List>
    </li>
    <li>
     <strong>Using content Property:</strong>
     <List>
      <li>
       To specify the content to be inserted, you need to use the content property. This property can take text, generated {`'content'`}, or even special values like {`'url()'`} for images.
      </li>
     </List>
    </li>
   </List>
   <Paragraph>In the Sample Code Below</Paragraph>
   <List>
    <li>We have a simple button with a class of {`"custom-button."`}</li>
    <li>
     We use the {`'::before'`} {`pseudo-element`} to insert a Font Awesome arrow before the button text. This is achieved using the {`'content'`} property and specifying the Unicode value for the
     arrow icon.
    </li>
    <li>
     The {`'::after'`} {`pseudo-element`} is used to add text after the button content. In this case, it provides the {`"(Click me!)"`} message.
    </li>
   </List>
  </ContentBox>
 )
}

export default BeforeAndAfter
