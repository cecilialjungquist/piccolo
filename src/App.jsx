import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import Flow from './views/Flow';
import Story from './views/Story';
import PostStory from './views/PostStory';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStories } from './store/storiesSlice';
import EditStory from './views/EditStory';
import Login from './views/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');

        if (response.status === 200) {
          const data = await response.json();
          dispatch(setStories(data.stories));
        } else {
          throw new Error('Could not fetch data.');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, [dispatch])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='flow' element={<Flow />} />
          <Route path='story/:id' element={<Story />} />
          <Route path='post-story' element={<PostStory />} />
          <Route path='edit-story' element={<EditStory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
