import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (  
        <>
            <header className="layout-header">
                <aside>
                    <Link to='home'>
                        Logo
                    </Link>
                </aside>
                <nav>
                    <NavLink to='home'>Home</NavLink>
                    <NavLink to='flow'>Flow</NavLink>
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