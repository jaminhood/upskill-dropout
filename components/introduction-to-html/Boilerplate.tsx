import body_tag from "@/assets/body-tag.png"
import boilerplate from "@/assets/boilerplate.png"
import doctype_tag from "@/assets/doctype-tag.png"
import head_tag from "@/assets/head-tag.png"
import html_tag from "@/assets/html-tag.png"
import semantic_tag from "@/assets/semantic-tag.png"
import TagDesign from "@/components/shared/TagDesign"
import Image from "next/image"
import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Boilerplate = () => {
 return (
  <>
   <Heading title="HTML Boilerplate" />
   <Paragraph>
    An HTML boilerplate, often referred to as an HTML template or skeleton, is a starting point for creating web pages. {`It's`} a basic, standardized structure that you can use as a foundation when
    building web pages. The HTML boilerplate includes essential elements and tags that every web page should have, and it provides a consistent structure to ensure compatibility and proper rendering
    across different web browsers.
   </Paragraph>
   <Paragraph>{`Here's`} a simple example of an HTML boilerplate:</Paragraph>
   <Image src={boilerplate} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>{`<!DOCTYPE html>`}:</strong> This declaration defines the document type and version of HTML {`you're`} using. In modern web development, {`it's`} common to use HTML5, so {`you'll`}{" "}
    typically see <TagDesign title="!DOCTYPE html" /> at the beginning of your document.
   </Paragraph>
   <Image src={doctype_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>{`<html>`}:</strong> The opening and closing <TagDesign title="html" /> tags define the root element of your HTML document. Everything in your web page is enclosed within these tags.
   </Paragraph>
   <Image src={html_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>{`<head>`}:</strong> The <TagDesign title="head" /> section contains metadata and other non-visible information about the web page. Common elements found in the <TagDesign title="head" />{" "}
    section include:
   </Paragraph>
   <List>
    <li>
     <strong>
      <TagDesign title="meta" /> tags:
     </strong>{" "}
     These provide metadata like character encoding and viewport settings.
    </li>
    <li>
     <strong>
      <TagDesign title="title" /> tag:
     </strong>{" "}
     This sets the title of the web page, which appears in the {`browser's`} title bar or tab.
    </li>
    <li>
     <strong>External resource references:</strong> This is where you link to external resources like stylesheets (CSS) and JavaScript files.
    </li>
    <li>
     <strong>Inline styles and scripts:</strong> You can include CSS styles and JavaScript code directly within the <TagDesign title="head" /> section.
    </li>
   </List>
   <Image src={head_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>{`<body>`}:</strong> The <TagDesign title="body" /> section contains the visible content of your web page, such as text, images, links, and other elements. This is where you structure your{" "}
    {`page's`} layout and present its main content.
   </Paragraph>
   <Image src={body_tag} className="w-full object-cover mb-4" alt="" />
   <Paragraph>
    <strong>Structural HTML elements:</strong>
    Inside the <TagDesign title="body" /> section, you use HTML tags like <TagDesign title="header" />, <TagDesign title="nav" />, <TagDesign title="main" />, <TagDesign title="section" />,{" "}
    <TagDesign title="article" /> , and <TagDesign title="footer" /> to semantically structure your page. These elements help convey the meaning and organization of different sections of your content
    to both browsers and search engines.
   </Paragraph>
   <Image src={semantic_tag} className="w-full object-cover mb-4" alt="" />
  </>
 )
}

export default Boilerplate
