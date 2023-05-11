import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import Flow from './views/Flow';
import Story from './views/Story';
import PostStory from './views/PostStory';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='flow' element={<Flow /> } />
          <Route path='story/:id' element={<Story /> } />
          <Route path='post-story' element={<PostStory /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
