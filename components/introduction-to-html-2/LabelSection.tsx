import img from "@/assets/label.png"
import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"
import List from "../shared/List"

const LabelSection = () => {
 return (
  <ContentBox title="Label" img={img}>
  <Paragraph>
   The <TagDesign title="label" /> element is used to associate a text label with an HTML form control, such as an <TagDesign title="input" /> element. The primary purpose of the <TagDesign title="label" /> element is to improve the accessibility and usability of web forms by providing a clear and clickable label for the associated input element. It helps users understand the purpose of the input and improves the form's functionality, especially for users of assistive technologies like screen readers.
  </Paragraph>
  <Paragraph>
   {`Here's`} a basic example of how to use the <TagDesign title="input" /> element:
  </Paragraph>
  <List>
   <li>
    <strong>
     <TagDesign title="label" />:
    </strong>{" "}
    This is the opening tag of the <TagDesign title="label" /> element. It contains the text {`"Username:"`}, which serves as the label for the input field.
   </li>
   <li>
    <strong>{`for="username"`}:</strong> The {`"for"`} attribute is used to associate the label with a specific input element. In this case, it is associated with an <TagDesign title="input" /> element with the id attribute set to {`"username."`}
   </li>
  </List>
  <Paragraph>
   Key benefits for using the <TagDesign title="label" /> element:
  </Paragraph>
  <List>
   <li>
    <strong>Accessibility:</strong> When you associate a label with an input element using the {`for`} attribute and matching {`"id"`}, it provides a clear and programmatically linked label for screen readers and other assistive technologies, making forms more accessible to users with disabilities.
   </li>
   <li>
    <strong>Usability:</strong> Labels make it easier for all users to understand the purpose of form fields, reducing confusion and errors when filling out forms.
   </li>
   <li>
    <strong>Clickable Labels:</strong> By associating the label with the input element, users can click on the label text to activate or focus on the associated input field, which enhances the user experience.
   </li>
   <li>
    <strong>Improved Styling:</strong> Labels can be styled using CSS, allowing for customization of their appearance and layout.
   </li>
  </List>
  </ContentBox>
 )
}

export default LabelSection
