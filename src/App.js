import React from "react";
import { useState } from "react";
import { marked } from "marked";
import "./App.css";
//a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
function App() {
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.mywebsite.com)

  \` code \`

  \`\`\`
   {
    "code":"codeValue"
   }
  \`\`\`

  - Rajeev
  - Kumar
  - Upadhyay

  > quote

  ![alt text](https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg)
  
  **bold**
  `);

  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
