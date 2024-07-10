  import { useState } from "react";
import "./App.css";
 import { marked } from "marked";
function App() {
 
  const [value, setValue] = useState(
    `# H1 
## H2
### H3 
#### H4
##### H5
###### H6 

## Lists
* Item 1
* Item 2
* Item 3  

1. Item 1
2. Item 2
3. Item 3 

> Blockquote

![alt text](https://via.placeholder.com/150)

[Link](https://www.freecodecamp.org)

**Bold Text**

  \`code \`

  \`\`\`
  code block
  \`\`\`
  {
  "key": "value"
  }
  \`\`\`

  - list item
  - list item
  - list item
  "First line.\n 
  Second line."

  \`\`\`
  code block
  \`\`\`

  \`\`\`

     `)

 marked.setOptions({
  breaks: true
})

  return (
    <>
<textarea id="editor" onChange={(e) =>{setValue(e.target.value)}}
  value={value}>
</textarea>
  <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(value)}}></div>
    </>
  );
}

export default App;
