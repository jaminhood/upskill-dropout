import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const Switch = () => {
  const varOne = `switch (expression) {
  case value1:
    // code to execute if expression is equal to value1
    break;
  case value2:
    // code to execute if expression is equal to value2
    break;
  ...
  default:
    // code to execute if expression does not match any of the case values
}`
  const varTwo = `const dayOfWeek = 'Monday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Have a great start to your week!');
    break;
  case 'Tuesday':
    console.log('Keep up the good work!');
    break;
  case 'Wednesday':
    console.log("You're halfway there!");
    break;
  case 'Thursday':
    console.log('Almost there!');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
    console.log('Enjoy your weekend!');
    break;
  case 'Sunday':
    console.log('Relax and recharge!');
    break;
  default:
    console.log('Invalid day of the week');
}`

  return (
    <>
      <Heading title="Switch Statements" />
      <Paragraph>
        The switch statement in JavaScript is a control flow statement that allows you to execute different code blocks based on the value of a variable. It is similar to the if-else statement, but it
        is more concise and efficient for handling multiple conditions.
      </Paragraph>
      <Paragraph>The syntax for the switch statement is as follows:</Paragraph>
      <CodeBlock title="switch.js" lang="javascript" codeString={varOne} />
      <Paragraph>
        The expression can be any JavaScript expression, such as a variable, a function call, or a mathematical expression. The <SpecialKeyDesign title="case" /> values can be any JavaScript value,
        such as a string, a number, or a Boolean value.
      </Paragraph>
      <Paragraph>
        If the value of the expression matches one of the <SpecialKeyDesign title="case" /> values, the corresponding code block is executed. If the value of the expression does not match any of the{" "}
        <SpecialKeyDesign title="case" /> values, the <SpecialKeyDesign title="default" /> code block is executed.
      </Paragraph>
      <Paragraph>Here is an example of a switch statement:</Paragraph>
      <CodeBlock title="switch.js" lang="javascript" codeString={varTwo} />
      <Paragraph>The switch statement can be used to handle multiple conditions with ease. It is a powerful tool that can help you to write more concise and efficient JavaScript code.</Paragraph>
      <Paragraph>Here are some tips for using the switch statement:</Paragraph>
      <List>
        <li>Use the switch statement to handle multiple conditions with ease.</li>
        <li>Make sure that each case value is unique.</li>
        <li>Use a default case to handle any unexpected values.</li>
        <li>Use break statements to prevent the code from executing into the next case block.</li>
        <li>Use parentheses to make your code more readable and maintainable.</li>
      </List>
    </>
  )
}

export default Switch
