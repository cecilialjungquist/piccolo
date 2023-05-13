import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStories } from './store/storiesSlice';
import { Link, NavLink, Outlet } from "react-router-dom";
import MobileMenu from './Components/MobileMenu';

function App() {
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const response = await fetch('data.json');

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

  useEffect(() => {
    fetchData();
  }, [dispatch])

  return (
    <>
      <header className="layout-header">
        <aside>
          <Link to='/home'>
            <svg width="22" height="28" viewBox="0 0 88 111" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="88" height="111" rx="6" fill="#CCCCCC" />
              <path d="M14.4182 93.6962L35.2753 66.0246M35.2753 66.0246L68.6093 18.248C89.5 66.0246 35.2753 66.0246 35.2753 66.0246Z" stroke="#267055" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <h2>Piccolo</h2>
          </Link>
        </aside>
        <nav className='desktop'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/flow'>Flow</NavLink>
          <NavLink to='/post-story'>Post Story</NavLink>
        </nav>
        <MobileMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p> made by <a href="https://www.linkedin.com/in/cecilia-ljungquist/" target='_blank'> cecilia ljungquist</a> may 2023</p>
      </footer>
    </>
  )
}

export default App
