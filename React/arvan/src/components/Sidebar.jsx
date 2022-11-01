import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
function Sidebar() {
 const Div=styled.span`
 &>span{
    display:block;
 }
 `
  return (
    <>
    <div style={{display:'flex'}}>
   <Div>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    <span>home</span>
    </Div>     
    
    </div>
    <Outlet />
    </>
  )
}

export default Sidebar