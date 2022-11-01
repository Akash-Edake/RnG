// import './App.css';
// import Styled from './component/Styled';

import Sidebar from "./component/sidebarReact/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./component/sidebarReact/pages/Dashboard";
import About from "./component/sidebarReact/pages/About";
import Comment from "./component/sidebarReact/pages/Comment";
import Product from "./component/sidebarReact/pages/Product";

function App() {

  return (
    <>
      <div className="App">
        {/* styled component */}
        {/* <section>
             <Styled/>
        </section> */}

        {/* Sidebar Component */}
        <section className="d-flex container mt-4">
          <div className="me-4">
            <Sidebar />

          </div>
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
