import img from "@/assets/audio.png"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"
import TagDesign from "../shared/TagDesign"

const AudioSection = () => {
 return (
  <ContentBox title="Audio" img={img}>
   <Paragraph>
    The <TagDesign title="audio" /> element is used to embed audio content, such as music or sound clips, directly into a web page. This element provides native support for audio playback within
    modern web browsers, allowing you to include audio files without the need for third-party plugins or additional software.
   </Paragraph>
   <Paragraph>
    {`Here's`} a basic example of how to use the <TagDesign title="audio" /> element:
   </Paragraph>
   <List>
    <li>
     <strong>
      <TagDesign title="audio" />:
     </strong>{" "}
     This is the opening tag of the <TagDesign title="audio" /> element. It serves as the container for the audio content.
    </li>
    <li>
     <strong>controls:</strong> This attribute is added to the <TagDesign title="audio" /> element to display playback controls (such as play, pause, volume, and progress bar) to the user, allowing
     them to interact with the audio.
    </li>
    <li>
     <strong>autoplay:</strong> You can use the {`"autoplay"`} attribute with the <TagDesign title="audio" /> element to automatically start playing the audio as soon as the web page loads. This
     attribute is a boolean attribute, which means it {`doesn't`} require a value, you simply include it in the <TagDesign title="audio" /> tag to enable autoplay.
    </li>
    <li>
     <strong>muted:</strong> This attribute ensures that the audio starts automatically but with the sound muted. Users can then choose to unmute it if they wish to listen to the audio.
    </li>
    <li>
     <strong>
      <TagDesign title="source" />:
     </strong>{" "}
     This is a child element of <TagDesign title="audio" /> . It is used to specify the audio source file(s) and their types. In the example, it includes a source file named {`"example.mp3"`} and
     specifies the MIME type as {`"audio/mpeg."`}
    </li>
    <li>
     <strong>{`"Your browser does not support the audio element."`}:</strong> This is optional fallback content that is displayed to users whose browsers do not support the <TagDesign title="audio" />{" "}
     element or the specified audio format.
    </li>
   </List>
  </ContentBox>
 )
}

export default AudioSection
