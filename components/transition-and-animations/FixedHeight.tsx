import Heading from "../shared/Heading"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const FixedHeight = () => {
 return (
  <>
   <Heading title="Fixed Height" />
   <Paragraph>Designers should avoid using default or fixed heights in their designs for several reasons:</Paragraph>
   <Paragraph>
    <strong>Content Variability:</strong> Web content is dynamic, and the amount of content in an element may vary. If you set a fixed height, it can lead to content overflowing or getting cut off.
    This can negatively impact the user experience, especially when the content is text-heavy, and users may need to scroll excessively.
   </Paragraph>
   <Paragraph>
    <strong>Responsive Design:</strong> With the proliferation of various devices with different screen sizes and orientations, responsive design has become crucial. Fixed heights can make it
    difficult to adapt your design to different screen sizes. Responsive designs need to be flexible to accommodate varying content and screen sizes.
   </Paragraph>
   <Paragraph>
    <strong>Accessibility:</strong> Web accessibility is important for ensuring that all users, including those with disabilities, can access and use your website. Fixed heights can make it
    challenging for assistive technologies like screen readers to present content properly to users who may rely on these tools.
   </Paragraph>
   <Paragraph>
    <strong>Search Engine Optimization (SEO):</strong> Search engines crawl web pages to index and rank content. Fixed heights can hide or obscure content from search engines, potentially affecting
    your {`site's`} search engine rankings and visibility in search results.
   </Paragraph>
   <Paragraph>
    <strong>Print Styles:</strong> When a user wants to print a web page, fixed heights can lead to content being cut off or not displaying as expected on the printed page. Designers often need to
    create print stylesheets that adapt content for print, and fixed heights can make this more challenging.
   </Paragraph>
   <Paragraph>
    <strong>Content Growth:</strong> Over time, the content on a website may change or grow. Fixed heights can become a maintenance issue, as designers and developers might need to constantly adjust
    the heights to accommodate new content, which can be time-consuming.
   </Paragraph>
   <Paragraph>
    <strong>User Experience:</strong> Fixed heights can make it difficult for users to read and interact with content, particularly when using different devices or screen sizes. A design that adjusts
    to the {`content's`} needs often provides a better user experience.
   </Paragraph>
   <Paragraph>Instead of using fixed heights, designers should consider using techniques that allow for flexible, fluid layouts. These can include:</Paragraph>
   <List>
    <li>Using percentage-based heights.</li>
    <li>Using {`'min-height'`} to ensure elements have a minimum height.</li>
    <li>Utilizing CSS Flexbox or CSS Grid layouts, which provide responsive and adaptable designs.</li>
    <li>Employing media queries to adjust layouts and styles for different screen sizes.</li>
    <li>Embracing a mobile-first design approach, which focuses on designing for smaller screens and progressively enhancing for larger screens.</li>
   </List>
  </>
 )
}

export default FixedHeight
