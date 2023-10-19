import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../../assets/icons/dowm.png';
import Left from '../../assets/icons/left.png';
import Right from '../../assets/icons/right.png';
import Up from '../../assets/icons/up.png';

import './aside.css'

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [cyc, setcyc] = useState(true);
  const [demografia, setdemografia] = useState(true);
  const [estructura, setestructura] = useState(true);
  const [pobreza, setpobreza] = useState(true);
  const [piramides, setPiramides] = useState(false);
  const [proyecciones, setProyecciones] = useState(false);
  const [scrollTop, setScrollTop] = useState()
  const location = useLocation();
  let url = decodeURI(location.pathname);


  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
      var elem = document.getElementById('lateral-menu-p');
      var toggle = document.getElementById('toggle-button');
      var pant = screen.height;
      pant = (pant / 8) * 1.5;
      if (window.scrollY >= pant) {
        elem.classList.remove("l-normal");
        elem.classList.add("l-ext");
        toggle.classList.remove("l-normal");
        toggle.classList.add("l-ext");
      }
      else {
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




  return (<div className={`lateral-menu l-normal ${isExpanded ? 'expanded' : ''}`} id='lateral-menu-p'>

    <nav className={`menu-container ${isExpanded ? 'expanded' : ''}`}>

      {!isExpanded && <ul className="menu">
        <div className='title-component '>
          <Link to='Componente poblacional' >
            <p style={{ fontWeight: "bold", fontSize: "24px", margin: "1vh 0" }}>
              Componente poblacional
            </p></Link>
        </div>
        <div className='component1' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='Componente poblacional/Conflicto - civilidad'><span style={{ marginLeft: "20px", fontSize: "16px" }}>Conflicto - civilidad</span></Link>
            <button className='expand-button' onClick={() => {
              setcyc(!cyc)
              setPiramides(false)
              setProyecciones(false)
              setdemografia(false)
              setpobreza(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {cyc ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {cyc && <div className='dropdown-menu1'>
            <ul >
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Caminos hacia la Independencia </span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Bogotá asediada siglo XIX</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Demografía: violencia y urbanización</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Conflicto - civilidad/ ¿Por qué tanta discordia?"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>¿Por qué tanta discordia?</span></Link></li>

            </ul>
          </div>}

        </div>
        <div className='component2' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='Componente poblacional/demografía'><span style={{ marginLeft: "20px", fontSize: "16px" }}>Estructura Demográfica</span></Link>
            <button className='expand-button' onClick={() => {
              setdemografia(!demografia)
              setPiramides(false)
              setProyecciones(false)
              setcyc(false)
              setpobreza(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {demografia ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {demografia && <div className='dropdown-menu1'>
            <ul >
              <li style={{ listStyle: "none" }}>
                <Link to="Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018"><span style={{ fontSize: "14px" }} onClick={() => {
                }}>Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018</span></Link>

              </li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/demografía/Series de población"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setdemografia(!demografia)
              }}>Series de población</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setdemografia(!demografia)
              }}>Crecimiento de la población (1790 - 2035)</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Demografía/Ecuación compensadora de Bogotá"><span style={{ fontSize: "14px" }} onClick={() => {
                handleToggle()
                setdemografia(!demografia)
              }}>Ecuación compensadora de Bogotá( 1905-2035)</span></Link></li>
              <li style={{ listStyle: "none", borderBottom: "1px solid #ccc" }}><Link to="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo">
                <span style={{ fontSize: "14px" }}>Pirámides de distribución por edad y sexo </span>   </Link>
                <button className='expand-button' onClick={() => setPiramides(!piramides)} style={{ border: "none", marginLeft: "5px" }}>
                  {piramides ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button>
                {piramides && <div className='dropdown-menu1'>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <Link to="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá"><span style={{ fontSize: "14px" }} onClick={() => {
                        handleToggle()
                        setdemografia(!demografia)
                      }}>Pirámides de distribución por edad y sexo de Colombia o Bogotá</span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos"><span style={{ fontSize: "14px" }} onClick={() => {
                        handleToggle()
                        setdemografia(!demografia)
                      }}>Comparador pirámides Colombia y Bogotá por censos</span></Link>
                    </li>
                  </ul>
                </div>}
              </li>
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Demografía/Indices demográficos"><span
                style={{ fontSize: "14px" }}
                onClick={() => {
                  handleToggle()
                  setdemografia(!demografia)
                }}>Índices demograficos</span></Link></li>
              <li style={{ listStyle: "none" }}>
                <Link to="Componente poblacional/Demografía/Proyecciones de población"><span style={{ borderBottom: "1px solid #ccc", fontSize: "14px" }}>Proyecciones de población</span></Link>
                {/* <button className='expand-button' onClick={() => setProyecciones(!proyecciones)} style={{ border: "none", marginLeft: "5px" }}>
                  {proyecciones ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button> */}
                {/* {proyecciones && <div className='dropdown-menu1'>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <Link to="Componente poblacional/Demografía/Proyecciones de poblacion/Análisis de migraciones en Bogotá y municipios 2018">
                        <span style={{}}>Análisis de migraciones en Bogotá y municipios 2018 </span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="Componente poblacional/Demografía/Proyecciones de poblacion/Dinamica demografica y modelos de ocupación del suelo en Bogotá y la Sabana">
                        <span style={{}}>Dinámica demografica y modelos de ocupación del suelo en Bogotá y la Sabana </span></Link>
                    </li>
                  </ul>
                </div>} */}
              </li>
            </ul>
          </div>}

        </div>

        <div className='component4' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='Componente poblacional/Estructura socioespacial'><span style={{ marginLeft: "20px", fontSize: "16px" }}>Estructura Socioespacial</span></Link>
            <button className='expand-button' onClick={() => {
              setpobreza(!pobreza)
              setPiramides(false)
              setProyecciones(false)
              setdemografia(false)
              setcyc(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {pobreza ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>
          {pobreza && <div className='dropdown-menu1'>
            <ul >
              {/* <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Pobreza/Metodologia"><span onClick={()=>{
                handleToggle()
                setpobreza(!pobreza)
              }}>Metodología</span></Link></li> */}
              <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades"><span onClick={() => {
                handleToggle()
                setpobreza(!pobreza)
              }} style={{ fontSize: "14px" }}>Segregación espacial por Localidades  </span></Link></li>
            </ul>
          </div>}
          <div className='component3' >
            <div style={{ borderBottom: "1px solid #ccc" }}>
              <Link to='Componente poblacional/Estructura socioeconómica'><span style={{ marginLeft: "20px", fontSize: "16px" }}>Estructura Socioeconómica</span></Link>
              <button className='expand-button' onClick={() => {
                setestructura(!estructura)
                setPiramides(false)
                setProyecciones(false)
                setdemografia(false)
                setpobreza(false)
                setcyc(false)
              }
              } style={{ border: "none", marginLeft: "5px" }}>
                {cyc ? (
                  <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                ) : (
                  <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                )}
              </button>
            </div>

            {estructura && <div className='dropdown-menu1'>
              <ul >
                <li style={{ listStyle: "none" }}><Link to="Componente poblacional/Estructura socioeconómica/Pobreza en Colombia y Bogotá"><span onClick={() => {
                  handleToggle()
                  setestructura(!pobreza)
                }}
                  style={{ fontSize: "14px" }}>Segregación espacial por localidades</span></Link></li>
              </ul>
            </div>}

          </div>
        </div>
      </ul>}

      <div onClick={handleToggle} className={`toggle-button l-normal  ${isExpanded ? 's-padding' : ''}`} id='toggle-button'>
        {isExpanded ? <img src={Right} alt="Expand" style={{ width: '15px', height: '15px' }} className='imgAside'></img> : <img src={Left} alt="Expand" style={{ width: '15px', height: '15px' }}></img>}
      </div>
    </nav>
  </div>

  );
};

export default Menu;