import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
 
 const Blog_create=()=>{
const [data,setdata] =  useState("")
ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName );
        return (
            <div className="App">
               
                <CKEditor
               
                    editor={ ClassicEditor }
                     
                    config={{
                        
                        toolbar: {
                            items: [
                                'heading', '|',
                                'alignment', '|',
                                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                                'link', '|',
                                'bulletedList', 'numberedList', 'todoList',
                              
                                'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                                'code', 'codeBlock', '|',
                                'insertTable', '|',
                                'outdent', 'indent', '|',
                                'uploadImage', 'blockQuote', '|',
                                'undo', 'redo'
                            ],
                            shouldNotGroupWhenFull: true
                        },
                        
                        ckfinder:{
                        uploadUrl:'http://localhost:8000/image/upload_image'
                    }}}
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setdata(data)
                        console.log(data)
                    } }
 
                />
                
              
                <div>{data}</div>
            </div>

        );
    }
export default Blog_create;
