import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Colors = () => {
 return (
  <>
   <Heading title="Colors" />
   <Paragraph>CSS (Cascading Style Sheets) offers several ways to define colors, each with its own syntax. {`Here's`} an explanation of some common color representation methods:</Paragraph>
   <Paragraph>
    <strong>Hexadecimal (Hex) Color Codes:</strong>
   </Paragraph>
   <List>
    <li>Format: #RRGGBB or #RRGGBBAA (for alpha transparency).</li>
    <li>Example: #FF0000 (red) or #0088CC99 (semi-transparent blue).</li>
    <li>
     Explanation: Hex color codes use a combination of six (or eight, when including alpha) hexadecimal characters to represent the amount of red (RR), green (GG), and blue (BB) in a color. Each pair
     of characters represents one of these primary colors, and the values can range from 00 (no color) to FF (maximum intensity). The alpha channel, if present, controls transparency.
    </li>
   </List>
   <Paragraph>
    <strong>RGB Color Codes:</strong>
   </Paragraph>
   <List>
    <li>Format: rgb(R, G, B) or rgba(R, G, B, A).</li>
    <li>Example: rgb(255, 0, 0) (red) or rgba(0, 136, 204, 0.6) (semi-transparent blue).</li>
    <li>
     Explanation: RGB (Red, Green, Blue) color codes represent colors using three values (R, G, B) to determine the amount of each primary color. The values typically range from 0 to 255. In the RGBA
     format, an additional value (A) specifies the alpha (transparency) channel, ranging from 0 (fully transparent) to 1 (fully opaque).
    </li>
   </List>
   <Paragraph>
    <strong>HSL Color Codes:</strong>
   </Paragraph>
   <List>
    <li>Format: hsl(H, S%, L%) or hsla(H, S%, L%, A).</li>
    <li>Example: hsl(0, 100%, 50%) (red) or hsla(200, 60%, 50%, 0.6) (semi-transparent blue).</li>
    <li>
     Explanation: HSL (Hue, Saturation, Lightness) color codes define colors using three components: Hue (H) for the type of color, Saturation (S) for the intensity of the color, and Lightness (L) for
     brightness. Hue values are typically specified in degrees (0-360), and Saturation and Lightness are represented as percentages. In HSLA, an additional component (A) specifies the alpha channel
     for transparency.
    </li>
   </List>
   <Paragraph>
    <strong>Named Colors:</strong>
   </Paragraph>
   <List>
    <li>Example: red, green, blue, etc.</li>
    <li>Explanation: CSS provides a set of predefined color names that you can use directly. For example, you can use the color name {`"red"`} instead of its hexadecimal or RGB values.</li>
   </List>
   <Paragraph>
    <strong>RGB Functional Notation:</strong>
   </Paragraph>
   <List>
    <li>Format: rgb(red, green, blue) or rgba(red, green, blue, alpha).</li>
    <li>Example: rgb(100%, 0%, 0%) or rgba(0%, 50%, 100%, 0.5).</li>
    <li>
     Explanation: This notation is similar to the RGB format but uses percentages instead of absolute values. {`It's`} particularly useful when you want to define colors based on a percentage of a
     particular primary color.
    </li>
   </List>
   <Paragraph>
    <strong>Linear Gradient (CSS Gradients):</strong>
   </Paragraph>
   <List>
    <li>Format: linear-gradient(direction, color-stop1, color-stop2, ...).</li>
    <li>Example: linear-gradient(to right, #FF0000, #0000FF).</li>
    <li>
     Explanation: CSS gradients allow you to create smooth transitions between colors. You specify a direction for the gradient and define color stops, which can be any valid color representation.
    </li>
   </List>
  </>
 )
}

export default Colors
