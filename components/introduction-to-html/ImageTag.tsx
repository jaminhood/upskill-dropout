import TagDesign from "@/components/shared/TagDesign"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import CodeBlock from "../code-block"

const ImageTag = () => {
 const imgCode = `<img src="image.jpg" alt="Description of the image" />`

 return (
  <>
   <Heading title="HTML Image" />
   <Paragraph>
    In HTML, the <TagDesign title="img" /> tag is used to display images on a
    web page. Images are essential for adding visual content to websites and
    enhancing the overall user experience. The <TagDesign title="img" /> tag
    requires the src (source) attribute, which specifies the image {`file's`}{" "}
    location, and it is typically used in combination with optional attributes
    for controlling image size, alt text, and more. {`Here's`} a basic example
    of how to use the <TagDesign title="img" /> tag:
   </Paragraph>
   <CodeBlock title="dl tag" codeString={imgCode} lang="html" />
   <Paragraph>In this example:</Paragraph>
   <List>
    <li>
     <strong>src</strong> is the attribute that points to the image file you
     want to display. It can be a relative or absolute URL.
    </li>
    <li>
     <strong>alt</strong> is the attribute that provides alternative text for
     the image. This text is displayed if the image cannot be loaded or by
     screen readers for accessibility purposes. It should describe the{" "}
     {`image's`} content or purpose.
    </li>
   </List>
  </>
 )
}

export default ImageTag
