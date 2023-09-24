import img from "@/assets/form.png"
import ContentBox from "../shared/ContentBox"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"
import List from "../shared/List"

const FormSection = () => {
 return (
    <ContentBox title="Form" img={img}>
    <Paragraph>
     The <TagDesign title="form" /> element is used to create a container that holds a collection of interactive form controls and allows users to submit data to a web server. Forms are a fundamental part of web applications and websites, as they enable users to input information, make selections, and interact with web services. {`Here's`} an overview of how the <TagDesign title="form" /> element works:
    </Paragraph>
    <List>
     <li><strong>Form Controls:</strong> Inside a <TagDesign title="form" /> element, you can include various types of form controls, such as text input fields, radio buttons, checkboxes, select menus, buttons, and more. These controls are used to gather user input.</li>
     <li><strong>Form Submission:</strong> When a user submits a form (usually by clicking a {`"Submit"`} button), the data entered into the form controls is sent to a web server for processing. The server can then respond to the {`user's`} input accordingly, such as saving the data to a database, processing it, or generating a response page.</li>
    </List>
    <Paragraph>
     Key benefits for using the <TagDesign title="label" /> element:
    </Paragraph>
    <List>
     <li>
      The <TagDesign title="form" /> element defines a form that collects information from users.
     </li>
     <li>
     The <strong>{`"action"`}</strong> attribute specifies the URL where the form data will be sent for processing (in this case, {`"process.php"`}).
     </li>
     <li>
     The <strong>{`"method"`}</strong> attribute specifies the HTTP method to use when sending the data (usually {`"post"`} or {`"get"`}).
     </li>
     <li>
     Various form controls like text input fields, an email input field, and a textarea for message input are included within the form.
     </li>
     <li>
     The <TagDesign title="label" /> elements provide labels for the form controls, enhancing accessibility and usability.
     </li>
     <li>
     The <strong>{`"Submit"`}</strong> button is created using an <TagDesign title="input" /> element with <strong>{`type="submit"`}</strong>.
     </li>
    </List>
    </ContentBox>
 )
}

export default FormSection
