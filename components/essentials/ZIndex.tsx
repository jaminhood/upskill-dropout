import ContentBox from "../shared/ContentBox"
import List from "../shared/List"
import Paragraph from "../shared/Paragraph"

const ZIndex = () => {
 const codeString = `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      position: absolute;
    }

    .box1 {
      background-color: red;
      top: 50px;
      left: 50px;
      z-index: 2;
    }

    .box2 {
      background-color: blue;
      top: 75px;
      left: 75px;
      z-index: 1;
    }

    .box3 {
      background-color: green;
      top: 100px;
      left: 100px;
      /* Default z-index (0) */
    }
  </style>
</head>
<body>
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</body>
</html>
`

 return (
  <ContentBox title="z-index Concepts" codeString={codeString} codeTitle="index.html" codeLang="html">
   <Paragraph>
    CSS {`'z-index'`} is a property that controls the stacking order of elements on a web page. It is used to determine which element should appear on top when elements overlap in a web page layout.
    The higher the {`'z-index'`} value, the closer the element is to the top of the stacking order. Here's what you need to know about {`'z-index'`} along with some sample code:
   </Paragraph>
   <List>
    <li>
     <strong>The Stacking Context:</strong>
     <List>
      <li>Each element in a web page is part of a stacking context.</li>
      <li>The stacking context is a concept used to manage the stacking order of elements.</li>
      <li>Elements within the same stacking context are stacked relative to each other based on their {`'z-index'`} values.</li>
     </List>
    </li>
    <li>
     <strong>Understanding {`'z-index'`} Values:</strong>
     <List>
      <li>The {`'z-index'`} property accepts an integer value, where a higher number means the element should be stacked on top.</li>
      <li>Negative values can be used to place elements beneath others.</li>
     </List>
    </li>
    <li>
     <strong>Stacking Order Rules:</strong>
     <List>
      <li>Elements with a higher {`'z-index'`} value are stacked above elements with lower values.</li>
      <li>Elements with the same {`'z-index'`} are stacked in the order they appear in the HTML, with later elements on top.</li>
      <li>By default, elements have a {`'z-index'`} of auto, which means they are treated as if they have a value of 0.</li>
     </List>
    </li>
   </List>
   <Paragraph>In the Sample Code Below</Paragraph>
   <List>
    <li>
     {`'box1'`} has a {`'z-index'`} of 2, so it's stacked on top of the other two boxes.
    </li>
    <li>
     {`'box2'`} has a {`'z-index'`} of 1, making it appear beneath {`'box1'`} but above {`'box3'`}.
    </li>
    <li>
     {`'box3'`} has the default {`'z-index'`} (0), so it's stacked beneath the other two boxes.
    </li>
   </List>
  </ContentBox>
 )
}

export default ZIndex
