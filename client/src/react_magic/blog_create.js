import React, { useState, useEffect } from "react";
import Editor from "./editor";
export default function Blog_create() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
  
    useEffect(() => {
      setEditorLoaded(true);
    }, []);
  
    return (
      <div className="App">
        <h1>ckEditor 5</h1>
  
        <Editor
          name="description"
          onChange={(data) => {
             setData(data);
           
          }}
          editorLoaded={editorLoaded}
        />
  
        {JSON.stringify(data)}
      </div>
    );
  }
