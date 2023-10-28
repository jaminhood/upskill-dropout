import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const AsANewbie = () => {
  return (
    <>
      <Heading title="How do I approach JavaScript as a Newbie?" />
      <Paragraph>If you are new to JavaScript, here are some of the most important things to learn:</Paragraph>
      <List>
        <li>
          <strong>Variables and data types:</strong> JavaScript has different data types, such as strings, numbers, objects, and arrays. It is important to understand how to declare and use variables
          of different data types.
        </li>
        <li>
          <strong>Conditional logic:</strong> Conditional logic allows you to control the flow of your program based on certain conditions. For example, you can use an if statement to check if a
          variable is equal to a certain value, and then execute different code depending on the result.
        </li>
        <li>
          <strong>Loops:</strong> Loops allow you to execute a block of code multiple times. This can be useful for tasks such as iterating over an array or repeating a process until a certain
          condition is met.
        </li>
        <li>
          <strong>Functions:</strong> Functions allow you to group together related code and reuse it throughout your program. This can make your code more organized and easier to maintain.
        </li>
        <li>
          <strong>Objects and arrays:</strong> Objects are a fundamental data structure in JavaScript. They allow you to store and organize related data in a single unit. Arrays are another important
          data structure in JavaScript. They allow you to store a collection of items in a single list.
        </li>
        <li>
          <strong>Event listeners:</strong> Event listeners allow you to respond to events such as mouse clicks, key presses, and network requests. This is how you can make your web pages interactive.
        </li>
        <li>
          <strong>The DOM:</strong> The DOM (Document Object Model) is a {`tree-like`} representation of a web page. It allows you to access and manipulate the elements of a web page.
        </li>
      </List>
      <Paragraph>Once you have a good understanding of these basics, you can start to learn more advanced JavaScript concepts such as:</Paragraph>
      <List>
        <li>
          <strong>Prototypes and inheritance:</strong> Prototypes and inheritance allow you to reuse code and create new objects based on existing objects.
        </li>
        <li>
          <strong>Promises and async/await:</strong> Promises and async/await allow you to write asynchronous code in a more readable and maintainable way.
        </li>
        <li>
          <strong>Modules:</strong> Modules allow you to organize your code into reusable units.
        </li>
        <li>
          <strong>Popular JavaScript libraries and frameworks:</strong> There are many popular JavaScript libraries and frameworks available, such as React, Vue, and Angular. These libraries and
          frameworks can make it easier to develop complex web applications.
        </li>
      </List>
      <Paragraph>
        The best way to learn JavaScript is by doing. Try to build some simple JavaScript projects, such as a calculator, a {`to-do`} list, or a game. You can also find many JavaScript tutorials and
        resources online.
      </Paragraph>
      <Paragraph>Here are some tips for learning JavaScript:</Paragraph>
      <List>
        <li>
          <strong>Start with the basics:</strong> {`Don't`} try to learn everything about JavaScript at once. Start with the basics, such as variables, data types, conditional logic, loops, and
          functions.
        </li>
        <li>
          <strong>Use a good tutorial:</strong> There are many good JavaScript tutorials available online. Choose a tutorial that is well-written and easy to follow. Also UpSkill also helps you by
          guiding you throught a lass and assigning you to a mentor so make use of that opportunity.
        </li>
        <li>
          <strong>Practice regularly:</strong> The best way to learn JavaScript is by practicing. Try to write some JavaScript code every day.
        </li>
        <li>
          <strong>{`Don't`} be afraid to ask for help:</strong> If you get stuck, {`don't`} be afraid to ask for help from a friend, mentor, or online community.
        </li>
      </List>
    </>
  )
}

export default AsANewbie
