import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {

    const [showCivilidad, setShowCivilidad] = useState(false);
    const [showCivil, setShowCivil] = useState(false);
    const [showGener, setShowGener] = useState(false);
    const [showGeneral, setShowGeneral] = useState(false);
    const [showPoblacional, setShowPoblacional] = useState(false);
    const [showPob, setShowPob] = useState(false);
    const [showTerritorial, setShowTerritorial] = useState(false);
    const [showTerrit, setShowTerrit] = useState(false);
    const [showOrdenamiento, setShowOrdenamiento] = useState(false);
    const [showModelosU, setshowModelosU] = useState(false)
    const [showModelosUrbanos, setshowModelosUrbanos] = useState(false)
    const [showOrdena, setShowOrdena] = useState(false);
    const [showNoticias, setShowNoticias] = useState(false);

    const [selectedBogotaYCivilidad, setselectedBogotaYCivilidad] = useState(false)
    const [selectedLeyes, setSelectedLeyes] = useState(false);
    const [selectedOds, setSelectedOds] = useState(false);
    const [selectedEstructura, setSelectedEstructura] = useState(false);
    const [selectedCivilidad, setSelectedCivilidad] = useState(false);
    const [selectedDemografia, setSelectedDemografia] = useState(false);
    const [selectedPiramides, setSelectedPiramides] = useState(false);
    const [selectedProyecciones, setSelectedProyecciones] = useState(false);
    const [selectedPobreza, setSelectedPobreza] = useState(false);
    const [selectedEstructuraSocial, setSelectedEstructuraSocial] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);



    const removebackground = () => {
        setSelectedLeyes(false)
        setSelectedOds(false)
        setSelectedEstructura(false)
    }

    const removebackgroundPoblacional = () => {
        setSelectedCivilidad(false)
        setSelectedDemografia(false)
        setSelectedPobreza(false)
        setSelectedEstructuraSocial(false)
    }

    const removebackgroundDemografia = () => {
        setSelectedPiramides(false)
        setSelectedProyecciones(false)
    }



    const toggleInicio = () => {
        setShowCivil(false);
        setShowNoticias(false);
        setShowGeneral(false);
        setShowGener(false);
        setShowPoblacional(false);
        setShowPob(false);
        setShowTerritorial(false);
        setShowTerrit(false);
        setShowCivilidad(false);
        setShowOrdenamiento(false);
        setShowOrdena(false);
        setshowModelosU(false);
        setshowModelosUrbanos(false);
    }

    const toggleCivilidad = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setShowCivil(!showCivil);
            setShowCivilidad(false);
            setShowGeneral(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowGener(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
        else {
            setShowCivil(false);
            setShowCivilidad(!showCivilidad);
            setShowGeneral(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowGener(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
    };

    const toggleGeneral = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setShowCivil(false);
            setShowGener(!showGener);
            setShowGeneral(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
        else {
            setShowCivil(false);
            setShowGeneral(!showGeneral);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
    };

    const togglePoblacional = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setShowPob(!showPob);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
        else {
            setShowPoblacional(!showPoblacional);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
    };

    const toggleTerritorial = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setShowTerrit(!showTerrit);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
        else {
            setShowTerritorial(!showTerritorial);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
    };

    const toggleOrdenamiento = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setShowOrdena(!showOrdena);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
        else {
            setShowOrdenamiento(!showOrdenamiento);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
            setshowModelosUrbanos(false);
        }
    };

    const toggleModelosU = () => {
        var pant = screen.height;
        pant = (pant / 8) * 1.5;
        var s = scrollTop;
        if (s > pant) {
            setshowModelosU(!showModelosU);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowOrdenamiento(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setshowModelosUrbanos(false);
        }
        else {

            setshowModelosUrbanos(!showModelosUrbanos);
            setShowCivil(false);
            setShowGeneral(false);
            setShowGener(false);
            setShowCivilidad(false);
            setShowPoblacional(false);
            setShowTerritorial(false);
            setShowNoticias(false);
            setShowPob(false);
            setShowTerrit(false);
            setShowOrdena(false);
            setshowModelosU(false);
        }
    }

    const toggleNoticiasl = () => {
        setShowNoticias(!showNoticias);
        setShowCivil(false);
        setShowGeneral(false);
        setShowGener(false);
        setShowCivilidad(false);
        setShowPoblacional(false);
        setShowTerritorial(false);
        setShowOrdenamiento(false);
        setShowPob(false);
        setShowTerrit(false);
        setShowOrdena(false);
    };



    const mostrarLi = (ul) => {
        console.log(ul);
        var ulElement = document.querySelector(`${"." + ul}`);
        if (ulElement) {
            // Obtener todos los elementos li hijos del ul
            var liElements = ulElement.querySelectorAll("li");
            // Iterar sobre los elementos li
            for (var i = 0; i < liElements.length; i++) {
                // Eliminar la clase "invisible" de cada elemento li
                liElements[i].classList.remove("invisible");
            }
        }
    }

    const esconderLi = (ul) => {

        var ulElement = document.querySelector(`${"." + ul}`);

        if (ulElement) {
            // Obtener todos los elementos li hijos del ul
            var liElements = ulElement.querySelectorAll("li");

            // Iterar sobre los elementos li
            for (var i = 0; i < liElements.length; i++) {
                // Eliminar la clase "invisible" de cada elemento li
                liElements[i].classList.add("invisible");
            }
        }
    }

    const mostrarMenu2 = (type, ul) => {
        console.log(type, ul)
        if (type === 2) {
            if (ul === 'Civil-2') {
                mostrarLi(ul)
                // esconderLi('General-2')
                // esconderLi('General-3')
            }
        }
        if (type === 2) {
            if (ul === 'General-1') {
                mostrarLi(ul)
                esconderLi('General-2')
                esconderLi('General-3')
            } else if (ul === 'General-2') {
                mostrarLi(ul)
                esconderLi('General-1')
                esconderLi('General-3')
            } else if (ul === 'General-3') {
                mostrarLi(ul)
                esconderLi('General-2')
                esconderLi('General-1')
            }
        } if (type === 3) {
            if (ul === 'Pob-1') {
                mostrarLi(ul)
                esconderLi('Pob-2')
                esconderLi('Pob-3')
                esconderLi('Pob-4')
                esconderLi('Pob-2d')
                esconderLi('Pob-2f')
            } else if (ul === 'Pob-2') {
                mostrarLi(ul)
                esconderLi('Pob-1')
                esconderLi('Pob-4')
                esconderLi('Pob-3')

            } else if (ul === 'Pob-3') {
                mostrarLi(ul)
                esconderLi('Pob-1')
                esconderLi('Pob-2')
                esconderLi('Pob-4')

            } else if (ul === 'Pob-4') {
                mostrarLi(ul)
                esconderLi('Pob-1')
                esconderLi('Pob-2')
                esconderLi('Pob-3')
            } else if (ul === 'Pob-2d') {
                mostrarLi(ul)
                esconderLi('Pob-2f')
            } else if (ul === 'Pob-4d') {
                mostrarLi(ul)
                esconderLi('Pob-2f')
            } else if (ul === 'Pob-2f') {
                mostrarLi(ul)
                esconderLi('Pob-2d')
            }
        }if (type === 3) {
            if (ul === 'Bien-2') {
                mostrarLi(ul)
                esconderLi('Pob-2')
            }
            if (ul === 'Bien-1') {
                mostrarLi(ul)
                esconderLi('Pob-2')
            }
            if (ul === 'Bien-1a') {
                mostrarLi(ul)
                // esconderLi('Pob-2')
            }
            if (ul === 'Bien-1b') {
                mostrarLi(ul)
                // esconderLi('Pob-2')
            }
            if (ul === 'Bien-1c') {
                mostrarLi(ul)
                // esconderLi('Pob-2')
            }
        }
    }

    const esconderTodo = () => {
        var elementos = document.querySelectorAll('.option');
        // Recorrer la lista de elementos y agregar la clase "invisible"
        elementos.forEach(function (elemento) {
            elemento.classList.add('invisible');
        });
        setShowCivil(false);
        setShowNoticias(false);
        setShowGeneral(false);
        setShowGener(false);
        setShowPoblacional(false);
        setShowPob(false);
        setShowTerritorial(false);
        setShowTerrit(false);
        setShowCivilidad(false);
        setShowOrdenamiento(false);
        setShowOrdena(false);
        setshowModelosU(false);
        setshowModelosUrbanos(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
            var elem = document.getElementById('navbar-principal');
            var pant = screen.height;
            pant = (pant / 8) * 1.5;
            if (window.scrollY > pant) {
                elem.classList.remove("navbar-principal");
                elem.classList.add("pegar");
            }
            else {
                elem.classList.remove("pegar");
                elem.classList.add("navbar-principal");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (

        <div id='top' className="row-12" onChange={() => {
            esconderTodo()
        }} onMouseLeave={() => {
            esconderTodo()
        }} >
            <header id='header' className='col-lg' onMouseOver={() => {
                esconderTodo()
            }} >
                <div className='header-img' id='hola'>
                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/">
                        <img src="https://geoapps.esri.co/recursos/SMOB/logo.png" alt="logo" style={{ width: '6vw', height: '12vh', marginLeft: '-50%' }} />
                        <img src="https://geoapps.esri.co/recursos/SMOB/logo_plataforma.png" alt="logo" style={{ width: '6vw', height: '12vh' }} />
                    </Link></div>
                <div className='header-title' id='hola'>
                    <h1>Construyendo civilidad: ciudad y ciudadanía
                    </h1>
                </div>
            </header>

            <nav id='navbar-principal' className='col-lg-12 navbar-principal' onChange={() => {
                esconderTodo()
            }}>
                <li className='navbar-item' onMouseOver={toggleInicio}><span className="linea" >
                    <a className='dowmLogo'><Link to="/sociedad-de-mejoras-y-ornato-bogota/" ><p className='letra'>Inicio</p></Link></a>
                </span></li>
                <li className='navbar-item' ><span className="linea" >
                    <a className='dowmLogo'  ><Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad"><p className='letra'>Construyendo<br />Civilidad </p></Link></a>
                </span><i onClick={toggleCivilidad} className='ic'>▼</i></li>
                <li className='navbar-item'><span className="linea">
                    <a className='dowmLogo' ><Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional"><p className='letra'>Marco<br />institucional </p></Link></a>
                </span><i onClick={toggleGeneral} className='ic'>▼</i></li>
                <li className='navbar-item'><span className="linea">
                    <a className='dowmLogo' ><Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional"><p className='letra'>Componente<br />Poblacional</p></Link></a>
                </span><i onClick={togglePoblacional} className='ic'>▼</i></li>
                <li className='navbar-item'><span className="linea">
                    <a className='dowmLogo'><Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial"><p className='letra'>Componente<br />Territorial</p></Link></a>
                </span><i onClick={toggleTerritorial} className='ic'>▼</i></li>
                <li className='navbar-item' > <span className="linea">
                    <a className='dowmLogo' ><Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar"><p className='letra'>Componente<br />Bienestar</p></Link></a>
                </span><i onClick={toggleOrdenamiento} className='ic'>▼</i></li>
                <li className='navbar-item' > <span className="linea">
                    <a className='dowmLogo' ><Link to="/sociedad-de-mejoras-y-ornato-bogota/Modelos Urbanos"><p className='letra'>Modelos<br />Urbanos</p></Link></a>
                </span><i onClick={toggleModelosU} className='ic'>▼</i></li>
                <li className='navbar-item'  ><span className="linea">
                    <a className='dowmLogo' onClick={toggleNoticiasl}><Link to="/sociedad-de-mejoras-y-ornato-bogota/noticias" ><p className='letra'>Noticias</p></Link></a>
                </span></li>
                <li className='navbar-item'><span className="linea" style={{ border: 'transparent' }}>
                    <a className='dowmLogo'  ><Link to="/sociedad-de-mejoras-y-ornato-bogota/Repositorio/Libros"><p className='letra'>Repositorio</p></Link></a>
                </span></li>
            </nav>



            {/* Civilidad */}
            {
                showCivilidad && <div id='submenu' className='submenu-civilidad' >
                    <div className='submenu-item submenu-1'>
                        <ul onMouseLeave={() => {
                            esconderTodo()
                        }}>
                            <li className='option' >
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                                    <p className='letra-sub'>La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</p>
                                </Link>
                            </li>
                            <li className={`option ${selectedOds ? 'selected-menu' : ''}`} onMouseOver={() => {
                                removebackground()
                                setselectedBogotaYCivilidad(true)
                                mostrarMenu2(2, "Civil-2")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía"><p className='letra-sub'>Ciudad y ciudadanía</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2' onMouseLeave={() => {
                        // esconderTodo()
                    }}>
                        <div className='submenu-item submenu-1-1' >
                            <ul className='Civil-2'>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Cuidadanía y civilidad">
                                        <p className='letra-sub'>Cuidadanía y civilidad</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia">
                                        <p className='letra-sub'>Orígenes de la civilidad en Colombia</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja">
                                        <p className='letra-sub'>Bogotá: una ciudad compleja</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad">
                                        <p className='letra-sub'>Civilidad y complejidad</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                                        <p className='letra-sub'>   La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}

            {/* Civil*/}
            {
                showCivil && <div className='smc'>
                    <div className='submenu-item submenu-1'>
                        <ul onMouseLeave={() => {
                            // esconderTodo()
                        }}>
                            <li className='option' >
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                                    <p className='letra-sub'>La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</p>
                                </Link>
                            </li>
                            <li className='option' onMouseOver={() => {
                                removebackground()
                                setselectedBogotaYCivilidad(true)
                                mostrarMenu2(2, "Civil-2")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía"><p className='letra-sub'>Ciudad y ciudadanía</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2' >
                        <div className='submenu-item submenu-1-1' >
                            <ul className='Civil-2'>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Cuidadanía y civilidad">
                                        <p className='letra-sub'>Cuidadanía y civilidad</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia">
                                        <p className='letra-sub'>Orígenes de la civilidad en Colombia</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja">
                                        <p className='letra-sub'>Bogotá: una ciudad compleja</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad">
                                        <p className='letra-sub'>Civilidad y complejidad</p>
                                    </Link>
                                </li>
                                <li className='option invisible'>
                                    <Link to="/sociedad-de-mejoras-y-ornato-bogota/construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                                        <p className='letra-sub'>   La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}
            {/*Modelos urbanos*/}
            {
                showModelosUrbanos && <div className='submenu-ordenamiento'>
                    <div className='submenu-item submenu-1'>
                        <ul onMouseLeave={() => {
                            esconderTodo()
                        }}>
                            <li className='option'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Modelos Urbanos/Bogotá Colonial">
                                    <p className='letra-sub'>Bogotá Colonial</p>
                                </Link>
                            </li>
                            <li className='option'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Modelos Urbanos/Bogotá Republicana">
                                    <p className='letra-sub'>Bogotá Republicana</p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>}

            {/* General */}
            {showGeneral && <div className='submenu-general' id='submg' onChange={() => {
                esconderTodo()

            }} onMouseLeave={() => {
                esconderTodo()
            }} >
                <div className='submenu-item submenu-1' onChange={() => {
                    esconderTodo()
                }} >
                    <ul>
                        <li className={`option ${selectedOds ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedOds(true)
                            mostrarMenu2(2, "General-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Nueva agenda urbana y los ODS"><p className='letra-sub'>Nueva agenda urbana y los ODS</p></Link>
                        </li>
                        <li className={`option ${selectedLeyes ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedLeyes(true)
                            mostrarMenu2(2, "General-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Leyes de ordenamiento territorial"><p className='letra-sub'>Leyes de ordenamiento territorial</p></Link>
                        </li>
                        <li className={`option ${selectedEstructura ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedEstructura(true)
                            mostrarMenu2(2, "General-3")
                        }} >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Estructura administrativa de Bogotá"><p className='letra-sub'>Estructura administrativa de Bogotá</p></Link>
                        </li>
                    </ul>

                </div>
                <div className='submenu-item submenu-2' onMouseLeave={() => {
                    esconderTodo()
                }}>
                    <div className='submenu-item submenu-2-1'>
                        <ul className='General-1'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Coloquio la nueva agenda urbana en tiempo de la pandemia">
                                    <p className='letra-sub'>Coloquio la nueva agenda urbana en tiempo de la pandemía</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Para quién es el POT">
                                    <p className='letra-sub'>¿Para quien es el POT?</p>
                                </Link>
                            </li>
                            <li className='option invisible'>

                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Las grandes incertidumbres y el POT de Bogotá">
                                    <p className='letra-sub'>Las grandes incertidumbres y el POT de Bogotá</p>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-2'>
                        <ul className='General-2'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997">
                                    <p className='letra-sub'>Antecedentes de la Ley 388 de 1997</p>
                                </Link></li> */}
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997">
                                    <p className='letra-sub'> Esquema de la Ley 388 de 1997</p>
                                </Link>
                            </li>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Leyes de ordenamiento territorial/Concepto Plan de Ordenamiento Territorial año 2019">
                                    <p className='letra-sub'>Concepto Plan de Ordenamiento Territorial año 2019</p>
                                </Link>

                            </li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-3'>
                        <ul className='General-3'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Estructura administrativa de Bogotá/Línea del tiempo Estructura Administrativa de Bogotá"><p className='letra-sub'>Línea del tiempo Estructura Administrativa de Bogotá</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}

            {/* Gener */}
            {showGener && <div className='smg' onChange={() => {
                esconderTodo()

            }} onMouseLeave={() => {
                esconderTodo()
            }} >
                <div className='submenu-item submenu-1' onChange={() => {
                    esconderTodo()
                }} >
                    <ul>
                        <li className={`option ${selectedOds ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedOds(true)
                            mostrarMenu2(2, "General-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Nueva agenda urbana y los ODS"><p className='letra-sub'>Nueva agenda urbana y los ODS</p></Link>
                        </li>
                        <li className={`option ${selectedLeyes ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedLeyes(true)
                            mostrarMenu2(2, "General-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Leyes de ordenamiento territorial"><p className='letra-sub'>Leyes de ordenamiento territorial</p></Link>
                        </li>
                        <li className={`option ${selectedEstructura ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            setSelectedEstructura(true)
                            mostrarMenu2(2, "General-3")
                        }} >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Estructura administrativa de Bogotá"><p className='letra-sub'>Estructura administrativa de Bogotá</p></Link>
                        </li>
                    </ul>

                </div>
                <div className='submenu-item submenu-2' onMouseLeave={() => {
                    esconderTodo()
                }}>
                    <div className='submenu-item submenu-2-1'>
                        <ul className='General-1'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Coloquio la nueva agenda urbana en tiempo de la pandemia">
                                    <p className='letra-sub'>Coloquio la nueva agenda urbana en tiempo de la pandemía</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Para quién es el POT">
                                    <p className='letra-sub'>¿Para quien es el POT?</p>
                                </Link>
                            </li>
                            <li className='option invisible'>

                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Nueva agenda urbana y los ODS/Las grandes incertidumbres y el POT de Bogotá">
                                    <p className='letra-sub'>Las grandes incertidumbres y el POT de Bogotá</p>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-2'>
                        <ul className='General-2'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Leyes de ordenamiento territorial/Antecedentes de la Ley 388 de 1997">
                                    <p className='letra-sub'>Antecedentes de la Ley 388 de 1997</p>
                                </Link></li> */}
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Leyes de ordenamiento territorial/Esquema de la Ley 388 de 1997">
                                    <p className='letra-sub'> Esquema de la Ley 388 de 1997</p>
                                </Link>
                            </li>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente general/Leyes de ordenamiento territorial/Concepto Plan de Ordenamiento Territorial año 2019">
                                    <p className='letra-sub'>Concepto Plan de Ordenamiento Territorial año 2019</p>
                                </Link>

                            </li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-3'>
                        <ul className='General-3'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/marco institucional/Estructura administrativa de Bogotá/Línea del tiempo Estructura Administrativa de Bogotá"><p className='letra-sub'>Línea del tiempo Estructura Administrativa de Bogotá</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}



            {/* Poblacional */}
            {showPoblacional && <div className='submenu-poblacional' id='submp' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul >
                        <li className={`option ${selectedCivilidad ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            removebackground()
                            setSelectedCivilidad(true)
                            mostrarMenu2(3, "Pob-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad">
                                <p className='letra-sub'>Conflicto - civilidad</p>
                            </Link>

                        </li>
                        <li className={`option ${selectedDemografia ? 'selected-menu' : ''}`} onMouseOver={() => {
                            /*removebackgroundDemografia()*/
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedDemografia(true)
                            mostrarMenu2(3, "Pob-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía">
                                <p className='letra-sub'>Estructura Demográfica</p>
                            </Link>
                        </li>
                        <li className={`option ${selectedPobreza ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedPobreza(true)
                            mostrarMenu2(3, "Pob-4")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioespacial">
                                <p className='letra-sub'>Estructura Socioespacial</p>
                            </Link>
                        </li>
                        <li className={`option ${selectedEstructuraSocial ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackgroundDemografia()
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedEstructuraSocial(true)
                            mostrarMenu2(3, "Pob-3")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioeconómica">
                                <p className='letra-sub'>Estructura Socioeconómica</p>
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className='submenu-item submenu-2'>
                    <div className='submenu-item submenu-2-1'>
                        <ul className='Pob-1'>

                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX">
                                    <p className='letra-sub'>Bogotá Asediada siglo XIX</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia">
                                    <p className='letra-sub'>Caminos hacia la Independencia</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización">
                                    <p className='letra-sub'>Demografía: violencia y urbanización</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ ¿Por qué tanta discordia?">
                                    <p className='letra-sub'>¿Por qué tanta discordía?</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-2'>
                        <ul className='Pob-2'>
                            <li className='option invisible'
                            //  onMouseOver={() => {
                            //         esconderLi('Pob-2f')
                            //         esconderLi('Pob-2d')
                            //         setSelectedPiramides(false)
                            //         setSelectedProyecciones(false)
                            //         mostrarMenu2(3, "Pob-2")
                            //     }}
                            >
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018">
                                    <p className='letra-sub'>Demografía de Colombia y Bogotá 80 años</p>
                                </Link>
                            </li>
                            <li className='option invisible' onMouseOver={() => {
                                esconderLi('Pob-2f')
                                esconderLi('Pob-2d')
                                setSelectedPiramides(false)
                                setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía/Series de población"><p className='letra-sub'>Series de población</p></Link>
                            </li>
                            <li className='option invisible'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')
                                    setSelectedPiramides(false)
                                    setSelectedProyecciones(false)
                                    mostrarMenu2(3, "Pob-2")
                                }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)"><p className='letra-sub'>Crecimiento de la población(1790 - 2035)</p></Link>
                            </li>
                            <li className='option invisible'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')
                                    setSelectedPiramides(false)
                                    setSelectedProyecciones(false)
                                    mostrarMenu2(3, "Pob-2")
                                }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Ecuación compensadora de Bogotá"><p className='letra-sub'>Ecuación compensadora de Bogotá(1905 - 2035)</p></Link> </li>
                            <li className={` ${selectedPiramides ? 'option selected-menu' : 'option invisible'}`} onMouseOver={() => {
                                setSelectedPiramides(false)
                                // setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2d")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo">
                                    <p className='letra-sub'>Pirámides de distribucción por edad y sexo</p>
                                </Link>
                            </li>
                            <li className='option'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')
                                }}
                            >
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Indices demográficos">
                                    <p className='letra-sub'>índices demográficos</p>
                                </Link>
                            </li>
                            <li className={` ${selectedProyecciones ? 'option selected-menu' : 'option invisible'}`} onMouseOver={() => {

                                setSelectedPiramides(false)
                                setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2f")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población">
                                    <p className='letra-sub'>Proyecciones de población</p>
                                </Link>
                            </li>
                            {/* <li className='option invisible'>
                                <p className='letra-sub'>Evaluación demográfica de Colombia y Bogotá(1938 - 2018)</p>
                            </li>
                            <li className='option invisible'><p className='letra-sub'>Demográfia: violencia y urbanización</p></li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-3'>
                        <ul className='Pob-3'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioeconómica/Pobreza en Colombia y Bogotá">
                                    <li className='option invisible'><p className='letra-sub'>Pobreza en Colombia y Bogotá 2018</p></li>
                                </Link></li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-4'>
                        <ul className='Pob-4'>


                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades">
                                    <p className='letra-sub'>Segregación espacial por localidades</p>
                                </Link></li>
                        </ul>
                    </div>
                </div>
                <div className='submenu-item submenu-3'>
                    <div className='submenu-item submenu-3-1'>
                        <ul className='Pob-2d'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá">
                                    <p className='letra-sub'> Pirámides de distribución por edad y sexo de Colombia o Bogotá</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos">
                                    <p className='letra-sub'>Comparador pirámides Colombia y Bogotá por censos</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-3-2'>
                        <ul className='Pob-2f'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población/Análisis de migraciones en Bogotá y municipios 2018">
                                    <p className='letra-sub'>Análisis de migraciones en Bogotá y municipios 2018</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población/Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana">
                                    <p className='letra-sub'>Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana</p>
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>}

            {/* Pob */}
            {showPob && <div className='smp' id='submp' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul >
                        <li className={`option ${selectedCivilidad ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackgroundPoblacional()
                            removebackgroundDemografia()
                            removebackground()
                            setSelectedCivilidad(true)
                            mostrarMenu2(3, "Pob-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad">
                                <p className='letra-sub'>Conflicto - civilidad</p>
                            </Link>

                        </li>
                        <li className={`option ${selectedDemografia ? 'selected-menu' : ''}`} onMouseOver={() => {
                            /*removebackgroundDemografia()*/
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedDemografia(true)
                            mostrarMenu2(3, "Pob-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía">
                                <p className='letra-sub'>Estructura Demográfica</p>
                            </Link>
                        </li>

                        <li className={`option ${selectedPobreza ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedPobreza(true)
                            mostrarMenu2(3, "Pob-4")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioespacial">
                                <p className='letra-sub'>Estructura Socioespacial</p>
                            </Link>
                        </li>
                        <li className={`option ${selectedEstructuraSocial ? 'selected-menu' : ''}`} onMouseOver={() => {
                            removebackgroundDemografia()
                            removebackground()
                            removebackgroundPoblacional()
                            setSelectedEstructuraSocial(true)
                            mostrarMenu2(3, "Pob-3")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioeconómica">
                                <p className='letra-sub'>Estructura Socioeconómica</p>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className='submenu-item submenu-2'>
                    <div className='submenu-item submenu-2-1'>
                        <ul className='Pob-1'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ Bogotá asediada siglo XIX">
                                    <p className='letra-sub'>Bogotá Asediada siglo XIX</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/Caminos hacia la Independencia">
                                    <p className='letra-sub'>Caminos hacia la Independencia</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ Demografía: violencia y urbanización">
                                    <p className='letra-sub'>Demografía: violencia y urbanización</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Conflicto - civilidad/ ¿Por qué tanta discordia?">
                                    <p className='letra-sub'>¿Por qué tanta discordía?</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-2'>
                        <ul className='Pob-2'>
                            <li className='option invisible'
                            //  onMouseOver={() => {
                            //         esconderLi('Pob-2f')
                            //         esconderLi('Pob-2d')
                            //         setSelectedPiramides(false)
                            //         setSelectedProyecciones(false)
                            //         mostrarMenu2(3, "Pob-2")
                            //     }}
                            >
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía/Evolución demográfica de Colombia y Bogotá en ochenta años 1938 - 2018">
                                    <p className='letra-sub'>Demografía de Colombia y Bogotá 80 años</p>
                                </Link>
                            </li>
                            <li className='option invisible' onMouseOver={() => {
                                esconderLi('Pob-2f')
                                esconderLi('Pob-2d')
                                setSelectedPiramides(false)
                                setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/demografía/Series de población"><p className='letra-sub'>Series de población</p></Link>
                            </li>
                            <li className='option invisible'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')
                                    setSelectedPiramides(false)
                                    setSelectedProyecciones(false)
                                    mostrarMenu2(3, "Pob-2")
                                }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Crecimiento de la población (1790 - 2035)"><p className='letra-sub'>Crecimiento de la población(1790 - 2035)</p></Link>
                            </li>
                            <li className='option invisible'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')
                                    setSelectedPiramides(false)
                                    setSelectedProyecciones(false)
                                    mostrarMenu2(3, "Pob-2")
                                }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Ecuación compensadora de Bogotá"><p className='letra-sub'>Ecuación compensadora de Bogotá(1905 - 2035)</p></Link> </li>
                            <li className={` ${selectedPiramides ? 'option selected-menu' : 'option invisible'}`} onMouseOver={() => {
                                setSelectedPiramides(false)
                                // setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2d")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo">
                                    <p className='letra-sub'>Pirámides de distribucción por edad y sexo</p>
                                </Link>
                            </li>
                            <li className='option invisible'
                                onMouseOver={() => {
                                    esconderLi('Pob-2f')
                                    esconderLi('Pob-2d')

                                }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Indices demográficos">
                                    <p className='letra-sub'>Índices demográficos</p>
                                </Link>
                            </li>
                            <li className={` ${selectedProyecciones ? 'option selected-menu' : 'option invisible'}`} onMouseOver={() => {

                                setSelectedPiramides(false)
                                setSelectedProyecciones(false)
                                mostrarMenu2(3, "Pob-2f")
                            }}>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población">
                                    <p className='letra-sub'>Proyecciones de población</p>
                                </Link>
                            </li>
                            {/* <li className='option invisible'>
                                <p className='letra-sub'>Evaluación demográfica de Colombia y Bogotá(1938 - 2018)</p>
                            </li>
                            <li className='option invisible'><p className='letra-sub'>Demográfia: violencia y urbanización</p></li> */}
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-3'>
                        <ul className='Pob-3'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioeconómica/Pobreza en Colombia y Bogotá">
                                    <p className='letra-sub'>Pobreza en Colombia y Bogotá 2018</p>
                                </Link></li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-2-4'>
                        <ul className='Pob-4'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Estructura socioespacial/Segregación espacial por Localidades">
                                    <p className='letra-sub'>Segregación espacial por localidades</p>
                                </Link></li>
                        </ul>
                    </div>
                </div>
                <div className='submenu-item submenu-3'>
                    <div className='submenu-item submenu-3-1'>
                        <ul className='Pob-2d'>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Pirámides de distribución por edad y sexo de Colombia o Bogotá">
                                    <p className='letra-sub'> Pirámides de distribución por edad y sexo de Colombia o Bogotá</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Pirámides de distribución por edad y sexo/Comparador pirámides Colombia y Bogotá por censos">
                                    <p className='letra-sub'>Comparador pirámides Colombia y Bogotá por censos</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu-item submenu-3-2'>
                        <ul className='Pob-2f'>
                            {/* <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población/Análisis de migraciones en Bogotá y municipios 2018">
                                    <p className='letra-sub'>Análisis de migraciones en Bogotá y municipios 2018</p>
                                </Link>
                            </li>
                            <li className='option invisible'>
                                <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente poblacional/Demografía/Proyecciones de población/Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana">
                                    <p className='letra-sub'>Dinámica demográfica y modelos de ocupación del suelo en Bogotá y la Sabana</p>
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>}


            {/*Territorial  */}
            {showTerritorial && <div className='submenu-territorial' id='submt' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Evokución de la huella urbana">
                                <p className='letra-sub'>Evolución de la huella urbana</p>
                            </Link>
                        </li>
                        {/* <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Historia de huella urbana">
                                <p className='letra-sub'>Historia de la huella urbana</p>
                            </Link>
                        </li> */}
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Indicadores urbanísticos">
                                <p className='letra-sub'>Indicadores urbanísticos</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className='submenu-item submenu-2-2'>
                    <ul className='Pob-2'>
                        <li className='option invisible' >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente ordenamiento/Infraestructura/Sistema vial y de transporte"><p className='letra-sub'>Sistema Vial y de Transporte</p></Link>
                        </li>
                    </ul>
                </div> */}
            </div>}

            {/*Territorial  */}
            {showTerrit && <div className='smt' id='submt' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                    <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Evokución de la huella urbana">
                                <p className='letra-sub'>Evolución de la huella urbana</p>
                            </Link>
                        </li>
                        {/* <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Historia de huella urbana">
                                <p className='letra-sub'>Historia de la huella urbana</p>
                            </Link>
                        </li> */}
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Indicadores urbanísticos">
                                <p className='letra-sub'>Indicadores urbanísticos</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-2-2'>
                    <ul className='Pob-2'>
                        <li className='option invisible' >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente ordenamiento/Infraestructura/Sistema vial y de transporte"><p className='letra-sub'>Sistema Vial y de Transporte</p></Link>
                        </li>
                    </ul>
                </div>
            </div>}

            {/*Territorial  */}
            {showTerrit && <div className='smt' id='submt' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                    <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Evokución de la huella urbana">
                                <p className='letra-sub'>Evolución de la huella urbana</p>
                            </Link>
                        </li>
                        {/* <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Historia de huella urbana">
                                <p className='letra-sub'>Historia de la huella urbana</p>
                            </Link>
                        </li> */}
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Componente territorial/Indicadores urbanísticos">
                                <p className='letra-sub'>Indicadores urbanísticos</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-2-2'>
                    {/* <ul className='Pob-2'>
                        <li className='option invisible' >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente ordenamiento/Infraestructura/Sistema vial y de transporte"><p className='letra-sub'>Sistema Vial y de Transporte</p></Link>
                        </li>
                    </ul> */}
                </div>
            </div>}

            {/* Ordenamiento */}
            {showOrdenamiento && <div className='submenu-ordenamiento' id='submo' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                        <li className='option' onMouseOver={() => {
                            mostrarMenu2(3, "Pob-2")
                            esconderLi("Bien-2")
                            esconderLi("Bien-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura">
                                <p className='letra-sub'>Infraestructura</p>
                            </Link>
                        </li>
                        <li className='option' onMouseOver={() => {
                            // mostrarMenu2(3, "Pob-2")
                            mostrarMenu2(3, "Bien-1")
                            esconderLi("Bien-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana">
                                <p className='letra-sub'>Estructura urbana</p>
                            </Link>
                        </li>

                        <li className='option' onMouseOver={() => {
                            // mostrarMenu2(3, "Pob-2")
                            mostrarMenu2(3, "Bien-2")
                            esconderLi("Bien-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos">
                                <p className='letra-sub'>Instrumentos</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-2'>
                    <ul className='Pob-2'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                esconderLi('Pob-2d')
                                esconderLi('Pob-4d')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema vial y de transporte">
                                <p className='letra-sub'>Sistema Vial y de Transporte</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            esconderLi('Pob-2d')
                            esconderLi('Pob-4d')
                            mostrarMenu2(3, "Pob-2d")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos">
                                <p className='letra-sub'>Sistema de Espacio Público</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                esconderLi('Pob-2d')
                                mostrarMenu2(3, "Pob-4d")
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos">
                                <p className='letra-sub'>Sistema de Servicios Públicos</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                esconderLi('Pob-1c')
                                esconderLi('Bien-1b')
                                mostrarMenu2(3, 'Bien-1a')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)">
                                <p className='letra-sub'>Sistemas urbanos (subdivisón y lotificación)</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            // esconderLi('Pob-2d')
                            // esconderLi('Pob-4d')
                            // mostrarMenu2(3, "Pob-2d")
                            mostrarMenu2(3, 'Bien-1b')
                            esconderLi('Pob-1c')
                            esconderLi('Bien-1a')
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Vivienda, comercio e industria">
                                <p className='letra-sub'>Vivienda, comercio e industria</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // mostrarMenu2(3, "Pob-4d")
                                mostrarMenu2(3, 'Bien-1c')
                                esconderLi('Pob-1a')
                                esconderLi('Bien-1b')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas">
                                <p className='letra-sub'>Tratamientos y normas urbanísticas</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-2'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // esconderLi('Pob-4d')
                                // esconderLi('Bien-2')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Planificación">
                                <p className='letra-sub'>Planificación</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            // esconderLi('Pob-2d')
                            // esconderLi('Pob-4d')
                            // mostrarMenu2(3, "Pob-2d")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Gestión">
                                <p className='letra-sub'>Gestión</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // mostrarMenu2(3, "Pob-4d")
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Financiación">
                                <p className='letra-sub'>Financiación</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-3'>
                    <ul className='Pob-2d'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas">
                                <p className='letra-sub'>Plazas, Plazoletas, Parques y Monumentos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Equipamentos">
                                <p className='letra-sub'>Equipamientos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Iglesias">
                                <p className='letra-sub'>Iglesias</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1a'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Historia de barrios">
                                <p className='letra-sub'>Historia de barrios</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Condiciones de habitabilidad UPZ">
                                <p className='letra-sub'>Condiciones de habitabilidad UPZ</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1b'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos">
                                <p className='letra-sub'>Desarrollos urbanísticos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda">
                                <p className='letra-sub'>Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1c'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Conservación">
                                <p className='letra-sub'>Conservación</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Renovación">
                                <p className='letra-sub'>Renovación</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Desarrollo">
                                <p className='letra-sub'>Desarrollo</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-3'>
                    <ul className='Pob-4d'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto">
                                <p className='letra-sub'>Agua y Alcantarillado</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Gas">
                                <p className='letra-sub'>Sistema de Gas</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Energia">
                                <p className='letra-sub'>Sistema de Energía Eléctrica</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Telecomunicaciones">
                                <p className='letra-sub'>Sistema de Telecomunicaciones</p>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>}

            {/* Ordenamiento */}
            {showOrdena && <div className='smo' id='submo' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                        <li className='option' onMouseOver={() => {
                            mostrarMenu2(3, "Pob-2")
                            esconderLi("Bien-2")
                            esconderLi("Bien-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura">
                                <p className='letra-sub'>Infraestructura</p>
                            </Link>
                        </li>

                        <li className='option' onMouseOver={() => {
                                  mostrarMenu2(3, "Bien-1")
                                   esconderLi("Bien-2")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana">
                                <p className='letra-sub'>Estructura urbana</p>
                            </Link>
                        </li>

                        <li className='option' onMouseOver={() => {
                            mostrarMenu2(3, "Bien-2")
                            esconderLi("Bien-1")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos">
                                <p className='letra-sub'>Instrumentos</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-2'>
                    <ul className='Pob-2'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                esconderLi('Pob-2d')
                                esconderLi('Pob-24')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema vial y de transporte">
                                <p className='letra-sub'>Sistema Vial y de Transporte</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            mostrarMenu2(3, "Pob-2d")
                            esconderLi('Pob-4d')
                        }}>

                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos">
                                <p className='letra-sub'>Sistema de Espacio Público</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                esconderLi('Pob-2d')
                                mostrarMenu2(3, "Pob-4d")
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente ordenamiento/Infraestructura/Sistema de servicios públicos">
                                <p className='letra-sub'>Sistema de servicios públicos</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                esconderLi('Pob-1c')
                                esconderLi('Bien-1b')
                                mostrarMenu2(3, 'Bien-1a')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)">
                                <p className='letra-sub'>Sistemas urbanos (subdivisón y lotificación)</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            // esconderLi('Pob-2d')
                            // esconderLi('Pob-4d')
                            // mostrarMenu2(3, "Pob-2d")
                            mostrarMenu2(3, 'Bien-1b')
                            esconderLi('Pob-1c')
                            esconderLi('Bien-1a')
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Vivienda, comercio e industria">
                                <p className='letra-sub'>Vivienda, comercio e industria</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // mostrarMenu2(3, "Pob-4d")
                                mostrarMenu2(3, 'Bien-1c')
                                esconderLi('Pob-1a')
                                esconderLi('Bien-1b')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas">
                                <p className='letra-sub'>Tratamientos y normas urbanísticas</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-2'>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // esconderLi('Pob-4d')
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Planificación">
                                <p className='letra-sub'>Planificación</p>
                            </Link>
                        </li>
                        <li className='option invisible' onMouseOver={() => {
                            // esconderLi('Pob-2d')
                            // esconderLi('Pob-4d')
                            // mostrarMenu2(3, "Pob-2d")
                        }}>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Gestión">
                                <p className='letra-sub'>Gestión</p>
                            </Link>
                        </li>
                        <li className='option invisible'
                            onMouseOver={() => {
                                // esconderLi('Pob-2d')
                                // mostrarMenu2(3, "Pob-4d")
                            }}
                        >
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/instrumentos/Financiación">
                                <p className='letra-sub'>Financiación</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-3'>
                    <ul className='Pob-2d'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Plazas">
                                <p className='letra-sub'>Plazas, Plazoletas, Parques y Monumentos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Equipamentos">
                                <p className='letra-sub'>Equipamientos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de espacio público y equipamientos/Iglesias">
                                <p className='letra-sub'>Iglesias</p>
                            </Link>
                        </li>
                    </ul>

                    <ul className='Bien-1a'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Historia de barrios">
                                <p className='letra-sub'>Historia de barrios</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Sistemas urbanos (subdivisón y lotificación)/Condiciones de habitabilidad UPZ">
                                <p className='letra-sub'>Condiciones de habitabilidad UPZ</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1b'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Vivienda, comercio e industria/Desarrollos urbanísticos">
                                <p className='letra-sub'>Desarrollos urbanísticos</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/ Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda">
                                <p className='letra-sub'>Vivienda, comercio e industria/Línea de tiempo Historia de la vivienda</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className='Bien-1c'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Conservación">
                                <p className='letra-sub'>Conservación</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Renovación">
                                <p className='letra-sub'>Renovación</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/Estructura urbana/Tratamientos y normas urbanísticas/Desarrollo">
                                <p className='letra-sub'>Desarrollo</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='submenu-item submenu-3'>
                    <ul className='Pob-4d'>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Acueducto">
                                <p className='letra-sub'>Agua y Alcantarillado</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Ga">
                                <p className='letra-sub'>Sistema de Gas</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Energia">
                                <p className='letra-sub'>Sistema de Energía Eléctrica</p>
                            </Link>
                        </li>
                        <li className='option invisible'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/componente bienestar/infraestructura/Sistema de servicios públicos/Telecomunicaciones">
                                <p className='letra-sub'>Sistema de Telecomunicaciones</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>}
            {/* Modelos urbanos */}
            {showModelosU && <div className='smt' id='submt' onMouseLeave={() => {
                esconderTodo()
            }}>
                <div className='submenu-item submenu-1'>
                    <ul>
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Modelos Urbanos/Bogotá Colonial">
                                <p className='letra-sub'>Bogotá Colonial</p>
                            </Link>
                        </li>
                        <li className='option'>
                            <Link to="/sociedad-de-mejoras-y-ornato-bogota/Modelos Urbanos/Bogotá Republicana">
                                <p className='letra-sub'>Bogotá Republicana</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>

    );
};

export default Menu;
