import Page_libro from "../../../components/page-libro/page-libro"
import { Link } from 'react-router-dom';
import './CiudadaniaYcivilidad.css';
export default function CiudaniaYCivilidad() {

  return (
    <>
      <Page_libro url_ver_mas="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/1.pdf" url_book="https://smob-storage.s3.us-east-2.amazonaws.com/libros/construyendo-civilidad/1.pdf" name_component="Ciudadanía y civilidad" />
      <div className="contenedorCC">
        <div className="botonesCC">
          <Link to={`/construyendo civilidad/Cuidad y cuidadanía/Orígenes de la civilidad en Colombia`} className="botonCC">Orígenes de la civilidad en Colombia</Link>
          <Link to={`/construyendo civilidad/Cuidad y cuidadanía/Bogotá: una ciudad compleja`} className="botonCC">Bogotá: una ciudad compleja</Link>
          <Link to={`/construyendo civilidad/Cuidad y cuidadanía/Civilidad y complejidad`} className="botonCC">Civilidad y complejidad</Link>
          <Link to={`/construyendo civilidad/Cuidad y cuidadanía/La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá`} className="botonCC">La responsabilidad social de SMOB</Link>
        </div>
      </div>
    </>
  )
}
