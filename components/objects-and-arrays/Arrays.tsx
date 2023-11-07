import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const Arrays = () => {
  const varOne = `const array = [];`
  const varTwo = `array.push(element);`
  const varThree = `array.pop();`
  const varFour = `const element = array[index];`
  const varFive = `const fruits = ["apple", "banana", "orange"];

// Add a new element to the array
fruits.push("pear");

// Remove an element from the array
fruits.pop();

// Access an element in the array
const firstFruit = fruits[0];

// Sort the array
fruits.sort();

// Search the array for a specific element
const index = fruits.indexOf("banana");

// Filter the array to only include elements that start with the letter "a"
const filteredFruits = fruits.filter((fruit) => fruit.startsWith("a"));

// Display the array
console.log(fruits); // ["apple", "orange"]`
  const varSix = `const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);
console.log(squares); // [1, 4, 9, 16, 25]`
  const varSeven = `const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]`
  const varEight = `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15`
  const varNine = `const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find((number) => number % 2 === 0);
console.log(evenNumber); // 2`

  return (
    <>
      <Heading title="what is an Array?." />
      <Paragraph>
        Arrays in JavaScript are objects that store a collection of values. Arrays can be of any length and can contain any type of data, including strings, numbers, objects, and other arrays. Arrays
        are zero-indexed, meaning that the first element in an array has index 0, the second element has index 1, and so on.
      </Paragraph>
      <Paragraph>To create an array in JavaScript, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varOne} lang="javascript" />
      <Paragraph>This will create an empty array. You can then add elements to the array using the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varTwo} lang="javascript" />
      <Paragraph>This will push the element onto the end of the array. You can also remove elements from the array using the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varThree} lang="javascript" />
      <Paragraph>This will remove the last element from the array.</Paragraph>
      <Paragraph>To access elements in an array, you can use the following syntax:</Paragraph>
      <CodeBlock title="script.js" codeString={varFour} lang="javascript" />
      <Paragraph>This will return the element at the specified index.</Paragraph>
      <Paragraph>Arrays also have a number of built-in methods that can be used to perform various operations on the array, such as sorting, searching, and filtering.</Paragraph>
      <Paragraph>Here is an example of how to use arrays in JavaScript:</Paragraph>
      <CodeBlock title="script.js" codeString={varFive} lang="javascript" />
      <Paragraph>
        Arrays are a very useful data structure in JavaScript and can be used for a variety of purposes, such as storing data for a table, storing items in a shopping cart, or storing the coordinates
        of a shape on a canvas.
      </Paragraph>
      <Heading accentTitle=".map()" />
      <Paragraph>
        The <SpecialKeyDesign title=".map()" /> and <SpecialKeyDesign title=".forEach()" /> methods are two of the most commonly used array methods in JavaScript. They are both used to iterate over
        the elements of an array, but they have different purposes.
      </Paragraph>
      <Paragraph>
        The <SpecialKeyDesign title=".map()" /> method is used to create a new array by applying a function to each element of the original array. The function that is passed to the{" "}
        <SpecialKeyDesign title=".map()" /> method is called the callback function. The callback function takes one argument, which is the current element of the array. The callback function can
        return any value, and the returned values are used to create the new array.
      </Paragraph>
      <Paragraph>
        Here is an example of how to use the <SpecialKeyDesign title=".map()" /> method:
      </Paragraph>
      <CodeBlock title="script.js" codeString={varSix} lang="javascript" />
      <Heading accentTitle=".forEach()" />
      <Paragraph>
        The <SpecialKeyDesign title=".forEach()" /> method is used to execute a function for each element of an array. The function that is passed to the <SpecialKeyDesign title=".forEach()" /> method
        is called the callback function. The callback function takes two arguments: the current element of the array and the index of the current element. The callback function does not return a
        value.
      </Paragraph>
      <Paragraph>
        Here is an example of how to use the <SpecialKeyDesign title=".forEach()" /> method:
      </Paragraph>
      <CodeBlock title="script.js" codeString={varSix} lang="javascript" />
      <Heading accentTitle=".filter()" />
      <Paragraph>
        The <SpecialKeyDesign title=".filter()" /> method is used to create a new array that contains only the elements of the original array that pass a certain test. The test is specified by a
        callback function that is passed to the <SpecialKeyDesign title=".filter()" /> method. The callback function takes one argument, which is the current element of the array. The callback
        function should return <SpecialKeyDesign title="true" /> if the element should be included in the new array, and <SpecialKeyDesign title="false" /> if it should not be included.
      </Paragraph>
      <Paragraph>
        Here is an example of how to use the <SpecialKeyDesign title=".filter()" /> method:
      </Paragraph>
      <CodeBlock title="script.js" codeString={varSeven} lang="javascript" />
      <Heading accentTitle=".reduce()" />
      <Paragraph>
        The <SpecialKeyDesign title=".reduce()" /> method is used to reduce an array to a single value. The <SpecialKeyDesign title=".reduce()" /> method takes two arguments: a callback function and
        an initial value. The callback function takes two arguments: the accumulator and the current element of the array. The accumulator is the value that is being reduced, and the current element
        is the element that is currently being processed. The callback function should return the new value of the accumulator.
      </Paragraph>
      <Paragraph>
        Here is an example of how to use the <SpecialKeyDesign title=".reduce()" /> method:
      </Paragraph>
      <CodeBlock title="script.js" codeString={varEight} lang="javascript" />
      <Heading accentTitle=".find()" />
      <Paragraph>
        The <SpecialKeyDesign title=".find()" /> method is used to find the first element in an array that passes a certain test. The test is specified by a callback function that is passed to the{" "}
        <SpecialKeyDesign title=".find()" /> method. The callback function takes one argument, which is the current element of the array. The callback function should return{" "}
        <SpecialKeyDesign title="true" /> if the element is the one that is being searched for, and <SpecialKeyDesign title="false" /> if it is not.
      </Paragraph>
      <Paragraph>
        Here is an example of how to use the <SpecialKeyDesign title=".find()" /> method:
      </Paragraph>
      <CodeBlock title="script.js" codeString={varNine} lang="javascript" />
    </>
  )
}

export default Arrays
