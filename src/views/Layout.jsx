import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (  
        <>
            <header className="layout-header">
                <aside>
                    <Link to='/'>
                        Logo
                    </Link>
                </aside>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='flow'>Flow</NavLink>
                    <NavLink to='login'>Account</NavLink>
                    <NavLink to='post-story'>Post Story</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                This is a footer
            </footer>
        </>
    );
}

export default Layout;