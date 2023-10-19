import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../../assets/icons/dowm.png';
import Left from '../../assets/icons/left.png';
import Right from '../../assets/icons/right.png';
import Up from '../../assets/icons/up.png';

import './aside.css'

const MenuCivilidad = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cyc, setcyc] = useState(false);
  const [scrollTop, setScrollTop] =  useState()

  const location = useLocation();
  let url = decodeURI(location.pathname);


  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    var elem = document.getElementById('lateral-menu');
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


useEffect(()=>{
  if(url.includes('sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad')){
    setcyc(true)
  }
  else{
    setcyc(false)
  }

},[])

  return (<div className={`lateral-menu l-normal ${isExpanded ? 'expanded' : ''}`} id='lateral-menu'>
    <nav className={`menu-container ${isExpanded ? 'expanded' : ''}`}>

      {!isExpanded && <ul className="menu">
        <div className='title-component'>
          <Link to='construyendo civilidad' ><p onClick={() => {
          handleToggle()
          setcyc(!cyc)
          }} style={{fontWeight:"bold",fontSize:"24px",margin:"1vh 0"}}>Construyendo civilidad</p></Link>
        </div>

        <div className='component1' >
          <div style={{ }}>
            <Link to='construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá'><span style={{ marginLeft: "20px" }}><span onClick={() => {
            handleToggle()
            setcyc(!cyc)
            }}
            style={{fontSize:"16px"}}>La responsabilidad social de la SMOB</span></span></Link>
          </div>
        </div>

        <div className='component2' >
          <div style={{}}>
            <Link to='construyendo civilidad/Cuidad y cuidadanía'><span style={{ marginLeft: "20px" }}><span style={{fontSize:"16px"}} onClick={() => {
            handleToggle()
            setcyc(!cyc)
            }}>Ciudad y cuidadanía</span></span></Link>
              <button className='expand-button' onClick={() => {
              setcyc(!cyc)
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
              <li style={{ listStyle: "none" }}><Link to="construyendo civilidad/Cuidad y cuidadanía/Cuidadanía y civilidad"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Ciudadanía y civilidad</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Orígenes de la civilidad en Colombia</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja"><span style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Bogotá: una ciudad compleja</span></Link></li>
                            <li style={{ listStyle: "none" }}><Link to="construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad"><span  style={{fontSize:"14px"}}onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>Civilidad y complejidad</span></Link></li>
              <li style={{ listStyle: "none" }}><Link to="construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá"><span  style={{fontSize:"14px"}} onClick={() => {
                handleToggle()
                setcyc(!cyc)
              }}>La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</span></Link></li>
            </ul>
          </div>}
        </div>
        
        {/* <div className='component3' >
          <div style={{  }}>
            <Link to='construyendo civilidad/La responsabilidad social de SMOB'><span style={{ marginLeft: "20px" }}><span onClick={() => {
            handleToggle()
            setcyc(!cyc)
            }}>La responsabilidad social de SMOB</span></span></Link>
          </div>
        </div>
        
        <div className='component4' >
          <div style={{  }}>
            <Link to='construyendo civilidad/Esquema de pensamiento complejo'><span style={{ marginLeft: "20px" }}><span onClick={() => {
            handleToggle()
            setcyc(!cyc)
            }}>Esquema de pensamiento complejo</span></span></Link>
          </div>
        </div>

        <div className='component5' >
          <div style={{  }}>
            <Link to='construyendo civilidad/El papel de la sociedad de mejoras públicas'><span style={{ marginLeft: "20px" }}><span onClick={() => {
            handleToggle()
            setcyc(!cyc)
            }}>El papel de la sociedad de mejoras públicas</span></span></Link>
          </div>
        </div> */}
      </ul>}

      <div onClick={handleToggle} className={`toggle-button l-normal ${isExpanded ? 's-padding' : ''}`} id='toggle-button'>
        {isExpanded ? <img src={Right} alt="Expand" style={{ width: '15px', height: '15px' }} className='imgAside'></img> : <img src={Left} alt="Expand" style={{ width: '15px', height: '15px' }}></img>}
      </div>
    </nav>
  </div>

  );
};

export default MenuCivilidad;