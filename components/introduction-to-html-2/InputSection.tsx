import img from "@/assets/input.png"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const InputSection = () => {
 return (
  <ContentBox title="Input" img={img}>
   <Paragraph>
    The <TagDesign title="input" /> element is used to create various types of form controls that allow users to input data on a web page. {`It's`} one of the fundamental form elements in HTML and can
    be used to create text fields, checkboxes, radio buttons, buttons, and more. The specific behavior and appearance of the <TagDesign title="input" /> element depend on its type attribute.
   </Paragraph>
   <Paragraph>
    {`Here's`} a basic example of how to use the <TagDesign title="input" /> element:
   </Paragraph>
   <List>
    <li>
     <strong>
      <TagDesign title="input" />:
     </strong>{" "}
     This is the opening tag of the <TagDesign title="audio" /> element. It serves as the container for the audio content.
    </li>
    <li>
     <strong>{`type="text"`}:</strong> The {`"type"`} attribute specifies the type of input control. In this case, {`it's`} set to {`"text"`} creating a text input field.
    </li>
    <li>
     <strong>{`name="username"`}:</strong> The {`"type"`} attribute assigns a name to the input field, which is used when submitting a form to identify the data associated with this input.
    </li>
    <li>
     <strong>{`placeholder="Enter your username"`}:</strong> The {`"type"`} attribute provides a hint or example text to the user, suggesting what they should enter into the field.
    </li>
   </List>
   <Paragraph>
    Common {`type`} values for the <TagDesign title="input" /> element include:
   </Paragraph>
   <List>
    <li>
     <strong>Text:</strong> Creates a single-line text input field.
    </li>
    <li>
     <strong>{`type="text"`}:</strong> The {`"type"`} attribute specifies the type of input control. In this case, {`it's`} set to {`"text"`} creating a text input field.
    </li>
    <li>
     <strong>{`name="username"`}:</strong> The {`"type"`} attribute assigns a name to the input field, which is used when submitting a form to identify the data associated with this input.
    </li>
    <li>
     <strong>{`placeholder="Enter your username"`}:</strong> The {`"type"`} attribute provides a hint or example text to the user, suggesting what they should enter into the field.
    </li>
   </List>
  </ContentBox>
 )
}

export default InputSection
