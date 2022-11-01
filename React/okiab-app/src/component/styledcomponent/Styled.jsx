import React from 'react'
import  styled  from 'styled-components';

const Styled = () => {

    const Title = styled.div`
    // background: black;
    display: flex;
    font-size: 2rem;
    font-weight: 900;
    margin-left: 5rem;
    color: #4a2148;
    transition : 3s;
    transform: rotate(0deg);
    &>span{
        color: red;
    }

    &:hover{
      color : purple;
      transform: rotate(360deg);
    }
  `;
return (
     <>
        <Title>Do what you LOVE <span>❤</span></Title>
     </>
)
}
export default Styled;