import React from 'react'
import styled from 'styled-components';

const Styled = () => {

    const Title = styled.div`
    display: flex;
    font-size: 5rem;
    font-weight: bold;
    justify-content: center;
    margin-top: 20%;
    color: purple;
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