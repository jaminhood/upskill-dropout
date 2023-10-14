import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const BreakPoints = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        /* Default styles for both mobile and desktop */
        .container {
            width: 100%;
            margin: 0 auto;
            padding: 10px;
            box-sizing: border-box;
        }

        .column {
            float: left;
            box-sizing: border-box;
            padding: 10px;
        }

        /* Media query for screens wider than 600px (typical tablet landscape) */
        @media screen and (min-width: 600px) {
            .container {
                width: 80%; /* Adjust the width of the container */
            }

            .column {
                width: 50%; /* Make columns 50% width each */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="column" style="background-color: #f2f2f2;">
            <!-- Content for the left column -->
            <h2>Column 1</h2>
            <p>This is some content for the left column.</p>
        </div>
        <div class="column" style="background-color: #d3d3d3;">
            <!-- Content for the right column -->
            <h2>Column 2</h2>
            <p>This is some content for the right column.</p>
        </div>
    </div>
</body>
</html>
`

 return (
  <ContentBox title="Breakpoints" codeString={codeString} codeTitle="breakpoint.html" codeLang="html">
   <Paragraph>
    Breakpoints in responsive web design are specific screen widths at which you apply different CSS styles using media queries to adapt your layout and content for various devices or screen sizes.
    They are used to define the {`"break"`} points at which your design should change to better suit the available screen space.
   </Paragraph>
   <Paragraph>{`Here's`} an example of how you can use breakpoints in CSS with sample code:</Paragraph>
   <Paragraph>
    {`Let's`} say you want to create a simple two-column layout that adjusts for different screen sizes, with one column taking up the full width on smaller screens (mobile) and both columns side by
    side on larger screens (desktop).
   </Paragraph>
   <Paragraph>In the example below:</Paragraph>
   <List>
    <li>By default, the container takes up the full width of the screen, and the columns are stacked on top of each other, suitable for smaller screens like mobile devices.</li>
    <li>
     When the screen width is at least 600px (typical tablet landscape width), the styles within the media query are applied. This changes the {`container's`} width to 80% of the screen and makes the
     columns each take up 50% of the width, effectively creating a two-column layout for larger screens.
    </li>
   </List>
  </ContentBox>
 )
}

export default BreakPoints
