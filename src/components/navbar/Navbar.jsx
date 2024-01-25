import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarS = () => {
    return (
        <>
            <header id='header1'>
                <div className='header-img' >
                    <Link to="/">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="Logo plataforma Construyendo Civilidad" style={{ width: '3.3rem' }} />
                    </Link>
                    <Link to="construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="Logo Sociedad de Mejoras y Ornato de Bogotá" style={{ width: '3.3rem' }} />
                    </Link>

                </div>
                <div className='header-title'>
                    <h1>Construyendo Civilidad
                    </h1>
                </div>
            </header>
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

export default NavbarS;