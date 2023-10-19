import React from 'react';
import DropdownMenu from './dropDownMenu';
 import './dropDown.css'
 import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbar.css'
import dowm from '../../assets/icons/dowm.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { left } from '@popperjs/core';

const NavbarSimple = () => {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    // Función para mostrar u ocultar el submenú
    const toggleSubMenu = () => {
      setSubMenuVisible(!isSubMenuVisible);

    };

    const handleSubMenuEnter = () => {
        setSubMenuVisible(true);
      };
    
      // Función para ocultar el submenú cuando se retira el cursor de "Nueva agenda urbana y los ODS"
      const handleSubMenuLeave = () => {
        setSubMenuVisible(false);
      };
  return (
    <><header id='header' className='col-lg' onMouseOver={() => {
          esconderTodo();
      } }>
          <div className='header-img' id='hola'>
              <Link to="/sociedad-de-mejoras-y-ornato-bogota/">
                  <img src="https://geoapps.esri.co/recursos/SMOB/logo.png" alt="logo" style={{ width: '6vw', height: '12vh', marginLeft: '-50%' }} />
                  <img src="https://i.ibb.co/jT1YtpX/LOGO-PLATAFORMA-WEB-SMOB-Mesa-de-trabajo-1.png" alt="logo" style={{ width: '6vw', height: '12vh' }} />
              </Link></div>
          <div className='header-title' id='hola'>
              <h1>Construyendo civilidad: ciudad y ciudadanía
              </h1>
          </div>
      </header><nav className="navbar">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a><Link to="/sociedad-de-mejoras-y-ornato-bogota/" >Inicio</Link></a>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#servicios">Servicios</a>
                          <DropdownMenu>
                              <ul style={{listStyle:'none'}}>
                                  <li>Opción 1</li>
                                  <li>Opción 2</li>
                                  <li>Opción 3</li>
                              </ul>
                          </DropdownMenu></p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Marco institucional</a>
                      <DropdownMenu isOpen={isSubMenuVisible}>
            <ul>
              <li>

                <span className="submenu-button" onMouseEnter={handleSubMenuEnter}
                      onMouseLeave={handleSubMenuLeave}>
                  Nueva agenda urbana y los ODS
                </span>
                {isSubMenuVisible && (
                  <div className="submenu" >
                    {/* Contenido del submenú */}
                    <ul>
                      <li>Submenú Opción 1</li>
                      <li>Submenú Opción 2</li>
                      <li>Submenú Opción 3</li>
                    </ul>
                  </div>
                )}
              </li>
              <li>Leyes de ordenamiento territorial</li>
              <li>Estructura administrativa de Bogotá</li>
            </ul>
          </DropdownMenu>
                          </p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Contacto</a>
                          <DropdownMenu>
                              <ul>
                                  <li>Otra Opción 1</li>
                                  <li>Otra Opción 2</li>
                                  <li>Otra Opción 3</li>
                              </ul>
                          </DropdownMenu>
                          
                          </p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Contacto</a>
                          <DropdownMenu>
                              <ul>
                                  <li>Otra Opción 1</li>
                                  <li>Otra Opción 2</li>
                                  <li>Otra Opción 3</li>
                              </ul>
                          </DropdownMenu></p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Contacto</a>
                          <DropdownMenu>
                              <ul>
                                  <li>Otra Opción 1</li>
                                  <li>Otra Opción 2</li>
                                  <li>Otra Opción 3</li>
                              </ul>
                          </DropdownMenu></p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Contacto</a>
                          <DropdownMenu>
                              <ul>
                                  <li>Otra Opción 1</li>
                                  <li>Otra Opción 2</li>
                                  <li>Otra Opción 3</li>
                              </ul>
                          </DropdownMenu></p>
                  </li>
                  <li className="nav-item">
                      <p className='unir'><a href="#contacto">Contacto</a>
                          <DropdownMenu>
                              <ul>
                                  <li>Otra Opción 1</li>
                                  <li>Otra Opción 2</li>
                                  <li>Otra Opción 3</li>
                              </ul>
                          </DropdownMenu></p>
                  </li>
              </ul>
          </nav></>
  );
};

export default NavbarSimple;