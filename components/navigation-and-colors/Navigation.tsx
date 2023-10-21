import CodeBlock from "../code-block"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Navigation = () => {
 const htmlString = `<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Navbar</title>
  <link rel="stylesheet" href="styles.css" />
 </head>
 <body>
  <nav class="navbar">
   <div class="menu-toggle" id="menu-toggle">
    <div class="icon" id="hamburger-icon">&#9776;</div>
    <div class="icon none" id="close-icon">&#10006;</div>
   </div>
   <ul class="nav-links" id="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
   </ul>
  </nav>
  <div class="content">
   <!-- Your page content goes here -->
  </div>
  <script src="script.js"></script>
 </body>
</html>
`

 const cssString = `body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
   }

   .navbar {
    background-color: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
   }

   .menu-toggle {
    display: none;
   }

   .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
   }

   .nav-links li {
    margin-right: 20px;
   }

   .nav-links a {
    text-decoration: none;
    color: #fff;
   }

   .icon {
    font-size: 24px;
    cursor: pointer;
   }

   .content {
    padding: 20px;
   }

   /* Media Query for Small Screens */
   @media (max-width: 768px) {
    .menu-toggle {
     display: block;
    }

    .nav-links {
     display: none;
     flex-direction: column;
     position: absolute;
     top: 60px;
     left: 0;
     background-color: #333;
     width: 100%;
     padding: 20px;
     z-index: 1;
    }

    .nav-links.active {
     display: flex;
    }

    .nav-links li {
     margin: 10px 0;
    }

    .none {
     display: none;
    }
   }`

 const jsString = `const menuToggle = document.getElementById("menu-toggle")
   const hamburgerIcon = document.getElementById("hamburger-icon")
   const closeIcon = document.getElementById("close-icon")
   const navLinks = document.getElementById("nav-links")

   menuToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
     navLinks.classList.remove("active")
     hamburgerIcon.style.display = "block"
     closeIcon.style.display = "none"
    } else {
     navLinks.classList.add("active")
     hamburgerIcon.style.display = "none"
     closeIcon.style.display = "block"
    }
   })`

 return (
  <>
   <Heading title="Responsive Navigation" />
   <Paragraph>
    Creating a responsive navigation bar with a hamburger icon (for small screens) and a closing icon (for opening the menu on small screens) can be achieved using HTML, CSS, and JavaScript.{" "}
    {`Here's`} a step-by-step guide to create one:
   </Paragraph>
   <Paragraph>
    <strong>HTML:</strong>
    <CodeBlock title="index.html" codeString={htmlString} lang="html" />
   </Paragraph>
   <Paragraph>
    <strong>CSS:</strong>
    <CodeBlock title="style.css" codeString={cssString} lang="css" />
   </Paragraph>
   <Paragraph>
    <strong>JavaScript:</strong>
    <CodeBlock title="app.js" codeString={jsString} lang="javascript" />
   </Paragraph>
   <Paragraph>In this code:</Paragraph>
   <List>
    <li>The HTML structure includes a navigation bar with a hamburger icon, a closing icon, and a list of navigation links.</li>
    <li>CSS styles provide the basic styling for the navigation bar and icons.</li>
    <li>JavaScript is used to toggle the display of the navigation links and icons when the hamburger or close icons are clicked.</li>
   </List>
  </>
 )
}

export default Navigation
