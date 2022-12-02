import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostData from './components/PostData';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostData/>} />
        <Route path='/createpost' element={<CreatePost />} />

      </Routes>
    </>
  );
}

export default App;
