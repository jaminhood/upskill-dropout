import React from "react"
import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import List from "../shared/List"
import CodeBlock from "../code-block"

const Transitions = () => {
 const transitionString = `transition: property duration timing-function delay;`

 const codeString = `.button {
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #e74c3c;
}
`

 return (
  <ContentBox title="Transitions" codeString={codeString} codeTitle="style.html" codeLang="css">
   <Paragraph>
    CSS transitions are a way to smoothly animate changes in CSS properties over a specified duration. They make web interfaces more visually appealing and improve user experience by providing a
    gradual change between different styles, rather than abrupt jumps. Transitions are commonly used for effects like fading in elements, moving objects, changing colors, and more.
   </Paragraph>
   <Paragraph>{`Here's`} how CSS transitions work:</Paragraph>
   <List>
    <li>
     <strong>Select an Element:</strong> To create a transition effect, you first need to select the HTML element you want to apply the transition to. This is typically done using CSS selectors.
    </li>
    <li>
     <strong>Define the Property to Transition:</strong> You then specify the CSS property that you want to transition. This can include properties like {`'color'`}, {`'width'`}, {`'height'`},{" "}
     {`'opacity'`}, {`'background-color'`}, and many others.
    </li>
    <li>
     <strong>Set the Transition Property:</strong> To indicate that you want a transition effect, use the transition property in your CSS rule. The transition property is followed by values that
     define the {`transition's`} duration, timing function, delay, and the property to transition. {`Here's`} the syntax:
     <CodeBlock title="transition" codeString={transitionString} lang="css" />
     <List>
      <li>
       <strong>property:</strong> The CSS property you want to transition.
      </li>
      <li>
       <strong>duration:</strong> The time it takes for the transition to complete (e.g., 1s for 1 second, 500ms for 500 milliseconds).
      </li>
      <li>
       <strong>timing-function:</strong> Specifies the speed curve of the transition. Common values include {`'linear'`}, {`'ease'`}, {`'ease-in'`}, {`'ease-out'`}, and {`'ease-in-out'`}, among
       others.
      </li>
      <li>
       <strong>delay:</strong> An optional value that determines how long to wait before starting the transition.
      </li>
     </List>
    </li>
    <li>
     <strong>Trigger the Transition:</strong> The transition effect is triggered when {`there's`} a change in the selected property value. For example, if you change an {`element's`} color when a
     button is hovered, the color will transition smoothly due to the specified transition rules.
    </li>
   </List>
   <Paragraph>
    In this example, when you hover over a button with the class {`'.button'`}, the background color will transition from blue to red over a duration of 0.3 seconds with an easing timing function.
   </Paragraph>
  </ContentBox>
 )
}

export default Transitions
