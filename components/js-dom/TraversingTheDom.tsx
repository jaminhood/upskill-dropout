import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"

const TraversingTheDom = () => {
	const varOne = `const parentElement = document.getElementById('parentContainer');

// Accessing parent node
const parentNode = newElement.parentNode;

// Accessing child nodes
const childNodes = parentElement.childNodes;

// Accessing first and last child
const firstChild = parentElement.firstChild;
const lastChild = parentElement.lastChild;

// Accessing next and previous sibling
const nextSibling = newElement.nextSibling;
const previousSibling = newElement.previousSibling;`

	return (
		<>
			<ContentBox
				title="Traversing the DOM"
				codeString={varOne}
				codeTitle="script.js"
				codeLang="javascript">
				<Paragraph>You can navigate through the DOM tree using parent, child, and sibling relationships.</Paragraph>
			</ContentBox>
		</>
	)
}

export default TraversingTheDom
