import React, { useState } from 'react';
import Blur from 'react-css-blur'
export default function BlurEffect() {
  const [blurOn,setblurOn]=  useState(false)
  const  blureffect = (effect) => {
    setblurOn(effect);
    }
  return <div>
      blur effect
      <Blur radius={blurOn==true ? '5px' : '0' } transition="400ms">
                    <h1
                        onMouseEnter={ () =>blureffect(true) }
                        onMouseLeave={ () =>blureffect(false) }>
                        Hover Me
                        radius: a size value in any CSS units (e.g. 5px). Default value: 0.
transition: a time value in any CSS units (e.g. 500ms). Default value: 0.

                    </h1>
                </Blur>
  </div>;
}
