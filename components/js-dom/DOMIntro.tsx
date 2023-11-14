import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const DOMIntro = () => {
	const varOne = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>

    <h1 id="mainHeading">Hello, DOM!</h1>
    <button id="myButton">Click me</button>

    <script>
        // Access an element by ID
        const headingElement = document.getElementById('mainHeading');

        // Change text content
        headingElement.textContent = 'Modified Heading';

        // Create a new element
        const newElement = document.createElement('p');
        newElement.textContent = 'This is a new paragraph.';

        // Append the new element to the body
        document.body.appendChild(newElement);

        // Add a class to the heading
        headingElement.classList.add('highlight');

        // Add an event listener to the button
        const buttonElement = document.getElementById('myButton');
        buttonElement.addEventListener('click', function() {
            alert('Button clicked!');
        });
    </script>

</body>
</html>`

	return (
		<>
			<ContentBox
				title="What is the DOM?"
				codeString={varOne}
				codeTitle="index.html"
				codeLang="html">
				<Paragraph>
					The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the
					document, such as elements, attributes, text, etc. The DOM provides a way for scripts to interact with the content of a web page, dynamically updating and modifying its structure, style, and
					content.
				</Paragraph>
				<Paragraph>{`Here's`} a brief overview of the key concepts related to the DOM in JavaScript:</Paragraph>
				<Paragraph>
					<strong>Document Object Model (DOM):</strong>
				</Paragraph>
				<List>
					<li>The DOM is a programming interface for web documents.</li>
					<li>It provides a tree-like structure of objects, where each object corresponds to an element, attribute, text, etc.</li>
					<li>The top-level object is usually {`'document'`}, representing the entire HTML document.</li>
				</List>
				<Paragraph>
					<strong>Nodes:</strong>
				</Paragraph>
				<List>
					<li>Nodes are the fundamental building blocks of the DOM.</li>
					<li>There are several types of nodes, including elements, text nodes, attribute nodes, etc.</li>
				</List>
				<Paragraph>
					<strong>Elements:</strong>
				</Paragraph>
				<List>
					<li>Elements represent the HTML tags in a document.</li>
					<li>They can have attributes, children (other elements or text nodes), and properties.</li>
				</List>
				<Paragraph>
					<strong>Selectors:</strong>
				</Paragraph>
				<List>
					<li>Selectors help to locate and interact with specific elements in the DOM.</li>
					<li>
						Common methods include <SpecialKeyDesign title="getElementById" />, <SpecialKeyDesign title="getElementsByClassName" />, <SpecialKeyDesign title="getElementsByTagName" />,{" "}
						<SpecialKeyDesign title="querySelector" />, and <SpecialKeyDesign title="querySelectorAll" />.
					</li>
				</List>
				<Paragraph>
					<strong>Traversal:</strong>
				</Paragraph>
				<List>
					<li>
						DOM provides methods to navigate between nodes, such as <SpecialKeyDesign title="parentNode" />, <SpecialKeyDesign title="childNodes" />, <SpecialKeyDesign title="firstChild" />,{" "}
						<SpecialKeyDesign title="lastChild" />, <SpecialKeyDesign title="nextSibling" />, and <SpecialKeyDesign title="previousSibling" />.
					</li>
				</List>
				<Paragraph>
					<strong>Manipulation:</strong>
				</Paragraph>
				<List>
					<li>You can manipulate the content, structure, and style of a document using DOM methods.</li>
					<li>
						Common manipulation methods include <SpecialKeyDesign title="createElement" />, <SpecialKeyDesign title="appendChild" />, <SpecialKeyDesign title="removeChild" />,{" "}
						<SpecialKeyDesign title="setAttribute" />, <SpecialKeyDesign title="innerHTML" />, and <SpecialKeyDesign title="textContent" />.
					</li>
				</List>
				<Paragraph>
					<strong>Events:</strong>
				</Paragraph>
				<List>
					<li>Events are interactions or occurrences in the browser (e.g., clicks, keypresses).</li>
					<li>
						You can use event listeners to respond to these events, like <SpecialKeyDesign title="addEventListener" />.
					</li>
				</List>
				<Paragraph>
					<strong>Examples:</strong>
				</Paragraph>
				<List>
					<li>
						Creating an element: <SpecialKeyDesign title="const newElement = document.createElement('div');" />
					</li>
					<li>
						Appending an element: <SpecialKeyDesign title="parentElement.appendChild(newElement);" />
					</li>
					<li>
						Changing text content: <SpecialKeyDesign title="element.textContent = 'New Text';" />
					</li>
					<li>
						Adding an event listener: <SpecialKeyDesign title="element.addEventListener('click', myFunction);" />
					</li>
				</List>
				<Paragraph>{`Here's`} a simple example that combines some of these concepts:</Paragraph>
			</ContentBox>
		</>
	)
}

export default DOMIntro
