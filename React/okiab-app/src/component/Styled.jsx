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
    &:hover{
      color : purple;
      transform: rotate(360deg);
    }
  `;
return (
     <>
        <Title>Hello World</Title>
     </>
)
}
export default Styled;