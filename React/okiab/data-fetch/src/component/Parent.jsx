import React, {useState} from 'react';
import Child from './Child';

const Parent=()=>{
   const [data, setData]= useState("");

   const ChildSendData = (data)=>{
          setData(data);
   }

return (
  <>
      <Child func={ChildSendData}/>
      <h1>{data}</h1>
  </>
)
}

export default Parent;