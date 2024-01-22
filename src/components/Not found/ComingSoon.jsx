import { Link } from "react-router-dom"
import "./styles.css"
const Pronto = () => {
    return (
        <>
            <div className="div-pronto">
                <p className="div-pronto_text">Pronto estará disponible el contenido de esta página</p>
                <div className="div-pronto_div-logos">
                    <Link to="/">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png" alt="Logo plataforma Construyendo Civilidad" className="div-pronto_div-logos_logos"  />
                    </Link>
                    <Link to="/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="Logo Sociedad de Mejoras y Ornato Bogotá"  className="div-pronto_div-logos_logos" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Pronto