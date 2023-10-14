import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const MediaQueries = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        /* Default styles for all screen sizes */
        body {
            background-color: #f2f2f2;
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
        }

        p {
            text-align: center;
        }

        /* Media query for screens wider than or equal to 600px */
        @media screen and (min-width: 600px) {
            body {
                background-color: #d3d3d3;
            }

            h1 {
                color: #333;
            }

            p {
                color: #666;
            }
        }
    </style>
</head>
<body>
    <h1>Responsive Design Example</h1>
    <p>This is some content on a webpage.</p>
</body>
</html>
`

 return (
  <ContentBox title="Media Queries" codeString={codeString} codeTitle="mediaQueries.html" codeLang="html">
   <Paragraph>
    Media queries in CSS allow you to apply different styles to your web page based on the characteristics of the {`user's`} device or viewport, such as screen width, height, orientation, and more.
    They are crucial for creating responsive web designs that adapt to various screen sizes and devices.
   </Paragraph>
   <Paragraph>{`Here's`} an example of using media queries in CSS with sample code to change the background color of a webpage when the screen width is greater than or equal to 600 pixels:</Paragraph>
   <Paragraph>In the example below:</Paragraph>
   <List>
    <li>By default, the webpage has a light gray background (#f2f2f2) and black text for headings and dark gray text for paragraphs.</li>
    <li>
     The media query is defined using <strong>@media</strong> and screen and (min-width: 600px), which means that the styles inside the media query block will apply when the screen width is 600 pixels
     or wider.
    </li>
    <li>
     Inside the media query block, we change the background color of the body to a darker gray (#d3d3d3) and adjust the text color of the heading and paragraphs to be more readable on the darker
     background.
    </li>
   </List>
  </ContentBox>
 )
}

export default MediaQueries
