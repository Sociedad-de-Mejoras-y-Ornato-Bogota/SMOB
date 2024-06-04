import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../../assets/icons/dowm.png';
import Left from '../../assets/icons/left.png';
import Right from '../../assets/icons/right.png';
import Up from '../../assets/icons/up.png';

import './aside.css'

const MenuOrdenamiento = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [infraestructura, setinfraestructura] = useState(true);
  const [estructura, setestructura] = useState(true);
  const [instrumentos, setinstrumentos] = useState(true);
  const [sisEP, setsisEP] = useState(false)
  const [sisSP, setsisSP] = useState(false)
  const [sisUrb, setSisUrb] = useState(false)
  const [norUrb, setNorUrb] = useState(false)
  const [vivienda, setVivienda] = useState(false)
  const [scrollTop, setScrollTop] = useState()
  const location = useLocation();
  let url = decodeURI(location.pathname);


  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
      var elem = document.getElementById('lateral-menu-o');
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

  return (<div className={`lateral-menu l-normal ${isExpanded ? 'expanded' : ''}`} id='lateral-menu-o'>

    <nav className={`menu-container ${isExpanded ? 'expanded' : ''}`}>

      {!isExpanded && <ul className="menu">
        <div className='title-component'>
          <Link to='componente bienestar'>
            <p style={{ fontWeight: "bold", fontSize: "24px", margin: "1vh 0" }}>Componente Bienestar</p> </Link>
        </div>

        <div className='component1' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='componente bienestar/infraestructura'><span style={{ marginLeft: "20px", fontSize:"16px" }}>Infraestructura</span></Link>
            <button className='expand-button' onClick={() => {
              setinfraestructura(!infraestructura)
              setestructura(false)
              setinstrumentos(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {infraestructura ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {infraestructura && <div className='dropdown-menu1'>
            <ul >
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/infraestructura/Sistema vial y de transporte"><span style={{fontSize:"14px"}}  onClick={() => {
                handleToggle()
                setinfraestructura(!infraestructura)
              }}>Sistema vial y de transporte</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/infraestructura/Sistema de espacio público y equipamientos">
                <span style={{fontSize:"14px"}}>Sistema de espacio público</span></Link>
                <button className='expand-button' onClick={() => setsisEP(!sisEP)} style={{ border: "none", marginLeft: "5px" }}>
                  {sisEP ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button>
                {sisEP && <div className='dropdown-menu1'>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Plazas, Plazoletas,Parques y Monumentos </span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente ordenamiento/Infraestructura/Sistema de espacio publico/Equipamientos"><span  style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Equipamientos</span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Iglesias"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}> Historia de las Iglesias</span></Link>
                    </li>
                  </ul>
                </div>}
              </li>
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/infraestructura/Sistema de servicios públicos"><span  style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setinfraestructura(!infraestructura)
              }}>Sistema de servicios públicos</span></Link>
                <button className='expand-button' onClick={() => setsisSP(!sisSP)} style={{ border: "none", marginLeft: "5px" }}>
                  {sisSP ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button>
                {sisSP && <div className='dropdown-menu1'>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Historia del Acueducto y alcantarillado </span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de servicios públicos/Energia"><span  style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Historia de la Energía eléctrica</span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de servicios públicos/Gas"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Historia del Gas natural</span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de servicios públicos/Telecomunicaciones"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Sistema de Telecomunicaciones</span></Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <Link to="componente bienestar/infraestructura/Sistema de servicios públicos/Basuras"><span style={{fontSize:"14px"}} onClick={() => {
                        handleToggle()
                        setsisEP(!sisEP)
                      }}>Sistema de las basuras</span></Link>
                    </li>
                  </ul>
                </div>}
              </li>
            </ul>
          </div>}

        </div>

        <div className='component2' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='componente bienestar/Estructura urbana'><span style={{ marginLeft: "20px" , fontSize:"16px"}}>Estructura urbana</span></Link>
            <button className='expand-button' onClick={() => {
              setestructura(!estructura)
              setinfraestructura(false)
              setinstrumentos(false)
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
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/Estructura urbana/Tipologias urbanisticas"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setSisUrb(!sisUrb)
              }}>Sistemas urbanos </span></Link>
                <button className='expand-button' onClick={() => setSisUrb(!sisUrb)} style={{ border: "none", marginLeft: "5px" }}>
                  {sisUrb ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button></li>
              {sisUrb && <div className='dropdown-menu1'>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Tipologias urbanisticas/Historia de barrios"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Historia de barrios</span></Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Tipologias urbanisticas/Condiciones de habitabilidad UPZ"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Condiciones de habitabilidad UPZ </span></Link>
                  </li>
                </ul>
              </div>}
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/Estructura urbana/Usos"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setestructura(!estructura)
              }}>Vivienda, comercío e industria</span></Link>
                <button className='expand-button' onClick={() => setVivienda(!vivienda)} style={{ border: "none", marginLeft: "5px" }}>
                  {vivienda ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button>
              </li>
              {vivienda && <div className='dropdown-menu1'>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Usos/Línea de tiempo Historia de la vivienda"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Línea de tiempo Historia de la vivienda </span></Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Usos/Desarrollos urbanísticos"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Desarrollos urbanísticos</span></Link>
                  </li>
                </ul>
              </div>}
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setestructura(!estructura)
              }}>Tratamientos y normas urbanísticas</span></Link>
                <button className='expand-button' onClick={() => setNorUrb(!norUrb)} style={{ border: "none", marginLeft: "5px" }}>
                  {norUrb ? (
                    <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  ) : (
                    <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
                  )}
                </button></li>
              {norUrb && <div className='dropdown-menu1'>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Conservación"><span style={{fontSize:"14px"}}  onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}> Conservación </span></Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Renovación"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Renovación </span></Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <Link to="componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Desarrollo"><span style={{fontSize:"14px"}} onClick={() => {
                      handleToggle()
                      setsisEP(!sisEP)
                    }}>Desarrollo </span></Link>
                  </li>
                </ul>
              </div>}
            </ul>
          </div>}
        </div>

        <div className='component3' >
          <div style={{ borderBottom: "1px solid #ccc" }}>
            <Link to='componente bienestar/instrumentos'><span style={{ marginLeft: "20px", fontSize:"16px" }}>Instrumentos</span></Link>
            <button className='expand-button' onClick={() => {
              setinstrumentos(!instrumentos)
              setinfraestructura(false)
              setestructura(false)
            }} style={{ border: "none", marginLeft: "5px" }}>
              {instrumentos ? (
                <img src={Up} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              ) : (
                <img src={Dropdown} alt="Expand" style={{ width: '8px', height: '8px' }}></img>
              )}
            </button>
          </div>

          {instrumentos && <div className='dropdown-menu1'>
            <ul >
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/instrumentos/Planificación"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setinstrumentos(!instrumentos)
              }}>Planeación</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/instrumentos/Gestión"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setinstrumentos(!instrumentos)
              }}>Gestión</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="componente bienestar/instrumentos/Financiación"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setinstrumentos(!instrumentos)
              }}>Financiación</span></Link></li>
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

export default MenuOrdenamiento;