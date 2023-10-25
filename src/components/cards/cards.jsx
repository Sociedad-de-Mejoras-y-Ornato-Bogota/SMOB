
import './cards.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    return (

        <main className='cards' style={{width:"100vw"}}>
            <div className='card'>
                <Link to="marco institucional">
                    <div className='face front'>
                        <p className='card-title'>
                            Marco Institucional<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" id='card1-frontal' />
                    </div>
                    <div className='face back'>
                        <div className='image-card' alt="" style={{ backgroundColor: "#060000" }} />
                        <p className='card-title'>
                            Marco Institucional<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                    </div>
                </Link>
            </div>

            <div className='card'>
                <Link to="Componente poblacional">
                    <div className='face front' >
                        <p className='card-title' style={{ zIndex: "9999" }}>
                            Componente Poblacional<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" id='card2-frontal' />
                    </div>
                    <div className='face back'>
                        <p className='card-title' style={{ zIndex: "9999" }}>
                            Componente Poblacional<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' style={{ backgroundColor: "#060000" }} />
                    </div>
                </Link>
            </div>

            <div className='card'>
                <Link to="Componente territorial">
                    <div className='face front'>
                        <p className='card-title'>
                            Componente Territorial<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" id='card3-frontal' />
                    </div>
                    <div className='face back'>
                        <p className='card-title'>
                            Componente Territorial<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" style={{ backgroundColor: "#060000" }} />
                    </div>
                </Link>
            </div>

            <div className='card'>
                <Link to="Componente bienestar">
                    <div className='face front'>
                        <p className='card-title'>
                            Componente Bienestar<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" id='card4-frontal' />
                    </div>
                    <div className='face back'>
                        <p className='card-title'>
                            Componente Bienestar<br></br>
                            <button className="btn-cards">Explorar</button>
                        </p>
                        <div className='image-card' alt="" style={{ backgroundColor: "#060000" }} />
                    </div>
                </Link>
            </div>
        </main>
    )
}