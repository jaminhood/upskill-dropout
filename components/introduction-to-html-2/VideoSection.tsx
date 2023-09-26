import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const VideoSection = () => {
 const codeString = `<video controls width="400" height="300">
 <source src="example.mp4" type="video/mp4" />
 <source src="example.webm" type="video/webm" />
 Your browser does not support the video element.
</video>`

 return (
  <ContentBox
   title="Video"
   codeString={codeString}
   codeTitle="video.html"
   codeLang="html">
   <Paragraph>
    The <TagDesign title="video" /> element is used to embed video content
    directly into a web page. It provides native support for video playback
    within modern web browsers, allowing you to include video files without the
    need for third-party plugins or additional software.
   </Paragraph>
   <Paragraph>
    {`Here's`} a basic example of how to use the <TagDesign title="video" />{" "}
    element:
   </Paragraph>
   <List>
    <li>
     <strong>
      <TagDesign title="video" />:
     </strong>{" "}
     This is the opening tag of the <TagDesign title="video" /> element to
     display video playback controls (such as play, pause, volume, and progress
     bar) to the user, allowing them to interact with the video.
    </li>
    <li>
     <strong>controls:</strong> This attribute is added to the{" "}
     <TagDesign title="video" /> element to display playback controls (such as
     play, pause, volume, and progress bar) to the user, allowing them to
     interact with the audio.
    </li>
    <li>
     <strong>width and height:</strong> These attributes specify the width and
     height of the video player in pixels.
    </li>
    <li>
     <strong>
      <TagDesign title="source" />:
     </strong>{" "}
     This is a child element of <TagDesign title="video" />. It is used to
     specify the video source file(s) and their types. In the example, it
     includes a source file named {`"example.mp4"`} and specifies the MIME type
     as {`"video/mp4."`}
    </li>
    <li>
     <strong>{`"Your browser does not support the audio element."`}:</strong>{" "}
     This is optional fallback content that is displayed to users whose browsers
     do not support the <TagDesign title="video" /> element or the specified
     video format.
    </li>
   </List>
  </ContentBox>
 )
}

export default VideoSection
