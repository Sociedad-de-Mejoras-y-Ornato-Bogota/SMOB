import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';


import './NavbarS.css';

const NavbarS = () => {
    return(
        <>
        <header id='header' className='col-lg' >
        <div className='header-img' id='hola'>
              <Link to="/sociedad-de-mejoras-y-ornato-bogota/">
                  <img src="https://geoapps.esri.co/recursos/SMOB/logo.png" alt="logo" style={{ width: '3vw', marginLeft: '-50%' }} />
                  <img src="https://i.ibb.co/jT1YtpX/LOGO-PLATAFORMA-WEB-SMOB-Mesa-de-trabajo-1.png" alt="logo" style={{ width: '3vw', marginLeft: '-2%' }} />
              </Link></div>
          <div className='header-title' id='hola' style={{marginLeft:"5vw"}}>
              <h1>Construyendo civilidad: ciudad y ciudadanía
              </h1>
          </div>
        </header>
        <nav className="nv">
            <ul className="menus">
            {
                archivo.map((menu, index)=>{
                    const dephtlevel=0;
                    return<MenuItems items={menu} key={index} dephtlevel={dephtlevel}/>
                })
            }
            </ul>
        </nav>
        </>
    )
}

export default NavbarS;