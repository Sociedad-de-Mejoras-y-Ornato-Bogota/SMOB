import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarResponsive from '../components/navbar/navbarResponsive';
import NavbarPrincipal from '../components/navbar/NavBarPrincipal';
import NvRes from '../components/navbar/NvRes';
import NavbarS from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
import './layout.css';

function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPaginaPrincipal, setIsPaginaPrincipal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleRouteChange = () => {
      setIsPaginaPrincipal(location.pathname === '/');
    };

    window.addEventListener('resize', handleResize);
    handleRouteChange(); // Verificación inicial para la ruta actual

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  return (
    <div className='layout' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {windowWidth < 800 ? <NvRes /> : (isPaginaPrincipal ? <NavbarPrincipal /> : <NavbarS />)}
      <main style={{ minHeight: 'calc((100vh/8)*6))' }} className='main-project'>
        {children}
      </main>
      <Footer style={{ alignSelf: 'flex-end' }} />
    </div>
  );
}

export default Layout;
