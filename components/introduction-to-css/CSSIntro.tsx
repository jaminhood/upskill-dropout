import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const CSSIntro = () => {
 return (
  <>
   <Heading title="what is CSS?." />
   <Paragraph>
    CSS stands for Cascading Style Sheets. It is a stylesheet language used for describing the presentation and formatting of a document written in HTML (Hypertext Markup Language). CSS is used to
    control the layout, colors, fonts, and other visual aspects of web pages, allowing web developers to separate the structure and content of a webpage from its visual design.
   </Paragraph>
   <Paragraph>Here are some key points about CSS:</Paragraph>
   <List>
    <li>
     <strong>Separation of Concerns:</strong> CSS separates the content (HTML) from its presentation (styling), making it easier to maintain and update websites. This separation is fundamental to
     modern web development practices.
    </li>
    <li>
     <strong>Selectors and Properties:</strong> CSS uses selectors to target specific HTML elements and apply styling rules to them. These rules are defined using properties such as color, font-size,
     margin, padding, and more.
    </li>
    <li>
     <strong>Cascading:</strong> The {`"Cascading"`} in CSS refers to the order of precedence when multiple conflicting styles are applied to an element. Styles can be inherited from parent elements,
     defined in an external stylesheet, or specified inline, and CSS rules dictate which styles take precedence.
    </li>
    <li>
     <strong>Responsive Design:</strong> CSS plays a crucial role in creating responsive web designs that adapt to different screen sizes and devices. Media queries and flexible layout techniques are
     commonly used to achieve responsiveness.
    </li>
    <li>
     <strong>Modularity:</strong> CSS encourages modularity by allowing developers to define reusable styles and classes. This promotes code reusability and maintainability.
    </li>
    <li>
     <strong>Browser Compatibility:</strong> CSS rules are interpreted by web browsers to render web pages, and different browsers may have slight variations in their rendering. Web developers often
     use CSS prefixes and other techniques to ensure compatibility across multiple browsers.
    </li>
    <li>
     <strong>CSS Frameworks:</strong> To expedite web development, many developers use CSS frameworks like Bootstrap, Foundation, or Materialize. These frameworks provide pre-designed and pre-styled
     UI components that can be customized and used to build websites more quickly.
    </li>
    <li>
     <strong>CSS Preprocessors:</strong> CSS preprocessors like Sass and Less extend the functionality of CSS by adding features like variables, nesting, and functions. They make CSS code more
     maintainable and reusable.
    </li>
    <li>
     <strong>CSS-in-JS:</strong> Some modern web development approaches involve writing CSS directly in JavaScript files, allowing for more dynamic and component-based styling, especially in frontend
     frameworks like React.
    </li>
   </List>
   <Paragraph>Here are the three ways you can insert CSS into your webpage:</Paragraph>
   <List>
    <li>Inline CSS</li>
    <li>Iniernal CSS</li>
    <li>External CSS</li>
   </List>
  </>
 )
}

export default CSSIntro
