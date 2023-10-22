import CodeBlock from "../code-block"
import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const Transform = () => {
 const translateString = `.box {
  transform: translate(50px, 20px);
}
`

 const rotateString = `.box {
  transform: rotate(45deg);
}
`

 const scaleString = `.box {
  transform: scale(1.5);
}
`

 const skewString = `.box {
  transform: skew(30deg, 20deg);
}
`

 const translate3dString = `.box {
  transform: translate3d(50px, 20px, -30px);
}
`

 const multipleTransformString = `.box {
  transform: translateX(50px) rotate(45deg) scale(1.2);
}
`

 return (
  <ContentBox title="Transform" codeString={multipleTransformString} codeTitle="style.css" codeLang="css">
   <Paragraph>
    CSS {`'transform'`} is a CSS property that allows you to apply various 2D and 3D transformations to HTML elements. These transformations include translating (moving), rotating, scaling, skewing,
    and more. Transformations can be used to manipulate an {`element's`} position, size, and orientation on the web page. The {`'transform'`} property is a powerful tool for creating interactive and
    visually appealing web interfaces. {`Here's`} an overview of some common transformations:
   </Paragraph>
   <Paragraph>
    <strong>Translate (Move):</strong>
   </Paragraph>
   <List>
    <li>
     <strong>translateX():</strong> Moves the element horizontally.
    </li>
    <li>
     <strong>translateY():</strong> Moves the element vertically.
    </li>
    <li>
     <strong>translate():</strong> Moves the element both horizontally and vertically.
    </li>
   </List>
   <CodeBlock title="translate" codeString={translateString} lang="css" />
   <Paragraph>
    <strong>Rotate:</strong>
   </Paragraph>
   <List>
    <li>
     <strong>rotate():</strong> Rotates the element by a specified angle in degrees.
    </li>
   </List>
   <CodeBlock title="rotate" codeString={rotateString} lang="css" />
   <Paragraph>
    <strong>Scale:</strong>
   </Paragraph>
   <List>
    <li>
     <strong>scaleX():</strong> Scales the element horizontally.
    </li>
    <li>
     <strong>scaleY():</strong> Scales the element vertically.
    </li>
    <li>
     <strong>scale():</strong> Scales the element in both dimensions.
    </li>
   </List>
   <CodeBlock title="scale" codeString={scaleString} lang="css" />
   <Paragraph>
    <strong>Skew:</strong>
   </Paragraph>
   <List>
    <li>
     <strong>skewX():</strong> Skews the element horizontally.
    </li>
    <li>
     <strong>skewY():</strong> Skews the element vertically.
    </li>
    <li>
     <strong>skew():</strong> Skews the element in both dimensions.
    </li>
   </List>
   <CodeBlock title="skew" codeString={skewString} lang="css" />
   <Paragraph>
    <strong>3D Transformations:</strong>
   </Paragraph>
   <Paragraph>
    You can use 3D transformations to manipulate elements in three-dimensional space. These include {`'translate3d()'`}, {`'rotate3d()'`}, and {`'scale3d()'`}, which allow you to apply transformations
    in 3D space.
   </Paragraph>
   <CodeBlock title="3D Transformations" codeString={translate3dString} lang="css" />
   <Paragraph>
    <strong>Multiple Transformations:</strong>
   </Paragraph>
   <Paragraph>
    You can combine multiple transformations in a single {`'transform'`} property by separating them with spaces. The order of transformations matters, as they are applied from left to right.
   </Paragraph>
  </ContentBox>
 )
}

export default Transform
