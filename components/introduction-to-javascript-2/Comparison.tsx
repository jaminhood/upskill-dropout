import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Comparison = () => {
  const varOne = `// Equality
var isEqual = 1 === 1; // isEqual is true

// Strict equality
var isStrictlyEqual = 1 === "1"; // isStrictlyEqual is false

// Inequality
var isNotEqual = 2 !== 3; // isNotEqual is true

// Strict inequality
var isStrictlyNotEqual = 1 !== "1"; // isStrictlyNotEqual is true

// Greater than
var isGreaterThan = 5 > 3; // isGreaterThan is true

// Less than
var isLessThan = 2 < 3; // isLessThan is true

// Greater than or equal to
var isGreaterThanOrEqualTo = 5 >= 3; // isGreaterThanOrEqualTo is true

// Less than or equal to
var isLessThanOrEqualTo = 2 <= 3; // isLessThanOrEqualTo is true`
  const varTwo = `// Variables
var a = 10;
var b = 5;

// Expression
var isGreaterThanOrEqualTo = a >= b; // isGreaterThanOrEqualTo is true`
  const varThree = `if (a > b) {
  // Do something if a is greater than b
} else {
  // Do something if a is not greater than b
}`

  return (
    <>
      <Heading title="Comparison Operators" />
      <Paragraph>Comparison operators in JavaScript are used to compare two values and return a Boolean result {`(true or false)`}. The most common comparison operators are:</Paragraph>
      <List>
        <li>
          <strong>Equality (==):</strong> Compares two values for equality.
        </li>
        <li>
          <strong>Strict equality (===):</strong> Compares two values for strict equality, meaning that they must be the same type and value.
        </li>
        <li>
          <strong>Inequality (!=):</strong> Compares two values for inequality.
        </li>
        <li>
          <strong>Strict inequality (!==):</strong> Compares two values for strict inequality, meaning that they must be of different types or values.
        </li>
        <li>
          <strong>Greater than {`(>)`}:</strong> Compares two values to see if the first value is greater than the second value.
        </li>
        <li>
          <strong>Less than {`(<)`}:</strong> Compares two values to see if the first value is less than the second value.
        </li>
        <li>
          <strong>Greater than or equal to {`(>=)`}:</strong> Compares two values to see if the first value is greater than or equal to the second value.
        </li>
        <li>
          <strong>Less than or equal to {`(<=)`}:</strong> Compares two values to see if the first value is less than or equal to the second value.
        </li>
      </List>
      <Paragraph>Here are some examples of how to use comparison operators in JavaScript:</Paragraph>
      <CodeBlock title="comparison.js" lang="javascript" codeString={varOne} />
      <Paragraph>Comparison operators can also be used with variables and expressions. For example:</Paragraph>
      <CodeBlock title="compare-variables.js" lang="javascript" codeString={varTwo} />
      <Paragraph>Comparison operators can be used to create complex conditional statements. For example:</Paragraph>
      <CodeBlock title="complex-variables.js" lang="javascript" codeString={varThree} />
    </>
  )
}

export default Comparison
