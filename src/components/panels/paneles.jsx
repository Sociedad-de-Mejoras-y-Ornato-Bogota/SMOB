import { Link } from "react-router-dom"
import './paneles.css'
const Panels = () => {
    return (
        <div className="panels-container">
            <Link to="construyendo civilidad">
                <p className="panels-civilidad"> CONSTRUYENDO CIVILIDAD</p>
            </Link>

            <div className="panels">
                <Link to="/construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Complejidad<span >y Civilidad</span>
                        </p>
                        <p className="panel-info">
                            EL CIUDADANO
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel1-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="/marco institucional">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Marco <span>Institucional</span>
                        </p>
                        <p className="panel-info">
                            CIUDADANÍA Y CIVILIDAD
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel2-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="/Componente poblacional">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente <span>Poblacional</span>
                        </p>
                        <p className="panel-info">
                            CONFLICTO Y CIVILIDAD
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel3-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="/componente territorial">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente <span>Territorial</span>
                        </p>
                        <p className="panel-info">
                           CLASIFICACIÓN  <br /> DEL TERRITORIO
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel4-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="/componente bienestar">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente <span>Bienestar</span>
                        </p>
                        <p className="panel-info">
                            PLANES DE DESARROLLO Y  <br />ORDENAMIENTO TERRITORIAL
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel5-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="/Modelos Urbanos">
                    <div className="panels-face">
                        <p className='panel-title'>
                          Modelos<span>de ciudad</span>
                        </p>
                        <p className="panel-info">
                            EL CAMBIO
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel6-frontal' />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Panels