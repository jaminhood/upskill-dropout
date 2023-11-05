import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const FunctionDefinition = () => {
  const varOne = `// Function declaration
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}`
  const varTwo = `// Function expression
const greet = function(name) {
  console.log(\`Hello, \${name}!\`);
};`
  const varThree = `// Call the greet function
greet("Bard");`
  const varFour = `// Function that returns a value
function addNumbers(a, b) {
  return a + b;
}

// Call the addNumbers function and store the result in a variable
const result = addNumbers(1, 2);

// Log the result
console.log(result); // 3`
  const varFive = `// Arrow function
const greet = (name) => console.log(\`Hello, \${name}!\`);

// Call the greet arrow function
greet("Bard");`
  const varSix = `// Generator function
function* generateNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Async function
async function fetchData() {
  const response = await fetch("https://example.com/api/data");
  return response.json();
}

// Async generator function
async function* streamData() {
  const response = await fetch("https://example.com/api/stream");
  for await (const chunk of response.body) {
    yield chunk;
  }
}`
  const varSeven = `(function() {
  // Function body
})();`
  const varEight = `// Self-declared function to encapsulate code
(function() {
  const name = "Bard";
  console.log(\`Hello, \${name}!\`);
})();

// The name variable is not accessible outside of the self-declared function
console.log(name); // undefined`

  return (
    <>
      <Heading title="How to define functions in JavaScript" />
      <Paragraph>There are two ways to define functions in JavaScript: function declarations and function expressions.</Paragraph>
      <Heading accentTitle="Function declarations" />
      <Paragraph>
        Function declarations are the most common way to define functions in JavaScript. To define a function declaration, you use the <SpecialKeyDesign title="function" /> keyword, followed by the
        function name and a set of parentheses. Inside the parentheses, you can specify any input parameters that the function will take in.Next, you include a block of code inside curly braces that
        defines the instructions the function will execute when it is called.
      </Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varOne} />
      <Heading accentTitle="Function expressions" />
      <Paragraph>
        Function expressions are more flexible than function declarations. They can be defined anywhere in your code, and they can be passed as arguments to other functions. To define a function
        expression, you use the <SpecialKeyDesign title="function" /> keyword, followed by a set of parentheses, and then the function body.
      </Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varTwo} />
      <Heading accentTitle="How to call functions in JavaScript" />
      <Paragraph>
        To call a function in JavaScript, you simply use the function name followed by parentheses. If the function takes any parameters, you must pass those values to the function inside the
        parentheses.
      </Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varThree} />
      <Heading accentTitle="Returning values from functions" />
      <Paragraph>
        Functions can return values using the <SpecialKeyDesign title="return" /> keyword. The value that is returned from the function will be assigned to the variable that the function was called
        in.
      </Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varFour} />
      <Heading accentTitle="Arrow functions" />
      <Paragraph>
        Arrow functions are a concise way to write function expressions. To define an arrow function, you use the <SpecialKeyDesign title="=>" /> arrow symbol, followed by the function body.
      </Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varFive} />
      <Heading accentTitle="Self-Declared function" />
      <Paragraph>A self-declared function is a function that is defined and called immediately. It is also known as an immediately-invoked function expression (IIFE).</Paragraph>
      <Paragraph>To create a self-declared function, you use the following syntax:</Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varSeven} />
      <Paragraph>
        The <SpecialKeyDesign title="()" /> at the end of the function definition tells JavaScript to call the function immediately.
      </Paragraph>
      <Paragraph>Self-declared functions are useful for a number of reasons, including:</Paragraph>
      <List>
        <li>
          <strong>Encapsulation:</strong> Self-declared functions can be used to encapsulate code and prevent it from affecting the global scope.
        </li>
        <li>
          <strong>Scoping:</strong> Self-declared functions create their own scope, which means that variables defined inside the function are not accessible outside of the function.
        </li>
        <li>
          <strong>Modularity:</strong> Self-declared functions can be used to create modular code that can be easily reused and maintained.
        </li>
      </List>
      <Paragraph>Here is an example of how to use a self-declared function:</Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varEight} />
      <Heading accentTitle="Other Types Of Functions" />
      <Paragraph>There are a few other types of functions in JavaScript, in addition to the regular functions and arrow functions that I described earlier:</Paragraph>
      <List>
        <li>
          <strong>Generator functions:</strong> Generator functions are functions that can be paused and resumed. This makes them useful for implementing asynchronous operations, such as fetching data
          from a server or iterating over a large dataset.
        </li>
        <li>
          <strong>Async functions:</strong> Async functions are functions that can return a Promise object. Promises are objects that represent the eventual completion or failure of an asynchronous
          operation. Async functions can be used to simplify the code for writing asynchronous applications.
        </li>
        <li>
          <strong>Async generator functions:</strong> Async generator functions are a combination of generator functions and async functions. They can be used to implement asynchronous operations that
          can be paused and resumed, such as streaming data from a server or iterating over a large dataset asynchronously.
        </li>
      </List>
      <Paragraph>Here are some examples of how to use other types of functions in JavaScript:</Paragraph>
      <CodeBlock title="script.js" lang="javascript" codeString={varSix} />
    </>
  )
}

export default FunctionDefinition
