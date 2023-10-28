import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const WhatMakesItDifferent = () => {
  return (
    <>
      <Heading title="What makes JavaScript Different From Other Languages?" />
      <Paragraph>JavaScript is different from other languages in a number of ways, including:</Paragraph>
      <List>
        <li>
          <strong>Client-side vs. server-side:</strong> JavaScript is primarily a client-side language, meaning that it is executed in the {`user's`} web browser. This makes it ideal for adding
          interactivity to web pages. However, JavaScript can also be used on the server-side using frameworks such as Node.js.
        </li>
        <li>
          <strong>Interpreted vs. compiled:</strong> JavaScript is an interpreted language, meaning that it is executed directly by the web browser without having to be compiled first. This makes it
          faster to develop and debug JavaScript applications.
        </li>
        <li>
          <strong>Dynamic typing:</strong> JavaScript is a dynamically typed language, meaning that variables do not have to be declared with a specific type in advance. This can make JavaScript code
          more concise and flexible, but it can also lead to errors.
        </li>
        <li>
          <strong>{`Event-driven`} programming:</strong> JavaScript is {`event-driven`}, meaning that code is executed in response to events such as mouse clicks, key presses, and network requests.
          This makes JavaScript ideal for creating dynamic and interactive applications.
        </li>
      </List>
      <Paragraph>Here are some other key features of JavaScript:</Paragraph>
      <List>
        <li>
          <strong>Asynchronous programming:</strong> JavaScript supports asynchronous programming, which allows multiple tasks to be executed simultaneously without blocking each other. This is
          essential for creating responsive web applications.
        </li>
        <li>
          <strong>Garbage collection:</strong> JavaScript performs automatic garbage collection, which means that developers do not have to worry about manually managing memory.
        </li>
        <li>
          <strong>{`Prototype-based`} inheritance:</strong> JavaScript uses {`prototype-based`} inheritance, which is a more flexible and powerful inheritance model than the class-based inheritance
          model used by many other languages.
        </li>
        <li>
          <strong>Large ecosystem:</strong> JavaScript has a large and active community, which has created a wide range of libraries and frameworks for developing web applications.
        </li>
      </List>
    </>
  )
}

export default WhatMakesItDifferent
