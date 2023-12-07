import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styles from './navbarResponsive.module.css';

const NavbarResponsive = () => {

    const location = useLocation();
    const [previousLocation, setPreviousLocation] = useState(location);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState(true);
    const [civilidad, setCivilidad] = useState(false);
    const [general, setGeneral] = useState(false);
    const [general_ods, setGeneral_ods] = useState(false);
    const [general_leyes, setGeneral_leyes] = useState(false);
    const [general_estructura, setGeneral_estructura] = useState(false);
    const [poblacional, setPoblacional] = useState(false);
    const [conflicto, setConflicto] = useState(false)
    const [demografia, setDemografia] = useState(false)
    const [piramides, setPiramides] = useState(false)
    const [proyecciones, setProyecciones] = useState(false)
    const [pobreza, setPobreza] = useState(false)
    const [estructura, setEstructura] = useState(false)
    const [ordenamiento, setOrdenamiento] = useState(false)
    const [territorial, setTerritorial] = useState(false);
    const [ModelosUrbanos, setModelosUrbanos] = useState(false);
    const [Ciudadyciudadania, setCiudadyciudadania] = useState(false);
    const [Infraestructura, setInfraestructura] = useState(false)
    const [serviciosPublicos, setServiciosPublicos] = useState(false)
    const [espacioPublicos, setEspacioPublico] = useState(false)
    const [estructuraUrbana, setEstruturaurbana] = useState(false)
    const [instrumentos, setInstrumentos] = useState(false)
    const [sistemaU, setSistemaU] = useState(false)
    const [vivienda, setVivienda] = useState(false)
    const [normasU, setNormasU] = useState(false)


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen === false) {
            setMenu(true)
            setCivilidad(false)
            setGeneral(false)
            setGeneral_ods(false)
            setGeneral_leyes(false)
            setGeneral_estructura(false)
            setPoblacional(false)
            setConflicto(false)
            setDemografia(false)
            setPiramides(false)
            setProyecciones(false)
            setPobreza(false)
            setEstructura(false)
            setOrdenamiento(false)
            setTerritorial(false)
            setInfraestructura(false)
            setServiciosPublicos(false)
            setEspacioPublico(false)
            setModelosUrbanos(false)
            setCiudadyciudadania(false)
            setInstrumentos(false)
            setEstruturaurbana(false)
            setVivienda(false)
        }
    };


    useEffect(() => {

        // Realizar acciones al cambiar de página
        if (location !== previousLocation) {
            // Realizar acciones al cambiar de página
            setMenuOpen(false);
            if (menuOpen === false) {
                setMenu(true)
                setCivilidad(false)
                setGeneral(false)
                setGeneral_ods(false)
                setGeneral_leyes(false)
                setGeneral_estructura(false)
                setPoblacional(false)
                setConflicto(false)
                setDemografia(false)
                setPiramides(false)
                setProyecciones(false)
                setPobreza(false)
                setEstructura(false)
                setOrdenamiento(false)
                setTerritorial(false)
                setInfraestructura(false)
                setServiciosPublicos(false)
                setEspacioPublico(false)
            }

        }
        setPreviousLocation(location);

    }, [location, previousLocation]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <div className='' style={{display:"flex", alignItems:"center", gap:"1vw"}}>
                    <Link to="/">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="Logo plataforma Construyendo Civilidad" style={{ width: '30px', height: '30px' }} />
                    </Link>
                    <Link to="/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="Logo Sociedad de Mejoras y Ornato Bogotá" style={{ width: '30px', height: '30px' }} />
                    </Link>
                    <h1 className={styles.navbar_title}>Construyendo Civilidad</h1>
                </div>

                <button className={styles.navbarToggle} onClick={() => toggleMenu()}>
                    {menuOpen ? <svg width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#5E2609" />
                    </svg> : <svg width="30" height="30" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z" fill="#5E2609" />
                    </svg>}
                </button>
            </div>
            {menuOpen && <div className={styles.navbarMenuContainer}>
                {menu && <ul className={`${styles.navbarMenu} ${menuOpen ? styles.open : ''}`}>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setMenu(false)
                        setCivilidad(true)
                    }}>
                        <Link to="/construyendo civilidad">Construyendo civilidad</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setMenu(false)
                        setGeneral(true)
                    }}>
                        <Link to="/marco institucional" >Marco Institucional</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>


                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setMenu(false)
                        setPoblacional(true)
                    }}>
                        <Link to="/Componente poblacional" >Componente Poblacional</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setMenu(false)
                        setTerritorial(true)
                    }}>
                        <Link to="/Componente territorial" > Componente Territorial</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                    <li className={styles.navbarItem} id="a"
                        onClick={() => {
                            setMenu(false)
                            setOrdenamiento(true)
                        }}>
                        <Link to="/componente bienestar" >Componente Bienestar</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                    <li className={styles.navbarItem} id="a"
                        onClick={() => {
                            setMenu(false)
                            setModelosUrbanos(true)
                        }}>
                        <Link to="/Modelos Urbanos" >Modelos Urbanos</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/noticias">Noticias</Link>
                    </li>

                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Repositorio/Libros" >Repositorio</Link>


                    </li>
                </ul>}
                {/* Civilidad */}
                {civilidad && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setCivilidad(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Construyendo civilidad
                        </span>
                    </div>

                    <li className={styles.navbarItem} id="a">
                        <Link to="/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá" >La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setCivilidad(false)
                        setCiudadyciudadania(true)
                    }}>
                        <Link to="/construyendo civilidad/Cuidad y cuidadanía" >Ciudad y ciudadanía</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>

                </ul>}

                {/* {Ciudad y ciudadania} */}
                {Ciudadyciudadania && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setCivilidad(true)
                            setCiudadyciudadania(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Ciudad y ciudadanía
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia">Orígenes de la civilidad en Colombia</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja" >Bogotá: una ciudad compleja</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad" >Civilidad y complejidad</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá" >La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</Link>
                    </li>
                </ul>}

                {/* marco institucional */}
                {general && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setGeneral(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Marco Institucional
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a"
                    // onClick={() => {
                    //     setGeneral(false)
                    //     setGeneral_ods(true)
                    // }}
                    >
                        <Link to="/marco institucional/Nueva agenda urbana y los ODS">Nueva agenda urbana y los ODS</Link>
                        {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg> */}
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setGeneral(false)
                        setGeneral_leyes(true)
                    }}>
                        <Link to="/marco institucional/Leyes de ordenamiento territorial" >Leyes de ordenamiento territorial</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setGeneral(false)
                        setGeneral_estructura(true)
                    }}>
                        <Link to="/marco institucional/Estructura administrativa de Bogotá" >Estructura administrativa de Bogotá</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                </ul>}
                {/* general.ODS */}
                {general_ods && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setGeneral(true)
                            setGeneral_ods(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Nueva agenda urbana y los ODS
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente general/Nueva agenda urbana y los ODS/Coloquio la nueva agenda urbana en tiempo de la pandemia">Coloquio la nueva agenda urbana en tiempos de pandemia</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente general/Nueva agenda urbana y los ODS/Para quién es el POT" >¿Para quien es POT?</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente general/Nueva agenda urbana y los ODS/Las grandes incertidumbres y el POT de Bogotá" >Las grandes incertidumbres y el pot de Bogotá</Link>
                    </li>
                </ul>}
                {/* general-leyes */}
                {general_leyes && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setGeneral(true)
                            setGeneral_leyes(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Leyes de ordenamiento territorial
                        </span>
                    </div>
                    {/* <li className={styles.navbarItem} id="a">
                        <Link to="/marco institucional/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997">Antecedes de la Ley 388 de 1997</Link>

                    </li> */}
                    <li className={styles.navbarItem} id="a">
                        <Link to="/marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997" >Esquema de  Ley 388 de 1997</Link>

                    </li>
                    {/* <li className={styles.navbarItem} id="a">
                        <Link to="/marco institucional/Leyes de ordenamiento territorial/Concepto Plan de Ordenamiento Territorial año 2019" >Concepto Plan de Ordenamiento Territorial del año  2019</Link>
                    </li> */}
                </ul>}
                {/* general-estructura */}
                {general_estructura && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setGeneral(true)
                            setGeneral_estructura(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Estructura administrativa de Bogotá
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/marco institucional/Estructura administrativa de Bogotá/Línea del tiempo Estructura Administrativa de Bogotá">Línea de tiempo Estructura Administrativa de Bogotá</Link>
                    </li>
                </ul>}
                {/* territorial */}
                {territorial && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setTerritorial(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Componente territorial
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente territorial/Evokución de la huella urbana">Evolución de la huella urbana</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente territorial/Indicadores urbanísticos" >Indicadores urbanísticos</Link>
                    </li>
                </ul>}

                {/* ordenamiento */}
                {ordenamiento && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setOrdenamiento(false)

                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Componente Bienestar
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setOrdenamiento(false)
                        setInfraestructura(true)
                    }}>
                        <Link to="/componente bienestar/infraestructura">Infraestructura</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setOrdenamiento(false)
                        setEstruturaurbana(true)
                    }}>
                        <Link to="/componente bienestar/Estructura urbana">Estructura urbana</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setOrdenamiento(false)
                        setInstrumentos(true)
                    }}>
                        <Link to="/componente bienestar/instrumento">Instrumentos</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                </ul>}

                {/* poblacional */}
                {poblacional && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setPoblacional(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Componente poblacional
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setPoblacional(false)
                        setConflicto(true)
                    }}>
                        <Link to="/Componente poblacional/Conflicto - civilidad">Conflicto - Civilidad</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setPoblacional(false)
                        setDemografia(true)
                    }}>
                        <Link to="/Componente poblacional/demografía" >Estructura Demográfica</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>

                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setPoblacional(false)
                        setEstructura(true)
                    }}>
                        <Link to="/Componente poblacional/Estructura socioespacial" >Estructura Socioespacial</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setPoblacional(false)
                        setPobreza(true)
                    }}>
                        <Link to="/Componente poblacional/Estructura socioeconómica" >Estructura Socioeconómica</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>

                    </li>
                </ul>}

                {/* poblacional conflicto*/}
                {conflicto && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setConflicto(false)
                            setPoblacional(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Conflicto - Civilidad
                        </span>
                    </div>

                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX" >Bogotá asediada siglo XIX</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia" >Caminos hacia la Independencia</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización" >Demografía: violencia y urbanización</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Conflicto - civilidad/ ¿Por qué tanta discordia?" >¿Por qué tanta discordia?</Link>
                    </li>
                </ul>}

                {/* poblacional demografia*/}
                {demografia && <ul >|1|
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setDemografia(false)
                            setPoblacional(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Estructura Demográfica
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018" >Demografía de Colombia y Bogotá 8en ochenta años 1938 - 2018</Link>

                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/demografía/Series de población" >Series de población</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)" >Crecimiento de la población(1970 - 2035) </Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Demografía/Ecuación compensadora de Bogotá" >Ecuación compensadora de Bogotá (1905 - 2035)</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setDemografia(false)
                        setPiramides(true)
                    }}>
                        <Link to="/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo" >Piramides de distribución edad y sexo</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/Componente poblacional/Demografía/Indices demográficos" >índices demograficos</Link>
                    </li>
                    <li className={styles.navbarItem} id="a"
                    //  onClick={() => {
                    //     setDemografia(false)
                    //     setProyecciones(true)
                    // }}
                    >
                        <Link to="/Componente poblacional/Demografía/Proyecciones de población" >Proyecciones de población</Link>
                        {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg> */}
                    </li>
                    {/* <li className={styles.navbarItem} id="a" >
                        <Link to="/" >Evaluación demográfica de Colombia y Bogotá (1938 - 2018)</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/" >Demografía Violencia y Urbanización</Link>
                    </li> */}
                </ul>}
                {/* poblacional pobreza*/}
                {estructura && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setEstructura(false)
                            setPoblacional(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Estructura Socioespacial
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades" >Segregación espacial por localidades</Link>
                    </li>
                </ul>}
                {/* poblacional */}
                {pobreza && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setPobreza(false)
                            setPoblacional(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Estructura Socioeconómica
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Estructura socioeconómica/Pobreza en Colombia y Bogotá" >Ánálisis de pobreza en Colombia y Bogotá 2018</Link>
                    </li>
                </ul>}

                {/* poblacional demografia proyecciones*/}
                {piramides && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setPiramides(false)
                            setDemografia(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Piramides de distribución edad y sexo
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá" >                        Piramides de distribución edad y sexo
                            en Colombia y Bogotá</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos" >Comparador piramides Colombia y Bogotá por censos</Link>
                    </li>
                </ul>}

                {/* poblacional demografia piramides*/}
                {/* {proyecciones && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setProyecciones(false)
                            setDemografia(true)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Proyecciones de población
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Demografía/Proyecciones de población/Análisis de migraciones en Bogotá y municipios 2018" >                        Análisis de migraciones en Bogotá y municipios 2018</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Componente poblacional/Demografía/Proyecciones de población/Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana" >Dinámica demografica y modelos de ocupación del suelo en Bogotá y la Sabana</Link>
                    </li>
                </ul>} */}

                {/*  bienestar infreaestrura */}
                {Infraestructura && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setOrdenamiento(true)
                            setInfraestructura(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Infraestructura
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setInfraestructura(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema vial y de transporte">Sistema Vial y de Transporte</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setInfraestructura(false)
                        setEspacioPublico(true)
                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de espacio público y equipamientos" >Sistema de Espacio Público</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setInfraestructura(false)
                        setServiciosPublicos(true)
                    }}>
                        <Link to="/componente ordenamiento/Infraestructura/Sistema de servicios públicos" >Sistema de Servicios Públicos</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                </ul>}

                {/*  bienestar estructura urbana */}
                {estructuraUrbana && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setOrdenamiento(true)
                            setEstruturaurbana(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Estructura urbana
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEstruturaurbana(false)
                        setSistemaU(true)
                    }}>
                        <Link to="/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)">Sistemas urbanos (subdivisón y lotificación)</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEstruturaurbana(false)
                        setVivienda(true)
                    }}>
                        <Link to="/componente bienestar/Estructura urbana/Vivienda, comercio e industria" >Vivienda, comercio e industria</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEstruturaurbana(false)
                        setNormasU(true)
                    }}>
                        <Link to="/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas" >Tratamientos y normas urbanísticas</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                </ul>}

                {sistemaU && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setEstruturaurbana(true)
                            setSistemaU(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Sistemas urbanos (subdivisón y lotificación)
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Historia de barrios">Historia de barrios</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Condiciones de habitabilidad UPZ" >Condiciones de habitabilidad UPZ</Link>

                    </li>
                </ul>}

                {vivienda && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setEstruturaurbana(true)
                            setVivienda(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Vivienda, comercio e industria
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos" >Desarrollos urbanísticos</Link>

                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda">Línea de tiempo Historia de la vivienda</Link>
                    </li>

                </ul>}

                {normasU && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setEstruturaurbana(true)
                            setNormasU(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Tratamientos y normas urbanísticas
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Conservación" >Conservación</Link>

                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Renovación">Renovación</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Desarrollo" >Desarrollo</Link>

                    </li>
                </ul>}

                {/*  bienestar Instrumentos */}
                {instrumentos && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setOrdenamiento(true)
                            setEstruturaurbana(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Instrumentos
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/componente bienestar/instrumentos/Planificación">Planificación</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" >
                        <Link to="/componente bienestar/instrumentos/Gestión" >Gestión</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/componente bienestar/instrumentos/Financiación" >Financiación</Link>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17V7L15 12L10 17Z" fill="#5E2609" />
                        </svg>
                    </li>
                </ul>}
                {espacioPublicos && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setInfraestructura(true)
                            setEspacioPublico(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Sistema de Espacio Público
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas">Plazas, Plazoletas, Parques y Monumentos</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Equipamentos" >Equipamientos</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Iglesias" >Iglesias</Link>
                    </li>
                </ul>}
                {serviciosPublicos && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setInfraestructura(true)
                            setServiciosPublicos(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Sistema de Serviciois Públicos
                        </span>
                    </div>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto">Agua y Alcantarillado</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de servicios públicos/Gas">Sistema de Gas</Link>
                    </li>
                    <li className={styles.navbarItem} id="a" onClick={() => {
                        setEspacioPublico(false)

                    }}>
                        <Link to="/componente bienestar/infraestructura/Sistema de servicios públicos/Energia">Sistema de Energìa Elèctrica</Link>
                    </li>

                </ul>}

                {/* Modelos urbanos */}
                {ModelosUrbanos && <ul >
                    <div className={styles.atras}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setMenu(true)
                            setModelosUrbanos(false)
                        }}>
                            <path d="M15.92 7.00008V9.00008H3.92002L9.42002 14.5001L8.00002 15.9201L0.0800171 8.00008L8.00002 0.0800781L9.42002 1.50008L3.92002 7.00008H15.92Z" fill="#5E2609" />
                        </svg>
                        <span >
                            Modelos Urbanos
                        </span>
                    </div>

                    <li className={styles.navbarItem} id="a">
                        <Link to="/Modelos Urbanos/Bogotá Colonial" >Bogotá Colonial</Link>
                    </li>
                    <li className={styles.navbarItem} id="a">
                        <Link to="/Modelos Urbanos/Bogotá Republicana" >Bogotá Republicana</Link>
                    </li>
                </ul>}

            </div>}

        </nav>

    );
};

export default NavbarResponsive;