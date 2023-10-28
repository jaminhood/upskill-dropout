import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const IntroToJS = () => {
  return (
    <>
      <Heading title="What is JavaScript?" />
      <Paragraph>
        JavaScript (often abbreviated as JS) is a text-based programming language used both on the {`client-side`} and {`server-side`} that allows you to make web pages interactive. It is one of the
        three core technologies of World Wide Web content production, alongside HTML and CSS.
      </Paragraph>
      <Paragraph>JavaScript can be used to:</Paragraph>
      <List>
        <li>Add interactivity to web pages, such as validating forms, displaying dynamic content, and creating animations and games.</li>
        <li>Develop {`server-side`} applications, such as web servers and Node.js applications.</li>
        <li>Create mobile applications using frameworks such as React Native and Flutter.</li>
        <li>Build desktop applications using frameworks such as Electron.</li>
      </List>
      <Paragraph>
        JavaScript is a {`high-level`}, interpreted language, which means that it is easier to read and write than {`low-level`} languages such as C and C++. It is also a dynamic language, which means
        that variables can be changed on the fly without having to declare their type in advance.
      </Paragraph>
      <Paragraph>
        JavaScript is a very popular language, and it is used by millions of developers around the world. It is also a relatively easy language to learn, making it a good choice for beginners.
      </Paragraph>
      <Paragraph>Here are some examples of how JavaScript is used in the real world:</Paragraph>
      <List>
        <li>
          <strong>Google Maps:</strong> JavaScript is used to power the interactive features of Google Maps, such as zooming, panning, and dragging.
        </li>
        <li>
          <strong>Facebook:</strong> JavaScript is used to power many of the interactive features of Facebook, such as the Like button, the News Feed, and the Chat feature.
        </li>
        <li>
          <strong>Youtube:</strong> JavaScript is used to power the video player on YouTube, as well as the comments section and other interactive features.
        </li>
        <li>
          <strong>Amazon:</strong> JavaScript is used to power the search bar, the product pages, and the checkout process on Amazon.com.
        </li>
        <li>
          <strong>Wikipedia:</strong> JavaScript is used to power the interactive features of Wikipedia, such as the edit button, the table of contents, and the search bar.
        </li>
      </List>
    </>
  )
}

export default IntroToJS
