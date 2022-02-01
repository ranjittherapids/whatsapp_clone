// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { BlockPicker } from 'react-color';


// const  ColorPic =()=> {
//   const [color,setcolor] =useState(false)
// //     expanded: PropTypes.bool,
// //     onExpandEvent: PropTypes.func,
// //     onChange: PropTypes.func,
// //     currentState: PropTypes.object,
// //   })
 
 

   
//     //const { color } = this.props.currentState;
//     return (
//       <div
//         onClick={(event)=>event.stopPropagation()}
//       >
//         <BlockPicker color={color} onChangeComplete={()=>console.log("hello")} />
//       </div>
//     )
// }






import React,{Component} from 'react';
import { BlockPicker } from 'react-color';
import { SketchPicker } from 'react-color'

const  ColorPic=(props)=>{
  const onChange = (color) => {
    const { onChange } =props;
    onChange('color', color.hex);
  }
    const { color } =props.currentState;
    return (
      <div
       style={{marginTop:"10px"}}
      >
        <SketchPicker color={color} onChangeComplete={(e)=>onChange(e)} />
      </div>
    )
}
export default ColorPic