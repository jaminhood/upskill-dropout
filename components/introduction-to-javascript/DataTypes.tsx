import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const DataTypes = () => {
  const varOne = `const name = "John Doe";
const greeting = 'Hello, world!';`
  const varTwo = `const age = 30;
const pi = 3.14159;`
  const varThree = `const isMarried = true;
const isHappy = false;`
  const varFour = `const favoriteFood = null;`
  const varFive = `let favoriteColor;`
  const varSix = `var person = {
  name: "John Doe",
  age: 30,
  isMarried: true
};`
  const varSeven = `var children = ["Alice", "Bob"];`
  const varString = `console.log( typeof name ); // String
console.log( typeof age ); // Number
console.log( typeof isMarried ); // Boolean
console.log( typeof favoriteFood ); // Null
console.log( typeof favoriteColor ); // Undefined
console.log( typeof person ); // Object
console.log( typeof children ); // Array`

  return (
    <>
      <Heading title="Data types" />
      <Paragraph>JavaScript has seven data types:</Paragraph>
      <Heading accentTitle="String" />
      <Paragraph>A string is a sequence of characters. Strings can be enclosed in either single or double quotes. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varOne} />
      <Heading accentTitle="Number" />
      <Paragraph>A number can be an integer or a {`floating-point`} number. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varTwo} />
      <Heading accentTitle="Boolean" />
      <Paragraph>A number can be an integer or a {`floating-point`} number. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varThree} />
      <Heading accentTitle="Null" />
      <Paragraph>
        The <SpecialKeyDesign title="null" /> value represents the absence of a value. For example:
      </Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varFour} />
      <Heading accentTitle="Undefined" />
      <Paragraph>
        The <SpecialKeyDesign title="undefined" /> value represents a variable that has not been assigned a value. For example:
      </Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varFive} />
      <Heading accentTitle="Object" />
      <Paragraph>An object is a collection of properties. Each property has a name and a value. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varSix} />
      <Heading accentTitle="Array" />
      <Paragraph>An array is an ordered list of items. Arrays can store any type of data, including strings, numbers, objects, and other arrays. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varSeven} />
      <Paragraph>You can use the typeof operator to check the data type of a variable. For example:</Paragraph>
      <CodeBlock title="datatypes.js" lang="javascript" codeString={varString} />
    </>
  )
}

export default DataTypes
