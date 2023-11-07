import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const Objects = () => {
  const varOne = `const object = {};`
  const varTwo = `object.property = value;`
  const varThree = `const value = object.property;`
  const varFour = `object.method = function() {
  // ...
};`
  const varFive = `object.method();`
  const varSix = `const user = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
};

// Add a new property to the object
user.email = "john.doe@example.com";

// Access a property of the object
const name = user.name;

// Call a method on the object
user.greet();

// Output:
// "Hello, my name is John Doe."`

  return (
    <>
      <Heading title="what are Objects?." />
      <Paragraph>
        Objects in JavaScript are collections of properties, where each property is a key-value pair. The key can be a string or a symbol, and the value can be any type of data, including other
        objects.
      </Paragraph>
      <Paragraph>To create an object in JavaScript, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varOne} lang="javascript" />
      <Paragraph>This will create an empty object. You can then add properties to the object using the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varTwo} lang="javascript" />
      <Paragraph>To access a property of an object, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varThree} lang="javascript" />
      <Paragraph>Objects can also have methods, which are functions that are associated with the object. To add a method to an object, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varFour} lang="javascript" />
      <Paragraph>To call a method on an object, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varFive} lang="javascript" />
      <Paragraph>Objects are a very powerful data structure in JavaScript and can be used to represent a wide variety of things, such as users, products, or even entire web applications.</Paragraph>
      <Paragraph>Here is an example of how to use objects in JavaScript:</Paragraph>
      <CodeBlock title="script.js" codeString={varSix} lang="javascript" />
      <Paragraph>
        This example creates an object to represent a user. The object has three properties: <SpecialKeyDesign title="name" />, <SpecialKeyDesign title="age" />, and{" "}
        <SpecialKeyDesign title="occupation" />. The object also has a method called <SpecialKeyDesign title="greet()" /> which simply logs a greeting to the console.
      </Paragraph>
      <Paragraph>
        Objects are a very important part of JavaScript and are used in almost every JavaScript application. By understanding how to use objects, you can write more efficient and reusable code.
      </Paragraph>
    </>
  )
}

export default Objects
