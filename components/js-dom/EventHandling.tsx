import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"

const EventHandling = () => {
	const varOne = `const buttonElement = document.getElementById('myButton');

// Adding a click event listener
buttonElement.addEventListener('click', function() {
    alert('Button Clicked!');
});

// Removing an event listener
function handleClick() {
    alert('Button Clicked!');
}

buttonElement.addEventListener('click', handleClick);

// Remove the event listener
buttonElement.removeEventListener('click', handleClick);`

	return (
		<>
			<ContentBox
				title="Event Handling"
				codeString={varOne}
				codeTitle="script.js"
				codeLang="javascript">
				<Paragraph>You can respond to user interactions or other events by attaching event listeners.</Paragraph>
			</ContentBox>
		</>
	)
}

export default EventHandling
