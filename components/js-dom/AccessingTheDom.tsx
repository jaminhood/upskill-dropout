import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const AccessingTheDom = () => {
	const varOne = `// By ID
const elementById = document.getElementById('myElementId');

// By class name
const elementsByClass = document.getElementsByClassName('myClassName');

// By tag name
const elementsByTag = document.getElementsByTagName('p');

// Using querySelector (selects the first matching element)
const elementByQuery = document.querySelector('#myElementId');

// Using querySelectorAll (selects all matching elements)
const elementsByQueryAll = document.querySelectorAll('.myClassName');`

	return (
		<>
			<ContentBox
				title="Accessing the DOM"
				codeString={varOne}
				codeTitle="script.js"
				codeLang="javascript">
				<Paragraph>
					You can access elements using various methods, such as <SpecialKeyDesign title="getElementById" />, <SpecialKeyDesign title="getElementsByClassName" />,{" "}
					<SpecialKeyDesign title="getElementsByTagName" />, <SpecialKeyDesign title="querySelector" />, and <SpecialKeyDesign title="querySelectorAll" /> content.
				</Paragraph>
			</ContentBox>
		</>
	)
}

export default AccessingTheDom
