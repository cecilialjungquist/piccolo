import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store.js';
import { Provider } from 'react-redux';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Login from './views/Login.jsx';
import Home from './views/Home.jsx';
import Flow from './views/Flow.jsx';
import Story from './views/Story.jsx';
import PostStory from './views/PostStory.jsx';
import EditStory from './views/EditStory.jsx';
import ErrorScreen from './views/ErrorScreen.jsx';


// Hur frå jag med min login?

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'flow',
        element: <Flow />
      },
      {
        path: 'story/:id',
        element: <Story />
      },
      {
        path: 'post-story',
        element: <PostStory />
      },
      {
        path: 'edit-story',
        element: <EditStory />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
