import { Link } from "react-router-dom"
const Pronto = () => {
    return (
        <>
            <div className="" style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <p style={{ color: "black", fontSize:"1vw" }}>Pronto estará disponible el contenido de esta página</p>
                <div style={{ display: "flex" }}>
                    <Link to="/">
                        <img src="https://i.ibb.co/jT1YtpX/LOGO-PLATAFORMA-WEB-SMOB-Mesa-de-trabajo-1.png" alt="logo" style={{ width: '4rem', height: '4rem' }} />
                    </Link>
                    <Link to="/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá">
                        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png" alt="logo" style={{ width: '4rem', height: '4rem' }} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Pronto