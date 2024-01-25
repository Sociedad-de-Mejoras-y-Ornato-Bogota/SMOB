// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { archivo } from "./archivo";
// import './NvRes.css';

// const NvRes = () => {
//   const [menuAbierto, setMenuAbierto] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuAbierto(!menuAbierto);
//   };

//   const toggleSubMenu = (index) => {
//     const updatedArchivo = [...archivo];
//     updatedArchivo[index].expanded = !updatedArchivo[index].expanded;
//     // Actualiza el array directamente, sin necesidad de un estado
//     renderSubMenu(updatedArchivo[index].submenu);
//   };

//   const renderSubMenu = (submenu) => (
//     <ul className="submenu">
//       {submenu.map((subitem, subindex) => (
//         <li key={subindex} className="submenuItem">
//           <Link to={subitem.ruta} style={{ textDecoration: 'none', color: 'black' }}>
//             {subitem.title}
//           </Link>
//           {subitem.submenu && subitem.expanded && renderSubMenu(subitem.submenu)}
//         </li>
//       ))}
//     </ul>
//   );

//   const MenuItem = ({ item, index }) => (
//     <li className="navbarItem">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <Link to={item.ruta} style={{ color: 'black', textDecoration: 'none' }}>
//           {item.title}
//         </Link>
//         {item.submenu && (
//           <button onClick={() => toggleSubMenu(index)}>
//             {item.expanded ? '▼' : '▶'}
//           </button>
//         )}
//       </div>
//       {item.submenu && item.expanded && renderSubMenu(item.submenu)}
//     </li>
//   );

//   const renderMenuItem = (item, index) => (
//     <MenuItem key={index} item={item} index={index} />
//   );

//   return (
//     <div>
//       <header id='header' className={scrolled ? 'scrolled' : ''}>
//         <div className='header-img'>
//           <Link to="/">
//             <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="Logo plataforma Construyendo Civilidad" className="logo" style={{ width: '30%', height: '30%' }}/>
//           </Link>
//           <Link to="construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
//             <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="Logo Sociedad de Mejoras y Ornato de Bogotá" className="logo" style={{ width: '30%', height: '30%' }}/>
//           </Link>
//         </div>
//         <div className={`navbarToggleContainer ${scrolled ? 'scrolled' : ''}`}>
//           <div className="navbarToggleWrapper">
//             <button className="navbarToggle" onClick={toggleMenu}>
//               ☰
//             </button>
//           </div>
//         </div>
//       </header>
//       <div className={`navbar ${menuAbierto ? 'open' : ''}`}>
//         <div className={`navbarMenuContainer ${menuAbierto ? 'open' : ''}`}>
//           <ul className="navbarMenu">
//             {archivo.map((item, index) => renderMenuItem(item, index))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NvRes;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { archivo } from "./archivo";
import './NvRes.css';

const NvRes = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const toggleSubMenu = (index) => {
  setExpandedSubmenus((prevExpanded) => {
    return {
      ...prevExpanded,
      [index]: !prevExpanded[index],
    };
  });
};

  // ... (código anterior)

  const renderSubMenu = (submenu, parentIndex) => (
    <ul className="submenu">
      {submenu.map((subitem, subindex) => (
        <li key={subindex} className="submenuItem">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={subitem.ruta} style={{ textDecoration: 'none', color: 'black' }}>
              {subitem.title}
            </Link>
            {subitem.submenu && (
              <span
                className={`expandIcon ${expandedSubmenus[`${parentIndex}-${subindex}`] ? 'collapseIcon' : ''}`}
                onClick={() => toggleSubMenu(`${parentIndex}-${subindex}`)}
              >
                {expandedSubmenus[`${parentIndex}-${subindex}`] ? '▼' : '▶'}
              </span>
            )}
          </div>
          {subitem.submenu && expandedSubmenus[`${parentIndex}-${subindex}`] && renderSubMenu(subitem.submenu, `${parentIndex}-${subindex}`)}
        </li>
      ))}
    </ul>
  );
  
  const MenuItem = ({ item, index }) => (
    <li className="navbarItem" key={index}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to={item.ruta} style={{ color: 'black', textDecoration: 'none' }}>
          {item.title}
        </Link>
        {item.submenu && (
          <span
            className={`expandIcon ${expandedSubmenus[index] ? 'collapseIcon' : ''}`}
            onClick={() => toggleSubMenu(index)}
          >
            {expandedSubmenus[index] ? '▼' : '▶'}
          </span>
        )}
      </div>
      {item.submenu && expandedSubmenus[index] && renderSubMenu(item.submenu, index)}
    </li>
  );
  

  return (
    <div>
      <header id='header' className={scrolled ? 'scrolled' : ''}>
        <div className='header-img'>
          <Link to="/">
            <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="Logo plataforma Construyendo Civilidad" className="logo" style={{ width: '30%', height: '30%' }}/>
          </Link>
          <Link to="construyendo-civilidad/La-responsabilidad-social-de-la-Sociedad-de-Mejoras-y-Ornato-de-Bogota">
            <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="Logo Sociedad de Mejoras y Ornato de Bogotá" className="logo" style={{ width: '30%', height: '30%' }}/>
          </Link>
        </div>
        <div className={`navbarToggleContainer ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbarToggleWrapper">
            <button className="navbarToggle" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </header>
      <div className={`navbar ${menuAbierto ? 'open' : ''}`}>
        <div className={`navbarMenuContainer ${menuAbierto ? 'open' : ''}`}>
          <ul className="navbarMenu">
            {archivo.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NvRes;
