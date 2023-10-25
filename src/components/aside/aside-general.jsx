import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../../assets/icons/dowm.png';
import Left from '../../assets/icons/left.png';
import Right from '../../assets/icons/right.png';
import Up from '../../assets/icons/up.png';

import './aside.css'

const MenuGeneral = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [leyes, setleyes] = useState(true)
  const [estructura, setestructura] = useState(true)  
  const [scrollTop, setScrollTop] =  useState()

  const location = useLocation();
  let url = decodeURI(location.pathname);


  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    var elem = document.getElementById('lateral-menu-g');
    var toggle = document.getElementById('toggle-button');
    var pant = screen.height;
    pant=(pant/8)*1.5;
    if(window.scrollY>=pant){
        elem.classList.remove("l-normal");
        elem.classList.add("l-ext");
        toggle .classList.remove("l-normal");
        toggle .classList.add("l-ext");
    }
    else{
        elem.classList.remove("l-ext");
        elem.classList.add("l-normal");
        toggle.classList.remove("l-ext");
        toggle.classList.add("l-normal");
    }
    };
    window.addEventListener('scroll', handleScroll);
return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);



  return (<div className={`lateral-menu l-normal ${isExpanded ? 'expanded' : ''}`} id='lateral-menu-g'>
    <nav className={`menu-container  ${isExpanded ? 'expanded' : ''}`}>

      {!isExpanded && <ul className="menu">
        <div className='title-component'>
          <Link to='zmarco institucional' >
            <p style={{fontWeight:"bold",fontSize:"24px",margin:"1vh 0"}}>
            Marco Institucional
              </p></Link>
        </div>

        <div className='component1' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='marco institucional/Nueva agenda urbana y los ODS'><span style={{ marginLeft: "20px",fontSize:"16px" }}>Nueva agenda urbana y los ODS</span></Link>
            {/* <button className='expand-button' onClick={() => {
              setleyes(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {agenda ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button> */}
          </div>

          {/* {agenda && <div className='dropdown-menu1'>
            <ul >
              <li style={{ listStyle: "none" }}><Link to="Componente general/Nueva agenda urbana y los ODS/Coloquio la nueva agenda urbana en tiempo de la pandemia"><span onClick={() => {
                handleToggle()
                setagenda(!agenda)
              }}>Coloquio la nueva agenda urbana en tiempo de la pandemia</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente general/Nueva agenda urbana y los ODS/Para quién es el POT"><span onClick={() => {
                handleToggle()
                setagenda(!agenda)
              }}>¿Para quién es el POT?</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente general/Nueva agenda urbana y los ODS/Las grandes incertidumbres y el POT de Bogotá"><span onClick={() => {
                handleToggle()
                setagenda(!agenda)
              }}>Las grandes incertidumbres y el POT de Bogotá</span></Link></li>
            </ul>
          </div>} */}

        </div>
        
 

        <div className='component3' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='marco institucional/Leyes de ordenamiento territorial'><span style={{ marginLeft: "20px",fontSize:"16px" }}>Leyes de ordenamiento territorial</span></Link>
            <button className='expand-button' onClick={() => {
              setleyes(!leyes)
              setagenda(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {leyes ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {leyes && <div className='dropdown-menu1'>
            <ul >
            <li style={{ listStyle: "none" }}><Link to="Componente general/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997"><span onClick={() => {
                handleToggle()
                setleyes(!leyes)
              }}>Antecedentes de la Ley 388 de 1997</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setleyes(!leyes)
              }}>Esquema de la Ley 388 de 1997</span></Link></li>
              {/* <li style={{ listStyle: "none" }}><Link to="Componente general/Leyes de ordenamiento territorial/Concepto Plan de Ordenamiento Territorial año 2019"><span onClick={() => {
                handleToggle()
                setleyes(!leyes)
              }}>Concepto Plan de Ordenamiento Territorial año 2019</span></Link></li> */}
            </ul>
          </div>}

        </div>

        <div className='component2' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='marco institucional/Estructura administrativa de Bogotá'><span style={{ marginLeft: "20px",fontSize:"16px" }}>Estructura administrativa de Bogota</span></Link>
            <button className='expand-button' onClick={() => {
              setestructura(!estructura)
              setleyes(false)
              setagenda(false)
            }
            } style={{ border: "none", marginLeft: "5px" }}>
              {estructura ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {estructura && <div className='dropdown-menu1'>
          <ul >
            <li style={{ listStyle: "none" }}><Link to="marco institucional/Estructura administrativa de Bogotá/Línea del tiempo Estructura Administrativa de Bogotá"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setleyes(!leyes)
              }}>Línea del tiempo Estructura Administrativa de Bogotá</span></Link></li>
            </ul>
          </div>}
        </div>
      </ul>}

      <div onClick={handleToggle} className={`toggle-button l-normal ${isExpanded ? 's-padding' : ''}`} id='toggle-button'>
        {isExpanded ? <img src={Right} alt="Expand" style={{ width: '15px', height: '15px' }} className='imgAside'></img> : <img src={Left} alt="Expand" style={{ width: '15px', height: '15px' }}></img>}
      </div>
    </nav>
  </div>

  );
};

export default MenuGeneral;