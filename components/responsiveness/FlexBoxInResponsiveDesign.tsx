import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const FlexBoxInResponsiveDesign = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        /* Base styles for all screen sizes */
        .container {
            display: flex;
            flex-wrap: wrap; /* Wrap items to a new row when they don't fit */
        }

        .item {
            flex: 1; /* Each item takes equal width */
            padding: 10px;
            box-sizing: border-box;
            text-align: center;
        }

        /* Media query for screens narrower than 600px (typical mobile width) */
        @media screen and (max-width: 600px) {
            .item {
                flex-basis: 100%; /* Full width for each item on smaller screens */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item" style="background-color: #f2f2f2;">Column 1</div>
        <div class="item" style="background-color: #d3d3d3;">Column 2</div>
        <div class="item" style="background-color: #c0c0c0;">Column 3</div>
    </div>
</body>
</html>
`

 return (
  <ContentBox title="Using Flexbox in Responsive CSS" codeString={codeString} codeTitle="flexbox.html" codeLang="html">
   <Paragraph>
    Flexbox is a powerful CSS layout model that is well-suited for creating responsive designs. It allows you to create flexible and dynamic layouts, which adapt to different screen sizes and
    orientations. {`Here's`} an example of how to use Flexbox in a simple responsive design:
   </Paragraph>
   <Paragraph>Suppose you want to create a flexible three-column layout that collapses into a single column on smaller screens.</Paragraph>
   <Paragraph>In the example below:</Paragraph>
   <List>
    <li>
     The <strong>.container</strong> element is styled as a flex container with <strong>display: flex</strong> and <strong>flex-wrap: wrap</strong>. This allows its child elements{" "}
     <strong>(.item)</strong> to be laid out in a row, wrapping to the next row if they {`don't`} fit on the screen.
    </li>
    <li>
     The <strong>.item</strong> elements have <strong>flex: 1</strong>, which makes them share equal width within the container. This creates a three-column layout on wider screens.
    </li>
    <li>
     Inside the media query (triggered when the screen width is less than or equal to 600px), the <strong>.item</strong> elements have <strong>flex-basis: 100%</strong>, which makes them occupy the
     full width of their container, effectively stacking the columns into a single column layout for smaller screens.
    </li>
   </List>
  </ContentBox>
 )
}

export default FlexBoxInResponsiveDesign
