import React from "react"
import CodeBlock from "../code-block"
import Paragraph from "../shared/Paragraph"
import Heading from "../shared/Heading"
import List from "../shared/List"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const Conditionals = () => {
  const varOne = `var age = 18;

if (age >= 18) {
  console.log("You are old enough to vote");
}`
  const varTwo = `var age = 17;

if (age >= 18) {
  console.log("You are old enough to vote");
} else {
  console.log("You are not old enough to vote");
}`
  const varThree = `var age = 18;

if (age >= 18) {
  console.log("You can vote");
} else if (age >= 16) {
  console.log("You can buy a lottery ticket");
} else {
  console.log("You are not old enough to do either");
}`

  const varFour = `// If Else Statement
if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

// Ternary
var isAdult = age >= 18 ? true : false;
`

  return (
    <>
      <Heading title="Conditional Statements" />
      <Paragraph>
        Conditional statements in JavaScript are used to control the flow of your program based on the value of a condition. The most common conditional statements in JavaScript are the{" "}
        <SpecialKeyDesign title="if" />, <SpecialKeyDesign title="else" />, and <SpecialKeyDesign title="else if" /> statements.
      </Paragraph>
      <Heading accentTitle="If Statement" />
      <Paragraph>
        The <SpecialKeyDesign title="if" /> statement is used to execute a block of code if a condition is true. For example, the following code will print {`"You are old enough to vote"`} to the
        console if the {`user's`} age is greater than or equal to 18:
      </Paragraph>
      <CodeBlock title="if.js" lang="javascript" codeString={varOne} />
      <Heading accentTitle="Else Statement" />
      <Paragraph>
        The <SpecialKeyDesign title="else" /> statement is used to execute a block of code if the condition in the <SpecialKeyDesign title="if" /> statement is false. For example, the following code
        will print {`"You are not old enough to vote"`} to the console if the {`user's`} age is less than 18:
      </Paragraph>
      <CodeBlock title="else.js" lang="javascript" codeString={varTwo} />
      <Heading accentTitle="Else If Statement" />
      <Paragraph>
        The <SpecialKeyDesign title="else if" /> statement is used to check multiple conditions and execute a block of code based on the first condition that is true. For example, the following code
        will print {`"You can vote"`}, {`"You can buy a lottery ticket"`}, or {`"You are not old enough to do either"`} to the console based on the {`user's`} age:
      </Paragraph>
      <CodeBlock title="else-if.js" lang="javascript" codeString={varThree} />
      <Paragraph>
        Conditional statements are a powerful tool for controlling the flow of your JavaScript programs. By understanding how to use conditional statements, you can write more complex and powerful
        code.
      </Paragraph>
      <Paragraph>Here are some tips for using conditional statements:</Paragraph>
      <List>
        <li>Use conditional statements to control the flow of your program based on the value of a condition.</li>
        <li>
          Use the <SpecialKeyDesign title="if" /> statement to execute a block of code if a condition is true.
        </li>
        <li>
          Use the <SpecialKeyDesign title="else" /> statement to execute a block of code if the condition in the <SpecialKeyDesign title="if" /> statement is false.
        </li>
        <li>
          Use the <SpecialKeyDesign title="else if" /> statement to check multiple conditions and execute a block of code based on the first condition that is true.
        </li>
        <li>Use parentheses to make your code more readable when using conditional statements.</li>
      </List>
      <Heading accentTitle="Ternary Operators" />
      <Paragraph>
        The ternary operator takes three operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false. The ternary operator
        returns the result of the second expression if the condition is true, and the result of the third expression if the condition is false.
      </Paragraph>
      <Paragraph>The ternary operator can be used to simplify conditional statements. For example, the following code can be rewritten using the ternary operator:</Paragraph>
      <CodeBlock title="ternary.js" lang="javascript" codeString={varFour} />
    </>
  )
}

export default Conditionals
