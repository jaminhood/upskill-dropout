import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const ArithmeticOperators = () => {
  const varOne = `// Addition
var sum = 1 + 2; // sum is 3

// Subtraction
var difference = 5 - 3; // difference is 2

// Multiplication
var product = 4 * 5; // product is 20

// Division
var quotient = 10 / 2; // quotient is 5

// Modulus
var remainder = 11 % 3; // remainder is 2`
  const varTwo = `// Variables
var a = 10;
var b = 5;

// Expression
var sum = a + b; // sum is 15`
  const varThree = `var area = (length * width) / 2; // area is the area of a triangle`

  return (
    <>
      <Heading title="Arithmetic Operators" />
      <Paragraph>Arithmetic operations in JavaScript are used to perform mathematical operations on numbers. The most common arithmetic operators are:</Paragraph>
      <List>
        <li>
          <strong>Addition (+):</strong> Adds two numbers together.
        </li>
        <li>
          <strong>Subtraction (-):</strong> Subtracts the second number from the first number.
        </li>
        <li>
          <strong>Multiplication (*):</strong> Multiplies two numbers together.
        </li>
        <li>
          <strong>Division (/):</strong> Divides the first number by the second number.
        </li>
        <li>
          <strong>Modulus (%):</strong> Returns the remainder of dividing the first number by the second number.
        </li>
      </List>
      <Paragraph>Here are some examples of how to use arithmetic operators in JavaScript:</Paragraph>
      <CodeBlock title="arithmetic.js" lang="JavaScript" codeString={varOne} />
      <Paragraph>Arithmetic operators can also be used with variables and expressions. For example:</Paragraph>
      <CodeBlock title="assign-variables.js" lang="JavaScript" codeString={varTwo} />
      <Paragraph>Arithmetic operators can be used to create complex mathematical expressions. For example:</Paragraph>
      <CodeBlock title="assign-variables.js" lang="JavaScript" codeString={varThree} />
      <Paragraph>Arithmetic operators are an essential part of JavaScript. They can be used to perform a wide variety of mathematical operations on numbers.</Paragraph>
    </>
  )
}

export default ArithmeticOperators
