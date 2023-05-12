import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStories } from './store/storiesSlice';
import { Link, NavLink, Outlet } from "react-router-dom";

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
    <>
      <header className="layout-header">
        <aside>
          <Link to='/home'>
            Logo
          </Link>
        </aside>
        <nav>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/flow'>Flow</NavLink>
          <NavLink to='/post-story'>Post Story</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        This is a footer
      </footer>
    </>
  )
}

export default App
