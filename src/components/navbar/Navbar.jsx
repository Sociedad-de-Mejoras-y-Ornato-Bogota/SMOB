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
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/aplicaci%C3%B3n+de+logotipos+DATA+CIVILIDAD_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" style={{ width: '18rem' }} />
                    </Link>

                </div>
                <div className='header-title'>
                    <h1 style={{fontFamily:'serif',fontWeight:'100', fontSize:'3em'}}>DATACIVILIDAD
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