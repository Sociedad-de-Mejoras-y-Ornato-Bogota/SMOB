import { useState, useEffect } from 'react';
import NavbarResponsive from '../components/navbar/navbarResponsive';
import NavbarS from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
import './layout.css'

// import { useLocation } from 'react-router-dom';
// import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
// import Menu from '../components/aside/aside-poblacional';
// import MenuCivilidad from '../components/aside/aside-civilidad';
// import MenuGeneral from '../components/aside/aside-general';
// import MenuTerritorial from '../components/aside/aside-territorial';
// import MenuOrdenamiento from '../components/aside/aside-ordenamiento';







function Layout({ children }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const location = useLocation();
  // let url = decodeURI(location.pathname);
  // let firstSegment = `/${url.split('/')[2]}`;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='layout' style={{ display: "flex", flexDirection: "column", width: "100%" }}>

      {windowWidth < 1100 ? <NavbarResponsive /> : <NavbarS/>}
      {/*<Breadcrumbs /> */}
      {/* {(firstSegment === '/Componente poblacional' && windowWidth > 1100) && <Menu />}
      {(firstSegment === '/marco institucional' && windowWidth > 1100) && <MenuGeneral />}
      {(firstSegment == '/componente bienestar' && windowWidth > 1100) && <MenuOrdenamiento />}
      {(firstSegment === '/construyendo civilidad' && windowWidth > 1100) && <MenuCivilidad />}
      {(firstSegment == '/Componente territorial' && windowWidth > 1100) && <MenuTerritorial />} */}

      <main style={{ minHeight: "calc((100vh/8)*6))" }} className='main-project'>{children}</main>

      <Footer style={{ alignSelf: "flex-end" }} />
    </div>
  )
}
export default Layout;