import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Animaiton = () => {
 const keyframesString = `@keyframes slide {
  0% { left: 0; }
  100% { left: 100px; }
}
`

 const animationString = `.element {
  animation: slide 2s ease-in-out;
}
`

 const animationHoverString = `.element:hover {
  animation-play-state: paused;
}
`

 return (
  <>
   <Heading title="Animation" />
   <Paragraph>
    CSS animations allow you to create motion and transitions in web elements without the need for JavaScript. Animations can be used to make web pages more engaging, provide visual feedback, and
    enhance user experience. CSS animations work by gradually changing the style of an element over a specified duration.
   </Paragraph>
   <Paragraph>{`Here's`} how CSS animations are typically used:</Paragraph>
   <Paragraph>
    <strong>Keyframes:</strong>
   </Paragraph>
   <Paragraph>
    CSS animations are defined using keyframes. Keyframes define how an element should appear at various points during the animation. You specify the styles for an element at specific percentages of
    the animation's duration.
   </Paragraph>
   <CodeBlock title="Keyframes" codeString={keyframesString} lang="css" />
   <Paragraph>In this example, the {`'slide'`} animation moves an element from the left edge of its container to 100px to the right.</Paragraph>
   <Paragraph>
    <strong>Apply Animation to an Element:</strong>
   </Paragraph>
   <Paragraph>You then apply the animation to an HTML element using the {`'animation'`} property in a CSS rule.</Paragraph>
   <CodeBlock title="Animation" codeString={animationString} lang="css" />
   <List>
    <li>
     <strong>animation-name:</strong> The name of the keyframes you defined.
    </li>
    <li>
     <strong>animation-duration:</strong> The duration of the animation (e.g., 2s for 2 seconds).
    </li>
    <li>
     <strong>animation-timing-function:</strong> The timing function that determines the speed curve of the animation (e.g., {`'ease-in-out'`} for a gradual start and end).
    </li>
    <li>
     You can also specify other properties such as {`'animation-delay'`}, {`'animation-iteration-count'`}, and more.
    </li>
   </List>
   <Paragraph>
    <strong>Control Animations:</strong>
   </Paragraph>
   <Paragraph>
    You can control animations through CSS classes and JavaScript events. You can start, pause, resume, and stop animations by adding or removing classes to elements, or by using JavaScript to
    manipulate the {`'animation-play-state'`} property.
   </Paragraph>
   <CodeBlock title="Control Animations" codeString={animationHoverString} lang="css" />
   <Paragraph>
    <strong>Use Animation Properties:</strong>
   </Paragraph>
   <Paragraph>
    CSS animations offer several properties to customize the animation, such as {`'animation-fill-mode'`}, which controls what happens before and after the animation, and {`'animation-direction'`},
    which determines whether the animation plays forwards, backwards, or alternates.
   </Paragraph>
  </>
 )
}

export default Animaiton
