import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const Variables = () => {
  const varOne = `var name = "John Doe";`
  const varTwo = `var age = 30;
var isMarried = true;
var children = ["Alice", "Bob"];`
  const varThree = `var favoriteFood;`

  return (
    <>
      <Heading title="Variables" />
      <Paragraph>
        Variables and data types are two of the most important concepts in JavaScript. Variables are used to store data, and data types define the type of data that can be stored in a variable.
      </Paragraph>
      <Paragraph>
        A variable is a named container that can store data. To declare a variable, you use the <SpecialKeyDesign title="var" /> keyword, followed by the variable name. For example:
      </Paragraph>
      <CodeBlock title="variables.js" lang="JavaScript" codeString={varOne} />
      <Paragraph>
        This declares a variable called <SpecialKeyDesign title="name" /> and assigns it the string value {`"John Doe"`}.
      </Paragraph>
      <Paragraph>Variables can store any type of data, including strings, numbers, objects, and arrays. To assign a value to a variable, you use the equals sign {`(=)`}. For example:</Paragraph>
      <CodeBlock title="assign-variables.js" lang="JavaScript" codeString={varTwo} />
      <Paragraph>
        These statements assign the values 30, true, and {`["Alice", "Bob"]`} to the variables <SpecialKeyDesign title="age" />, <SpecialKeyDesign title="isMarried" />, and{" "}
        <SpecialKeyDesign title="children" />, respectively.
      </Paragraph>
      <Paragraph>
        You can also declare a variable without assigning it a value. In this case, the variable is said to be <SpecialKeyDesign title="undefined" />. For example:
      </Paragraph>
      <CodeBlock title="assign-variables.js" lang="JavaScript" codeString={varThree} />
      <Paragraph>
        This declares a variable called <SpecialKeyDesign title="favoriteFood" /> without assigning it a value. You can then assign a value to the variable later in your code.
      </Paragraph>
      <Paragraph>
        Asides from the <SpecialKeyDesign title="var" /> keyword, Variables can also be decleared using the <SpecialKeyDesign title="let" /> and the <SpecialKeyDesign title="const" /> keywords
      </Paragraph>
      <Heading accentTitle="var" />
      <Paragraph>
        The <SpecialKeyDesign title="var" /> keyword is used to declare variables in JavaScript. It is the oldest and most common way to declare variables, but it is not recommended for new code.
      </Paragraph>
      <Paragraph>
        Variables declared with <SpecialKeyDesign title="var" /> have the following properties:
      </Paragraph>
      <List>
        <li>They are {`function-scoped`}, meaning that they can be accessed from anywhere within the function in which they are declared.</li>
        <li>They are hoisted, meaning that they are moved to the top of their scope before the code is executed.</li>
        <li>They can be redeclared and reassigned.</li>
      </List>
      <Heading accentTitle="let" />
      <Paragraph>
        The <SpecialKeyDesign title="let" /> keyword is a newer and more modern way to declare variables. It is similar to <SpecialKeyDesign title="var" />, but it has a few key differences:
      </Paragraph>
      <List>
        <li>
          Variables declared with <SpecialKeyDesign title="let" /> are block-scoped, meaning that they can only be accessed from within the block in which they are declared.
        </li>
        <li>They are not hoisted, meaning that they cannot be accessed before they are declared.</li>
        <li>They can be reassigned, but they cannot be redeclared within the same block.</li>
      </List>
      <Heading accentTitle="const" />
      <Paragraph>
        The <SpecialKeyDesign title="const" /> keyword is used to declare constant variables. Constant variables cannot be reassigned or redeclared.
      </Paragraph>
      <Paragraph>
        Variables declared with <SpecialKeyDesign title="const" /> have the following properties:
      </Paragraph>
      <List>
        <li>They are block-scoped.</li>
        <li>They are not hoisted.</li>
        <li>They cannot be reassigned or redeclared.</li>
      </List>
      <Paragraph>
        <strong>
          When to use <SpecialKeyDesign title="var" />, <SpecialKeyDesign title="let" />, and <SpecialKeyDesign title="const" />
        </strong>
      </Paragraph>
      <Paragraph>
        It is generally recommended to use <SpecialKeyDesign title="const" /> whenever possible, because it makes your code more predictable and less prone to errors. If you need to reassign a
        variable, you should use <SpecialKeyDesign title="let" />. <SpecialKeyDesign title="var" /> should only be used for legacy code or for special cases.
      </Paragraph>
      <Paragraph>Here are some examples of when to use each keyword:</Paragraph>
      <List>
        <li>
          Use <SpecialKeyDesign title="const" /> to declare constant variables, such as the value of <SpecialKeyDesign title="pi" /> or the name of a file.
        </li>
        <li>
          Use <SpecialKeyDesign title="let" /> to declare variables that will be reassigned, such as a counter variable in a loop.
        </li>
        <li>
          Use <SpecialKeyDesign title="var" /> for legacy code or for special cases, such as declaring global variables.
        </li>
      </List>
    </>
  )
}

export default Variables
