// import './App.css';
import Styled from "./component/styledcomponent/Styled";

import Sidebar from "./component/sidebarReact/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./component/sidebarReact/pages/Dashboard";
import About from "./component/sidebarReact/pages/About";
import Comment from "./component/sidebarReact/pages/Comment";
import Product from "./component/sidebarReact/pages/Product";
import styled from "styled-components";

function App() {
  const Side = styled.div`
  background-color: rgb(106, 109, 112);
  height: 70vh;
  width: 15vw;
  text-align: justify;
  display: flex;
  justify-content: center;
  font-size: large;
  color: black;
  ` 
  return (
    <>
      <div className="App">
        {/* styled component */}
        {/* <section className="container mt-4 py-3 ps-0 border-bottom" style={{backgroundColor: "#6a6d70"}}>
             <Styled/>
        </section> */}

        {/* Sidebar Component */}
        <section className="d-flex container ps-0">
          <Side className="me-4 lh-lg">
            <Sidebar />

          </Side>
          <div className="ms-4 text-center">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </div>

        </section>
      </div>
    </>

  );
}

export default App;
