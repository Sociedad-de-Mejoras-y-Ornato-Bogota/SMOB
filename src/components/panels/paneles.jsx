import { Link } from "react-router-dom"
import './paneles.css'
const Panels = () => {
    return (
        <div className="panels-container">
            <Link to="construyendo civilidad">
                <p className="panels-civilidad"> CONSTRUYENDO CIVILIDAD</p>
            </Link>

            <div className="panels">
                <Link to="marco institucional">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Marco <br></br> Institucional
                        </p>
                        <p className="panel-info">
                            CIUDADANÍA Y CIVILIDAD
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel1-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="Componente poblacional">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente<br></br> Poblacional
                        </p>
                        <p className="panel-info">
                            CONFLICTOS Y CIVILIDAD
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel2-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="Componente territorial">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente<br></br> Territorial
                        </p>
                        <p className="panel-info">
                            CLASIFICACIÓN DEL TERRITORIO
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel3-frontal' />
                    </div>
                </Link>
            </div>
            <div className="panels">
                <Link to="componente bienestar">
                    <div className="panels-face">
                        <p className='panel-title'>
                            Componente<br></br> Bienestar
                        </p>
                        <p className="panel-info">
                            PLANES DE DESARROLLO Y  <br />ORDENAMIENTO TERRITORIAL
                        </p>
                        <p className="panel-boton">
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-panel' id='panel4-frontal' />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Panels