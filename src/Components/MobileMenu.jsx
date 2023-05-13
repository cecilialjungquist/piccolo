import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from './Button';
import './MobileMenu.css'

function MobileMenu() {
    const [showOptions, setShowOptions] = useState(false);

    function toggleMenu() {
        setShowOptions(prevState => !prevState);
    }

    return (
        <nav className="mobile-menu">
            <Button children={'Menu'} type={'menu'} onClick={toggleMenu} />
            {showOptions &&
                <section className="options">
                    <NavLink onClick={toggleMenu} to='/home'>Home</NavLink>
                    <NavLink onClick={toggleMenu} to='/flow'>Flow</NavLink>
                    <NavLink onClick={toggleMenu} to='/post-story'>Post Story</NavLink>
                </section>
            }
        </nav>
    );
}

export default MobileMenu;