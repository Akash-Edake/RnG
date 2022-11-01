import React, {Suspense,lazy} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
// import Loading from './components/Loading';
const Lazyimg= lazy(()=>import('./components/Lazyimg'));
function App() {
  return (
   <>
   <BrowserRouter>
   <Suspense fallback='loading'>
    
    <Routes>
      <Route element={<Sidebar />} >
      <Route path='/' element={<Lazyimg />} /></Route>
    </Routes>
   
   </Suspense>
   </BrowserRouter>
  
  
 
   </>
  );
}


export default App;
