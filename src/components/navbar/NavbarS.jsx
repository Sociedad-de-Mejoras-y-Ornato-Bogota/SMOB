import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';


import './NavbarS.css';

const NavbarS = () => {
    return (
        <>
            <header id='header' className='col-lg' >
                <div className='header-img' id='hola'>
                    <Link to="construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="logo" style={{ width: '3vw', marginLeft: '-50%' }} />
                    </Link>
                    <Link to="/">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="logo" style={{ width: '3vw', marginLeft: '-2%' }} />
                        </Link>
                </div>
                <div className='header-title' id='hola' style={{ marginLeft: "5vw" }}>
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