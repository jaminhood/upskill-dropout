import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import SpecialKeyDesign from "../shared/SpecialKeyDesign"

const StylingTheDom = () => {
	const varOne = `// Directly modifying style
newElement.style.color = 'blue';
newElement.style.fontSize = '16px';

// Adding a class
newElement.classList.add('highlight');

// Removing a class
newElement.classList.remove('highlight');`

	return (
		<>
			<ContentBox
				title="Styling the DOM"
				codeString={varOne}
				codeTitle="script.js"
				codeLang="javascript">
				<Paragraph>
					You can manipulate styles either by directly modifying the <SpecialKeyDesign title="style" /> property or by adding/removing CSS classes.
				</Paragraph>
			</ContentBox>
		</>
	)
}

export default StylingTheDom
