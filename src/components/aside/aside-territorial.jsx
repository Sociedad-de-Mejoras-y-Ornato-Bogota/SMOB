import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../../assets/icons/dowm.png';
import Left from '../../assets/icons/left.png';
import Right from '../../assets/icons/right.png';
import Up from '../../assets/icons/up.png';

import './aside.css'

const MenuTerritorial = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [territorial, setterritorial] = useState(false);

  const location = useLocation();
  let url = decodeURI(location.pathname);
  const [scrollTop, setScrollTop] =  useState()

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    var elem = document.getElementById('lateral-menu-t');
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

  return (<div className={`lateral-menu l-normal ${isExpanded ? 'expanded' : ''}`} id='lateral-menu-t'>
    <nav className={`menu-container  ${isExpanded ? 'expanded' : ''}`}>

      {!isExpanded && <ul className="menu">
        <div className='title-component'>
          <Link to='Componente territorial' ><p style={{fontWeight:"bold",fontSize:"24px",margin:"1vh 0"}} onClick={() => {
          handleToggle()
          setterritorial(!territorial)
          }}>Componente territorial</p></Link>
        </div>

        <div className='component1' >
          <div >
            <Link to='Componente territorial/Evolución de la huella urbana'><span  onClick={() => {
            handleToggle()
            setterritorial(!territorial)
            }} style={{ marginLeft: "20px", fontSize:"16px" }}>Evolución de la huella urbana</span></Link>
          </div>
        </div>

        {/* <div className='component2' >
          <div >
            <Link to='Componente territorial/Historia de huella urbana'><span style={{ marginLeft: "20px" }}><span onClick={() => {
            handleToggle()
            setterritorial(!territorial)
            }}>Historia de la huella urbana</span></span></Link>
          </div>  
        </div> */}

        <div className='component3' >
          <div >
            <Link to='Componente territorial/Indicadores urbanísticos'><span style={{ marginLeft: "20px", fontSize:"16px" }}><span onClick={() => {
            handleToggle()
            setterritorial(!territorial)
            }}>Indicadores urbanísticos</span></span></Link>
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

export default MenuTerritorial;
// 