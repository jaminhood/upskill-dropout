import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Intro = () => {
 return (
  <>
   <Heading title="What is HTML?" />
   <p className="text-[.9rem] leading-loose first-letter:text-[400%] first-letter:pr-2 first-letter:leading-[1] first-letter:float-left mb-4">
    HTML, which stands for HyperText Markup Language, is the fundamental language of the World Wide Web. It serves as the backbone for creating web pages and structuring content on the internet. HTML
    uses a system of markup tags and attributes to define the structure and presentation of web documents.
   </p>
   <Paragraph>
    HTML uses a system of tags and attributes to define the structure and content of a web page. These tags are enclosed in angle brackets {`(<>)`}, and they describe various elements on a web page,
    such as headings, paragraphs, lists, images, links, and more. Attributes provide additional information about elements and can be used to control their behavior or appearance.
   </Paragraph>
   <Paragraph>{`Here's`} a brief introduction to HTML:</Paragraph>
   <List>
    <li>
     <strong>Markup Language:</strong> HTML is a markup language, not a programming language. It consists of a set of instructions (markup tags) that tell web browsers how to display content.
    </li>
    <li>
     <strong>Text-Based:</strong> HTML documents are plain text files with a specific structure. You can create and edit HTML files using a simple text editor.
    </li>
    <li>
     <strong>Structure:</strong> HTML is all about structuring content. It allows you to define headings, paragraphs, lists, tables, and more. This structuring helps browsers and search engines
     understand the {`content's`} hierarchy and meaning.
    </li>
    <li>
     <strong>Hyperlinks:</strong> HTML enables you to create hyperlinks, allowing users to navigate between web pages. Links can point to other web pages, documents, images, or even email addresses.
    </li>
    <li>
     <strong>Images and Multimedia:</strong> HTML supports the inclusion of images, audio, video, and other multimedia elements in web pages.
    </li>
    <li>
     <strong>Forms:</strong> HTML provides form elements like text fields, checkboxes, radio buttons, and submit buttons for gathering user input.
    </li>
    <li>
     <strong>Compatibility:</strong> HTML is designed to work across different web browsers, ensuring that web pages render consistently for users regardless of the browser they use.
    </li>
    <li>
     <strong>Versioning:</strong> HTML has evolved over the years, with HTML5 being the latest major version as of my last knowledge update in September 2021. HTML5 introduced many new elements and
     features to enhance web development.
    </li>
    <li>
     <strong>Cascading Style Sheets (CSS):</strong> While HTML defines the structure of a web page, styling is typically accomplished using CSS. CSS allows you to control the appearance and layout of
     HTML elements.
    </li>
    <li>
     <strong>JavaScript:</strong> For adding interactivity and dynamic behavior to web pages, JavaScript is often used in conjunction with HTML and CSS.
    </li>
   </List>
   <Paragraph>
    HTML is the cornerstone of web development. It provides the foundation for creating websites, web applications, and digital content accessible on the internet. Understanding HTML is an essential
    skill for anyone involved in web design or development.
   </Paragraph>
  </>
 )
}

export default Intro
