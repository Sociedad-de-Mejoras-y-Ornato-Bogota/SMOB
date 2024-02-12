import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarPrincipal = () => {
    return (
        <>
            <nav className="nv">
                <ul className="menus">
                    {
                        archivo.map((menu, index) => {
                            const dephtlevel = 0;
                            return <MenuItems items={menu} key={index} dephtlevel={dephtlevel} />
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavbarPrincipal;