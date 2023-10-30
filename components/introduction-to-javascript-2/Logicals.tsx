import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Logicals = () => {
  const varOne = `// AND operator
var isOver18 = age >= 18;
var hasDriversLicense = hasDriversLicense === true;

// OR operator
var canVote = isOver18 || hasDriversLicense;

// NOT operator
var isNotRainy = !isRainy;`
  const varTwo = `if (canVote) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}`

  return (
    <>
      <Heading title="Logical Operators" />
      <Paragraph>Logical operators in JavaScript are used to combine Boolean expressions and produce a Boolean result. The three logical operators in JavaScript are:</Paragraph>
      <List>
        <li>
          <strong>AND (&&):</strong> The AND operator returns true if both operands are true, and false otherwise.
        </li>
        <li>
          <strong>OR (||):</strong> The OR operator returns true if either operand is true, and false otherwise.
        </li>
        <li>
          <strong>NOT (!):</strong> The NOT operator returns the opposite of the operand.
        </li>
      </List>
      <Paragraph>Logical operators can be used to create complex Boolean expressions, such as:</Paragraph>
      <CodeBlock title="logical.js" lang="javascript" codeString={varOne} />
      <Paragraph>
        Logical operators can also be used to control the flow of your program. For example, you can use an if statement to check the value of a Boolean expression and execute different code depending
        on the result.
      </Paragraph>
      <CodeBlock title="logical.js" lang="javascript" codeString={varTwo} />
      <Paragraph>Logical operators can be very powerful when used correctly. They can help you to write more concise and efficient code.</Paragraph>
    </>
  )
}

export default Logicals
