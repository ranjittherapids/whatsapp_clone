// import React, { useEffect, useRef } from "react";
 
// function Editor({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef();
//   const { CKEditor, ClassicEditor } = editorRef.current || {};

//   useEffect(() => {
//     editorRef.current = {
//       CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,  
//       ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
//     };
//   }, []);
 
//   return (
//     <div>
//       {editorLoaded ? (
//         <CKEditor
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           data={value}
//           config={ {
//             plugins: [ CKFinder],
//             toolbar: [ 'imageUpload' ],
//             ckfinder: {
//                 uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
//             }
//         } }

//           onChange={(event, editor) => {
//             const data = editor.getData();
//             // console.log({ event, editor, data })
//             onChange(data);
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </div>
//   );
// }

// export default Editor;
