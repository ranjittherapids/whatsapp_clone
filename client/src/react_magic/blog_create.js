import React, { Component, useEffect, useState } from 'react';
import {EditorState,convertToRaw,convertFromRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
 import './draft.css'
 import draftToHtml from 'draftjs-to-html';
 import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
 const Blog_create=()=>{
const [data,setdata] =  useState("")
const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
const [editorState1, setEditorState1] = useState(()=> EditorState.createEmpty())
 useEffect(()=>{
    if (data) {
        setEditorState1(()=>EditorState.createWithContent(convertFromRaw(data)))
      } else {
        setEditorState1(()=>EditorState.createEmpty())
      }
 },[data])


 
        return <>      
     <Editor 
        editorState={editorState}
        onChange={(e)=>{
            const contentState = editorState.getCurrentContent();   
            // const contentState = EditorState.getCurrentContent();
            // console.log('content state', convertToRaw(contentState));
            //setdata(e.blocks)
            setdata(convertToRaw(contentState))
            console.log(data,'data')
        }}
        onEditorStateChange={setEditorState}    
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: false },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          colorPicker: { component: "" },
          blockType: { className: 'demo-option-custom-wide', dropdownClassName: 'demo-dropdown-custom' },
        //   image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
      
 <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
       {/* // <Editor     editorState={editorState1} readOnly={true}
        /> */}
   


        </>
    }
export default Blog_create;
