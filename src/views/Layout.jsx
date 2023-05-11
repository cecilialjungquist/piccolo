import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (  
        <>
            <header>
                <aside>
                    <Link to='/'>
                        Logo
                    </Link>
                </aside>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='flow'>Flow</NavLink>
                    <NavLink to='post-story'>PostStory</NavLink>

                    {/* <NavLink to='login'>Account</NavLink> */}
                </nav>
            </header>

            <Outlet/>
        </>
    );
}

export default Layout;