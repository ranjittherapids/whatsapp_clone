import React from 'react';
import DOMPurify from 'dompurify';
export default function showblog(props) {
    const createMarkup = (html) => {
      
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
  return <div> 
         <div className="preview" dangerouslySetInnerHTML={createMarkup(  JSON.parse(localStorage.getItem('blog')))}></div>
  </div>;
}
