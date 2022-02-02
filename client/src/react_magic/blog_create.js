import React, { Component, useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "./draft.css";
import draftToHtml from "draftjs-to-html";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
const Blog_create = () => {
  const [editorState, setEditorState] = useState(() =>EditorState.createEmpty());
  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: false },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          colorPicker: { component: "" },
          blockType: {
            className: "demo-option-custom-wide",
            dropdownClassName: "demo-dropdown-custom",
          },
        }}
      />
      <div className="d-flex align-items-end">
        <Link to='/show'>
        <button
          onClick={() => {
            localStorage.setItem('blog',JSON.stringify(draftToHtml(convertToRaw(editorState.getCurrentContent()))))
            console.log(
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            );
          
          }}
        >
          submit
        </button>
        </Link>
      </div>

    </>
  );
};
export default Blog_create;
