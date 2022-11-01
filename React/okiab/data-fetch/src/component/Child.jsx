import React from 'react';

const Child=({func})=>{

return (
  <>
       <button onClick={()=>func("Hello")}>Click Me</button>
  </>       
)
}

export default Child;