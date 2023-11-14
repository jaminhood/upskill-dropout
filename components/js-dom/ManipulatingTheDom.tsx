import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"

const ManipulatingTheDom = () => {
	const varOne = `// Creating a new element
const newElement = document.createElement('div');

// Appending the new element to an existing element
const parentElement = document.getElementById('parentContainer');
parentElement.appendChild(newElement);

// Changing text content
newElement.textContent = 'This is the new content.';

// Removing an element
parentElement.removeChild(newElement);

// Modifying attributes
const imageElement = document.getElementById('myImage');
imageElement.setAttribute('src', 'new-image.jpg');`

	return (
		<>
			<ContentBox
				title="Manipulating the DOM"
				codeString={varOne}
				codeTitle="script.js"
				codeLang="javascript">
				<Paragraph>You can create, modify, and delete elements using various methods.</Paragraph>
			</ContentBox>
		</>
	)
}

export default ManipulatingTheDom
